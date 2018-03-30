#!/usr/bin/env bash
readonly currentDir=$(cd $(dirname $0); pwd)
cd ${currentDir}
rm -rf runner.apk
rm -rf dist
# rm -rf platforms/android
# ionic cordova build android --prod --release
# keytool -genkey -v -keystore runner-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias imeepos

# keytool -importkeystore -srckeystore runner-release-key.jks -destkeystore runner-release-key.jks -deststoretype pkcs12

rm -rf runner.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore runner-release-key.jks ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk imeepos
/Users/meepo/Library/Android/sdk/build-tools/27.0.2/zipalign -v 4 ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk runner.apk
/Users/meepo/Library/Android/sdk/build-tools/27.0.2/apksigner verify runner.apk

# export PATH=${PATH}:/Users/meepo/Library/Android/sdk/tools  
# export PATH=${PATH}:/Users/meepo/Library/Android/sdk/platform-tools  
