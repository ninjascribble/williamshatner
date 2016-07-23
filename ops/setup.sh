#!/bin/bash

# Ensure latest
apt-get update

is_installed() {
  type -p "$1";
}

# Install general tools
if ! is_installed build-essential; then
  apt-get install -y build-essential
fi

if ! is_installed gpp; then
  apt-get install -y gpp
fi

if ! is_installed make; then
  apt-get install -y make
fi

# Install nginx
if ! is_installed nginx; then
  apt-get install -y nginx
fi

# Install logrotate
if ! is_installed logrotate; then
  apt-get install -y logrotate
fi

# Install and configure node
if ! is_installed nodejs; then
  curl -sL https://deb.nodesource.com/setup_6.x | bash -
  apt-get install -y nodejs
fi

# Configure nginx
cp /var/www/ops/nginx.localhost /etc/nginx/sites-available/default
service nginx restart

# Configure logrotate
cp /var/www/ops/logrotate.conf /etc/logrotate.d/shatner.conf

# Install and configure the NIMH-LCM application
touch /var/log/shatner.log
cp /var/www/ops/shatner.conf /etc/init/shatner.conf
service shatner restart
