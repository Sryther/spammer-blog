#!/bin/bash
. ./ticktick.sh
file=$1
DATA=`cat $file`

tickParse "$DATA"

for site in ``sites.items()``; do
    echo "Processing ${!site}"
    casperjs index.js ${!site}
done

echo "Done!"
