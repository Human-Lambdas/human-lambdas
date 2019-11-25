#!/bin/bash
set -e
if psql -lqt | cut -d \| -f 1 | grep -qw $POSTGRES_DB; then
    # database exists
    echo "database already exists!"
else
    # database does not exists
echo "creating databse and user for psql"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE USER $POSTGRES_USER WITH ENCRYPTED PASSWORD '$POSTGRES_PASSWORD';
  CREATE DATABASE $POSTGRES_DB;
  GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;
EOSQL

fi
