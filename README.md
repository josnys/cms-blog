# Laravel Starter

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## About Laravel Starter
This repository contains a base to start any project with Laravel 10.* with Breeze | Inertia/React v1.* and TailwindCSS v3.* usin Vite. It also comes with permission & role out of the box you can extend to continue your project.

## Installation with docker
Make sure you have docker installed in your system along side composer.

Clone the repository, 
> git clone git@github.com:josnys/laravel-starter.git

CD the cloned folder, then run the following commands in your Shell : 

To download PHP depencies, run
> composer install

To download JavaScript depedencies, run
> npm install

Then run
> docker-compose build
To build the environment, following the command
> docker-compose up -d

Next run
> docker-compose ps
to find the running instance to access the commant line of the container by running
> docker-compose exec -it <container_name> bash

Create and open the .env file to configure your environment, and next run
> php artisan migrate --seed

Hit localhost in your browser, and use admin/password to login with administrator privileges.

## Installation without docker

Clone the repository, 
> git clone git@github.com:josnys/laravel-starter.git

CD the cloned folder, then run the following commands in your Shell : 

To download PHP depencies, run
> composer install

To download JavaScript depedencies, run
> npm install
Create and open the .env file to configure your environment, and next run
> php artisan migrate --seed
Finaly run
> php artisan serve
> npm run dev
Navigate to localhost:8000 or 127.0.0.1:8000 to access the app using admin/password to login with administrator privileges.

## Note
Any suggestion or PR is welcome to make this a better starting point for anyone willing to use it.

# Enjoy !