# Ensure latest
apt-get update

# Install general tools
apt-get install -y build-essential gpp make

# Install and configure nginx
apt-get install -y nginx
cp /var/src/provisioning/nginx.localhost /etc/nginx/sites-available/default
service nginx restart
