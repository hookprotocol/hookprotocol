#!/bin/bash

cd "$(dirname "$0")"

sleep 2 && open "http://localhost:9099"

python3 -m http.server 9099

