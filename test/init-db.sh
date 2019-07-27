#!/bin/bash

echo "Running db seed commands"

psql -d retsy_database -c "INSERT INTO products VALUES ('1213d10e-b6b5-4d6d-af44-2b10d334ed52','http://lorempixel.com/640/480/nature');" -U postgres
