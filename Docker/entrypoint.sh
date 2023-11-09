#!/bin/bash

echo "Publishing vendor files..."

if [ ! -f "vendor/autoload.php" ]; then
     composer install --no-progress --no-interaction
     echo "Vendor files published."
else
     echo "Vendor files already published."
fi

echo "Setting environment file..."

if [ ! -f ".env" ]; then
     cp .env.example .env
     echo ".env file set for $APP_ENV."
else
     echo ".env file already existed"
fi

php artisan optimize:clear

exec docker-php-entrypoint "$@"