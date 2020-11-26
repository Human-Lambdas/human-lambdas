#!/bin/bash
set -euo pipefail
set -x

# Checking if database is ready
echo "checking if database is ready"
python check_db.py

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate