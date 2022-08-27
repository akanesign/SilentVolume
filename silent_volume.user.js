// ==UserScript==
// @name         Silent Volume
// @version      0.2
// @description  Please be quiet in the room
// @author       akanesign
// @match        https://tweetdeck.twitter.com/
// @match        https://www.youtube.com/watch?*
// @match        https://youtube.com/watch?*
// @match        https://twitter.com/*
// @match        https://twitter.com/*/*/*
// @match        https://video.twimg.com/ext_tw_video/*/*/*/*/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// ==/UserScript==
var volume_default = 0.25;

function set_volumes() {
  var date = new Date();
  var time = date.getHours();

  if ( time > 20 || time < 9 ) {
    var target = document.getElementsByTagName("video");
    for( var cnt = 0; cnt < target.length; cnt++ ) {
       target[ cnt ].volume = volume_default;
    }
  }
  setTimeout( set_volumes, 1000 );
}

$(document).ready(function(){
  setTimeout( set_volumes, 1000 );
})();
