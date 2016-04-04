# cordova-iframe-communication
To run this project and test iFrame communication between different domains in cordova you should

* Go to the folder `mhe-iframe-content`
* Run the command `$ npm install`
* Run the command `$ gulp` and then `$gulp dev`
* Navigate to the folder `mhe-iframe-app`
* Add iOS as a platform running the command `$ cordova platforms add iOS`
* Edit the file `www/index.html` and update the IP address from used as a source of the iFrame with your ip
* Run the app on a device with the command `$ cordova run ios`

You should be able to get a picture successfully from a nested iFrame from a different domain. This example uses [Bellhop](https://github.com/SpringRoll/Bellhop), an alternative should be [i-frame API](https://www.npmjs.com/package/iframe-api).

Enjoy! :)

