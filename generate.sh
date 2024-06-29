#!/usr/bin/env bash

source .env
yarn typeorm-model-generator -e postgres -h ${DB_HOST} -P ${DB_PORT} -u ${DB_USER} -x ${DB_PASSWORD} -d ${DB_NAME}
mv output/entities/ src/entities/
mv output/ormconfig.json src/ormconfig.json
yarn node-index update src/entities/
rm -rf output/
yarn lint --fix
