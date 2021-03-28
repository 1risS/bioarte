#!/bin/bash
file=$1
w=576
h=880
mogrify -resize ${w}x${h}^ -gravity center -crop ${w}x${h}+0+0 +repage $file
