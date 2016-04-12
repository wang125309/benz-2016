(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(function(){
    $.post("/portal/wxconfig/",{
		"url":location.href,
	},function(data){
		wx.config(data);
        var share = function() {
            shareJson = {
                link:location.href,
                imgUrl:"http://benz.importos.com/static/image/share-little-icon.jpg",
                title:"天地即征途-2016 梅赛德斯-奔驰南区SUV征服之旅",
                desc:"天地即征途——2016梅赛德斯-奔驰SUV南区征服之旅即将在万众瞩目中震撼来袭！"
            };
			wx.onMenuShareTimeline(shareJson);
			wx.onMenuShareAppMessage(shareJson);
        };
		wx.ready(function(){
            share();
        });
		wx.error(function(res){
			$.get("/portal/update_access_token/",function(data){
				$.post("/portal/wxconfig/",{
					"url":location.href
				},function(data){
					wx.config(data);
					wx.ready(function(){
		                share();
                    });
		        });
		    });
        });
    });
});

},{}]},{},[1])