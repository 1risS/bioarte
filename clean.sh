#!/bin/sh
perl -CSDA -plE 's/[^\S\t]/ /g' $1 > $1.new
mv $1.new $1
