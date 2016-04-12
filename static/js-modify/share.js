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
