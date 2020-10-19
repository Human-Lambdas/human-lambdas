#!/bin/bash

# Checking if database is ready
echo "checking if database is ready"
python check_db.py

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# collect static files
echo "collect static files"
python manage.py collectstatic --noinput

# temporary script for migrating data # TODO: Remove after migration
echo "initiate data migration"
python manage.py migratedata

# Start server
echo "Starting server"
gunicorn hl_rest_api.wsgi -b 0.0.0.0:8000 -w 4