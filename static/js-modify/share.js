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
                desc:"天地即征途——2016 梅赛德斯-奔驰SUV 即将在万众瞩目中强势来袭，作为南区该活动的前奏预热，将在南区10 大城市全线倾情展开梅赛德斯-奔驰南区SUV 征服之旅"
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
