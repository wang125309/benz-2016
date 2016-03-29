require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("./share.js");

var GUANGZHOU = '1';
var NANNING = '2';
var SHENZHEN = '3';
var FOSHAN = '4';
var QUANZHOU = '5';
var CHANGSHA = '6';
var NANCHANG = '7';
var FUZHOU = '8';

var cnt = 1;
interval = setInterval(function(){
    width = $(".processing").css("width");
    $(".processing").css({
        "width":(cnt*1)+"%"
    });
    $(".num").html(cnt*2+"%");
    if(cnt == 49) {
        clearInterval(interval);
    }
    else {
        cnt += 1;
    }
},30);

var imagesCnt = 0;
var loadImage = function(src) {
    var image = new Image();
    image.onload = function(e) {
        if ((image.readyState=='complete'||image.readyState=="loaded")||image.complete)  {
            imagesCnt ++;
            console.log(imagesCnt);
            if(imagesCnt == 47) {
                work();
            }
        }
        else {
            image.onreadystatechange(e);
        }
    };
    image.src = src;
};

for(i=0;i<35;i++) {
    loadImage('/static/image/'+i+'.jpg');
}
for(i=1;i<=4;i++) {
    loadImage('/static/image/background'+i+'.jpg');
    loadImage('/static/image/background'+i+'.jpg');
}
loadImage('/static/image/map-title.png');
loadImage('/static/image/background.jpg');
loadImage('/static/image/car1.jpg');
loadImage('/static/image/car2.jpg');

work = function(){
    setTimeout(function(){
        clearInterval(interval);
        $(".processing").css("width","50%");
        $(".num").html("100%");
        $(".loading-background").css("display","none");
        $(".kv").css("display","block");
    },500);
    $("#audio").attr({"src":"/static/image/background.mp3"});
    $("#audio")[0].play();
    $(".music").on("click",function(){
        if(on) {
            on = false;
            document.getElementById("audio").pause();
            $(".music").removeClass("music-play");
        }   
        else {
            on = true;
            document.getElementById("audio").play();
            $(".music").addClass("music-play");
        }
    });
    flag = false;
    $(".kv").on("touchmove",function(){
        if(flag == true) {
            return false;
        }
        flag = true;
        kv = 0;
        $(".kv .up").css("display","none");
        $(".kv .title").velocity({
            "opacity":"0"
        },1050);
        $(".kv .map-title").velocity({
            "opacity":"1"
        },1050);
        $(".kv-background").css("display","none");
        kvani = setInterval(function(){
            $(".kv"+kv).css("display","block");
            if(kv > 0) {
                $(".kv"+(kv-1)).css("display","none");
                kv += 1;
            }
            else {
                kv += 1;
            }
            if(kv == 35) {
                clearInterval(kvani);
            }
        },30);
        for(i=1;i<=8;i++) {
            $(".city-point"+i).css("display","block");
        }
    });
    $(".city-point").on("tap",function(){
        showCity($(this).data("index"));
    });
    $(".car1").on("swipeLeft",function(){
        $(".car-wrapper1").velocity("fadeOut"); 
        $(".car-wrapper2").velocity("fadeIn"); 
    });
    $(".car2").on("swipeRight",function(){
        $(".car-wrapper2").velocity("fadeOut"); 
        $(".car-wrapper1").velocity("fadeIn"); 
    });
    $(".ask-close").on("tap",function(){
        $(".background").css("display","none");
    });
    var showCity = function(i) {
        $(".kv").css("display","none");
        $(".city"+i).css("display","block");
    };
    var hideCity = function(i) {
        $(".kv").css("display","block");
        $(".city"+i).css("display","none");
    };
    $(".back").on("tap",function(){
        hideCity($(this).data("index")); 
    });
    var formShow = function() {
        $(".background").css("display","block");
        $(".kv").css("display","none");
    };
    $(".ask").on("tap",function(){
        formShow(); 
    });
    $(".car-icon").on("tap",function(){
        $(".car").css("display","block");
    });
    $(".close").on("tap",function(){
        $(".car").css("display","none"); 
    });
    w = $(window).width();
    h = $(window).height();
    $(document).on("touchmove",function(){
        return false;
    });
    on = false;
    $("#audio").attr({"src":"/static/image/background.mp3"});
    $("#audio")[0].play();
    
}
