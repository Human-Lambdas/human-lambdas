#!/bin/bash

# Checking if database is ready
echo "checking if database is ready"
python check_db.py

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# collect static files
echo "collect static files"
python manage.py collectstatic

# Start server
echo "Starting server"
python manage.py runserver 0.0.0.0:8000