// ==UserScript==
// @name         Silent Volume
// @version      0.6
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
// @match        https://www.tiktok.com/*/
// @match        https://www.tiktok.com/*/*
// @match        https://www.tiktok.com/*/*/*
// @match        https://www.instagram.com/
// @match        https://www.instagram.com/*/*
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @updateURL    https://github.com/akanesign/SilentVolume/raw/main/silent_volume.user.js
// @downloadURL  https://github.com/akanesign/SilentVolume/raw/main/silent_volume.user.js
// ==/UserScript==
var volume_default = 0.25;

function set_volumes() {
  var date = new Date();
  var time = date.getHours();
  var opt_Volume = 0.25;

  if ( time > 23 || time < 9 ) {
    if ( GM_getValue("opt_Volume") != undefined ) opt_Volume = GM_getValue("opt_Volume");

    var target = document.getElementsByTagName("video");
    for( var cnt = 0; cnt < target.length; cnt++ ) {
       var pr = target[ cnt ].parentNode;
       target[ cnt ].volume = opt_Volume;

       if( pr.querySelectorAll(".silent-volume").length == 0 ) {
         var dl = document.createElement("div");
         dl.style.height = target[ cnt ].style.height;
         dl.style.width = target[ cnt ].style.width;

         var vl = document.createElement("input");
         vl.setAttribute("type", "range");
         vl.setAttribute("title", "âπó êßå¿:" + opt_Volume * 100 + "%");
         vl.setAttribute("class", "silent-volume");
         vl.setAttribute("min", "0");
         vl.setAttribute("max", "100");
         vl.setAttribute("size", "10");
         vl.setAttribute("value", opt_Volume * 100);
         vl.setAttribute("step", "5");
         vl.setAttribute("style", "right:0; position:absolute; margin:20px; width:100px; z-index:100;")

         vl.addEventListener('change', (event) => {
           GM_setValue( "opt_Volume", event.target.value/100 );
           event.target.title = "âπó êßå¿:" + event.target.value + "%";
         });
         dl.append(vl);
         pr.append(dl);
       }
    }
  }
  setTimeout( set_volumes, 1000 );
}

$(document).ready(function(){
  setTimeout( set_volumes, 1000 );
})();
