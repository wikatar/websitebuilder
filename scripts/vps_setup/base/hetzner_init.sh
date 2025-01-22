#!/bin/bash

# Base Hetzner VPS initialization script
# Usage: ./hetzner_init.sh --server-ip=X.X.X.X

set -e

# Parse arguments
while [ $# -gt 0 ]; do
    case "$1" in
        --server-ip=*)
            SERVER_IP="${1#*=}"
            ;;
        *)
            echo "Unknown parameter: $1"
            exit 1
            ;;
    esac
    shift
done

# Validate required parameters
if [ -z "$SERVER_IP" ]; then
    echo "Error: --server-ip is required"
    exit 1
fi

echo "🚀 Initializing Hetzner VPS at $SERVER_IP..."

# Update system
echo "📦 Updating system packages..."
apt-get update
apt-get upgrade -y

# Install essential packages
echo "🔧 Installing essential packages..."
apt-get install -y \
    nginx \
    certbot \
    python3-certbot-nginx \
    ufw \
    fail2ban \
    git \
    curl \
    wget \
    vim \
    htop \
    redis-server \
    postgresql \
    supervisor

# Configure firewall
echo "🛡️ Setting up firewall..."
ufw default deny incoming
ufw default allow outgoing
ufw allow ssh
ufw allow http
ufw allow https
ufw --force enable

# Configure fail2ban
echo "🔒 Setting up fail2ban..."
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
systemctl enable fail2ban
systemctl start fail2ban

# Set up Nginx
echo "🌐 Setting up Nginx..."
rm /etc/nginx/sites-enabled/default
cat > /etc/nginx/nginx.conf <<EOL
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
    worker_connections 768;
}

http {
    sendfile on;
    tcp_nopush on;
    tcp_nodelay on;
    keepalive_timeout 65;
    types_hash_max_size 2048;

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;

    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    gzip on;
    gzip_disable "msie6";

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/*;
}
EOL

# Create websites directory
echo "📁 Creating websites directory..."
mkdir -p /var/www/websites

# Set up log rotation
echo "📝 Setting up log rotation..."
cat > /etc/logrotate.d/websites <<EOL
/var/www/websites/*/logs/*.log {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data adm
    sharedscripts
    postrotate
        [ ! -f /var/run/nginx.pid ] || kill -USR1 \`cat /var/run/nginx.pid\`
    endscript
}
EOL

# Set up backup directory
echo "💾 Setting up backup directory..."
mkdir -p /var/backups/websites

echo "✅ Base server setup complete!"
echo "Next steps:"
echo "1. Deploy individual websites using deploy_site.sh"
echo "2. Configure SSL certificates"
echo "3. Set up monitoring" 