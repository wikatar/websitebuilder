#!/bin/bash

# Daily backup script for website data
# Usage: ./daily_backup.sh --site=example.com

set -e

# Parse arguments
while [ $# -gt 0 ]; do
    case "$1" in
        --site=*)
            SITE="${1#*=}"
            ;;
        *)
            echo "Unknown parameter: $1"
            exit 1
            ;;
    esac
    shift
done

# Validate required parameters
if [ -z "$SITE" ]; then
    echo "Error: --site is required"
    exit 1
fi

# Configuration
BACKUP_ROOT="/var/backups/websites"
SITE_ROOT="/var/www/websites/$SITE"
DATE=$(date +%Y%m%d)
BACKUP_DIR="$BACKUP_ROOT/$SITE/$DATE"
RETENTION_DAYS=7

echo "🚀 Starting backup for $SITE..."

# Create backup directory
echo "📁 Creating backup directory..."
mkdir -p "$BACKUP_DIR"

# Backup website files
echo "📦 Backing up website files..."
tar -czf "$BACKUP_DIR/files.tar.gz" -C "$SITE_ROOT" .

# Backup Nginx configuration
echo "🌐 Backing up Nginx configuration..."
cp "/etc/nginx/sites-available/$SITE.conf" "$BACKUP_DIR/nginx.conf"

# Backup SSL certificates if they exist
if [ -d "/etc/letsencrypt/live/$SITE" ]; then
    echo "🔒 Backing up SSL certificates..."
    cp -r "/etc/letsencrypt/live/$SITE" "$BACKUP_DIR/ssl"
fi

# Create backup manifest
echo "📝 Creating backup manifest..."
cat > "$BACKUP_DIR/manifest.json" <<EOL
{
    "site": "$SITE",
    "date": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
    "contents": {
        "files": "files.tar.gz",
        "nginx": "nginx.conf",
        "ssl": "ssl/"
    }
}
EOL

# Set permissions
echo "🔑 Setting permissions..."
chmod -R 600 "$BACKUP_DIR"

# Cleanup old backups
echo "🧹 Cleaning up old backups..."
find "$BACKUP_ROOT/$SITE" -type d -mtime +$RETENTION_DAYS -exec rm -rf {} \;

# Create symlink to latest backup
ln -sf "$BACKUP_DIR" "$BACKUP_ROOT/$SITE/latest"

echo "✅ Backup complete!"
echo "Backup location: $BACKUP_DIR"
echo "Latest backup symlink: $BACKUP_ROOT/$SITE/latest" 