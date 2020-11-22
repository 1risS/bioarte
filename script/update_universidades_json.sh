#!/bin/bash
SPREADSHEET_ID=1jKRRhVoUHLuCX-KKEWMIQcMoHgBnnLWj
wget "https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv" -O /tmp/universidades.csv
script/universidades_csv_to_json.py /tmp/universidades.csv -o src/data/universidades.geojson
