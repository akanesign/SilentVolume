// ==UserScript==
// @name         Silent Volume
// @version      0.3
// @description  Please be quiet in the room
// @author       akanesign
// @match        https://tweetdeck.twitter.com/
// @match        https://www.youtube.com/watch?*
// @match        https://youtube.com/watch?*
// @match        https://twitter.com/*
// @match        https://twitter.com/*/*/*
// @match        https://video.twimg.com/ext_tw_video/*/*/*/*/*
// @match        https://www.nicovideo.jp/
// @match        https://www.nicovideo.jp/*/*
// @match        https://animestore.docomo.ne.jp/*/*
// @match        https://www.amazon.co.jp/gp/video/detail/*/*
// @match        https://tver.jp/episodes/*
// @match        https://www.b-ch.com/titles/*/*
// @match        https://www.netflix.com/*
// @match        https://www.netflix.com/watch/*
// @match        https://www.hulu.jp/watch/*
// @match        https://fod.fujitv.co.jp/title/*/*
// @match        https://video.fc2.com/content/*
// @match        https://www.dmm.com/digital/*/*/*/*/*/*/*/*
// @match        https://www.dazn.com/*/*/*/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/akanesign/SilentVolume/raw/main/silent_volume.user.js
// @downloadURL  https://github.com/akanesign/SilentVolume/raw/main/silent_volume.user.js
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
