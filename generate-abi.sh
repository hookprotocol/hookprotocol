#!/bin/bash

cd "$(dirname "$0")"

TARGET=www/assets/javascript/abis.js

echo "// generate abi" > $TARGET

echo "window.abis = {}" >> $TARGET

for file in Registry Whitelist Bridge HookBridgeERC20
do
    echo "process $file.json..."
    echo -n "window.abis.$file = " >> $TARGET
    more ../contracts/abi/$file.json | tr -d " " | tr -d "\n" >> $TARGET
    echo "" >> $TARGET
done

echo -n "window.addresses = " >> $TARGET
more ../contracts/contracts.json >> $TARGET
