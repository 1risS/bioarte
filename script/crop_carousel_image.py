#!/usr/bin/env python3
import os
import subprocess
from glob import glob


IMAGE_WIDTH = 576
IMAGE_HEIGHT = 880

BASE_DIR = os.path.join('static', 'images')
PATTERNS = [
    'artists/*/*.jpg',
    'artists/*/*.png',
    'biotecnologia/*/*.jpg',
    'biotecnologia/*/*.png',
]
SKIP_PATTERNS = [
    'artists/*/main.jpg',
    'biotecnologia/*/main.jpg',
    'biotecnologia/logoEmpresas/*',
    'biotecnologia/iconos/*',
]


def run_subprocess(cmd):
    print(cmd)
    subprocess.run(cmd, shell=True, check=True)


def crop_image(img_path, width=IMAGE_WIDTH, height=IMAGE_HEIGHT):
    w, h = width, height
    run_subprocess(f'mogrify -resize {w}x{h}^ -gravity center -crop {w}x{h}+0+0 +repage "{img_path}"')


def main():
    images = []
    for pattern in PATTERNS:
        pat = os.path.join(BASE_DIR, pattern)
        images.extend(list(glob(pat)))

    skip_images = []
    for pattern in SKIP_PATTERNS:
        pat = os.path.join(BASE_DIR, pattern)
        skip_images.extend(list(glob(pat)))

    images = set(images) - set(skip_images)
    for img in sorted(images):
        crop_image(img)


if __name__ == "__main__":
    main()
