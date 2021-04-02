#!/bin/bash
SPREADSHEET_ID=1AfpwPBQaiaMoFYgnVcxPHB0i2a2VvoGO
wget "https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv" -O /tmp/universidades.csv
python3 script/universidades_csv_to_json.py /tmp/universidades.csv -o src/data/universidades.json
