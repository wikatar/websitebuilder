#!/bin/bash

# Per-website deployment script
# Usage: ./deploy_site.sh --domain=example.com --template=business --ssl=true

set -e

# Parse arguments
while [ $# -gt 0 ]; do
    case "$1" in
        --domain=*)
            DOMAIN="${1#*=}"
            ;;
        --template=*)
            TEMPLATE="${1#*=}"
            ;;
        --ssl=*)
            SSL="${1#*=}"
            ;;
        *)
            echo "Unknown parameter: $1"
            exit 1
            ;;
    esac
    shift
done

# Validate required parameters
if [ -z "$DOMAIN" ] || [ -z "$TEMPLATE" ]; then
    echo "Error: --domain and --template are required"
    exit 1
fi

echo "🚀 Deploying website for $DOMAIN using template $TEMPLATE..."

# Create website directory
SITE_DIR="/var/www/websites/$DOMAIN"
echo "📁 Creating website directory at $SITE_DIR..."
mkdir -p "$SITE_DIR"/{public_html,logs,backup}

# Set up Nginx configuration
echo "🌐 Setting up Nginx configuration..."
cat > "/etc/nginx/sites-available/$DOMAIN.conf" <<EOL
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    root $SITE_DIR/public_html;
    index index.html;

    access_log $SITE_DIR/logs/access.log;
    error_log $SITE_DIR/logs/error.log;

    location / {
        try_files \$uri \$uri/ =404;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires max;
        log_not_found off;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
EOL

# Enable site
ln -sf "/etc/nginx/sites-available/$DOMAIN.conf" "/etc/nginx/sites-enabled/"

# Set up SSL if requested
if [ "$SSL" = "true" ]; then
    echo "🔒 Setting up SSL certificate..."
    certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos --email "admin@$DOMAIN"
fi

# Deploy website template
echo "🎨 Deploying website template..."
case "$TEMPLATE" in
    "business")
        cp -r /var/www/templates/business/* "$SITE_DIR/public_html/"
        ;;
    "blog")
        cp -r /var/www/templates/blog/* "$SITE_DIR/public_html/"
        ;;
    *)
        echo "Unknown template: $TEMPLATE"
        exit 1
        ;;
esac

# Set permissions
echo "🔑 Setting permissions..."
chown -R www-data:www-data "$SITE_DIR"
chmod -R 755 "$SITE_DIR"

# Restart Nginx
echo "🔄 Restarting Nginx..."
systemctl restart nginx

echo "✅ Website deployment complete!"
echo "Next steps:"
echo "1. Update DNS records to point to this server"
echo "2. Test website at http://$DOMAIN"
if [ "$SSL" = "true" ]; then
    echo "3. Test SSL at https://$DOMAIN"
fi 