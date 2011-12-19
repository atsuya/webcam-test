# Webcam Test

This is an example to demonstrate a webcam streaming only using javascript. It accesses webcam using `getUserMedia` api to capture an image, sends it to server, and then receiver receives the image. Because the sender does it very frequently, it looks like it is streaming a video.


## Prepare

You need this [specific build of Opera](http://dev.opera.com/articles/view/labs-more-fun-using-the-web-with-getusermedia-and-native-pages/) that supports `getUserMedia` api to access webcam. After installing it, two setting must be updated. Go to `about:config` and enable `Security Prefs` -> `Allow Camera to To Canvas Copy`, and `User Prefs` -> `Enable WebSockets`.

Oh, and you need node.js installed.


## How to Run

Clone this repo and run the following:

    $ npm install
    $ node app.js

Then access to [http://localhost:8000/sender.html](http://localhost:8000/sender.html) using the Opera. Access to [http://localhost:8000/receiver.html](http://localhost:8000/receiver.html) using, maybe Chrome or Safari.

You should see the streaming going on.


## References

I referenced and used code from following aricles:

* [http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview](http://my.opera.com/core/blog/2011/03/23/webcam-orientation-preview)

* [http://francisshanahan.com/index.php/2011/stream-a-webcam-using-javascript-nodejs-android-opera-mobile-web-sockets-and-html5/comment-page-1/](http://francisshanahan.com/index.php/2011/stream-a-webcam-using-javascript-nodejs-android-opera-mobile-web-sockets-and-html5/comment-page-1/)
