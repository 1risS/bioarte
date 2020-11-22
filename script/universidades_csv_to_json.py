#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re
import csv
import json


def dms2dec(dms_str):
    """Return decimal representation of DMS (spanish?)

    >>> dms2dec(utf8(48°53'10.18"N))
    48.8866111111F

    >>> dms2dec(utf8(2°20'35.09"E))
    2.34330555556F

    >>> dms2dec(utf8(48°53'10.18"S))
    -48.8866111111F

    >>> dms2dec(utf8(2°20'35.09"O))
    -2.34330555556F

    """

    dms_str = re.sub(r'\s', '', dms_str)

    sign = -1 if re.search(r'[soSO]', dms_str) else 1

    numbers = [*filter(len, re.split(r'\D+', dms_str, maxsplit=4))]

    degree = numbers[0]
    minute = numbers[1] if len(numbers) >= 2 else '0'
    second = numbers[2] if len(numbers) >= 3 else '0'
    frac_seconds = numbers[3] if len(numbers) >= 4 else '0'

    second += "." + frac_seconds
    return sign * (int(degree) + float(minute) / 60 + float(second) / 3600)


def parse_decimal(coords_s):
    coords = ()
    if coords_s:
        lat_s, lon_s = coords_s.split(';')
        coords = (float(lon_s), float(lat_s))
    return coords


def parse_degree(coords_s):
    coords = ()
    if coords_s:
        lat_s, lon_s = coords_s.split(' ')
        lat = dms2dec(lat_s)
        lon = dms2dec(lon_s)
        coords = (lon, lat)
    return coords


def write_geojson(points_with_props, output_path):
    with open(output_path, "w") as f:
        d = {"type": "FeatureCollection", "features": []}
        for i, point_with_props in enumerate(points_with_props):
            coords, properties = point_with_props
            feature = {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": coords
                },
                "properties": properties,
            }
            d["features"].append(feature)
        f.write(json.dumps(d))


def parse_and_generate(*, input_file, output_file):
    res = []
    with open(input_file, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            keys = ['Institución', 'Facultad', 'Web Site']
            properties = {k: row[k] for k in keys}
            if row['Localizacion (decimal)']:
                coords = parse_decimal(row['Localizacion (decimal)'])
            else:
                coords = parse_degree(row['Localizacion'])

            # Only append features with valid coordinates
            if coords:
                res.append((coords, properties))
    write_geojson(res, output_file)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="parse CSV and generate JSON with markers")
    parser.add_argument("input", help="input CSV file")
    parser.add_argument("-o", "--output", help="output JSON file")

    args = parser.parse_args()

    parse_and_generate(input_file=args.input, output_file=args.output)
