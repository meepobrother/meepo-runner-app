#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf dist
ionic cordova build ios
# ionic cordova build ios --prod
