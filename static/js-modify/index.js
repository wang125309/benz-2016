require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("./getParams.js");
require("./share.js");

var GUANGZHOU = '1';
var NANNING = '2';
var SHENZHEN = '3';
var FOSHAN = '4';
var QUANZHOU = '5';
var CHANGSHA = '6';
var NANCHANG = '7';
var FUZHOU = '8';
var XIAMEN = '9';
var DONGGUAN = '10';

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
var city ;
window.onload = function() {

    var c = getQueryParams('city');
    if(c == 'guangzhou') {
        city = GUANGZHOU;
    }
    else if(c == 'nanning') {
        city = NANNING;
    }
    else if(c == 'shenzhen') {
        city = SHENZHEN;
    }
    else if(c == 'foshan') {
        city = FOSHAN;
    }
    else if(c == 'quanzhou') {
        city = QUANZHOU;
    }
    else if(c == 'changsha') {
        city = CHANGSHA;
    }
    else if(c == 'nanchang') {
        city = NANCHANG;
    }
    else if(c == 'fouzhou') {
        city = FUZHOU;
    }
    else if(c == 'xiamen') {
        city = XIAMEN;
    }
    else if(c == 'dongguan') {
        city = DONGGUAN;
    }

    var imagesCnt = 0;
    var loadImage = function(src) {
        var image = new Image();
        image.onload = function(e) {
            if ((image.readyState=='complete'||image.readyState=="loaded")||image.complete)  {
                imagesCnt ++;
                console.log(imagesCnt);
                if(imagesCnt == 20) {
                    work();
                }
            }
            else {
                image.onreadystatechange(e);
            }
        };
        image.src = src;
    };

    for(i=1;i<=10;i++) {
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
    $("#audio").attr({"src":"/static/image/background.mp3"});
    $("#audio")[0].play();
    on = true;
    $(".music").addClass("music-play");
    $(".music").on("tap",function(){
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
};
work = function(){
    $(".page4 .background").css("background-image","url('/static/image/"+city+".jpg')");
    setTimeout(function(){
        clearInterval(interval);
        $(".processing").css("width","50%");
        $(".num").html("100%");
        $(".loading-background").css("display","none");
        $(".introduct").css("display","block");
                            setTimeout(function(){
                                $(".title12").velocity("fadeIn");
                            },500);
    },500);
    upset = 0;
    start = 0;
    end = 0;
    $(".introduct").on("touchstart",function(){
        start = new Date().getTime();
    });
    $(".introduct").on("touchmove",function(){
        end = new Date().getTime();
    });
    $(".introduct").on("touchend",function(){
        if(end-start > 50) {
            upset += 1;
            if(upset == 1) {
                $(".title1").velocity("fadeOut");
                $(".title12").velocity("fadeOut");
                $(".title2").velocity("fadeIn");
            }
            if(upset == 2) {
                $(".introduct").velocity("fadeOut");
                $(".swiper-container").velocity("fadeIn",function(){
                    var swiper = new Swiper('.swiper-container', {
                        direction:'vertical',
                        speed:500,
                        onInit: function() {

                        },
                        onSlideChangeEnd: function(swiper){
                            if(swiper.activeIndex == 0) {
                            }
                            else if(swiper.activeIndex == 1) {
                            }
                            else if(swiper.activeIndex == 2) {
                            }
                        }
                    });
                    
                });

            }
        }
    });
    var business = {
        "1": [
            {"name":"深圳","pinyin":"shenzhen","bus":[{"busname":"南方腾星","address":"深圳市南山区月亮湾大道嘉进隆前海汽车城C1（荷兰花卉小镇对面）"},{"busname":"南方腾星梅林店","address":"深圳市福田区北环大道梅秀路口深华科技工业园2栋1-2层（新洲立交东侧）"},{"busname":"深圳鹏峰","address":"深圳市福田区深南中路福田汽车站东侧鹏峰汽车城"},{"busname":"深圳福日","address":"深圳市龙岗区龙平西路20号（龙岗汽车总站斜对面）"},{"busname":"深圳仁孚","address":"深圳市罗湖区布心东昌路42号新永通大厦"},{"busname":"深圳中升星辉","address":"深圳市龙华新区梅观高速坂田出口（中裕冠产业园内）"},{"busname":"仁孚鹏星行奔驰","address":"东益展厅：深圳市罗湖区沿河路与新秀路交汇处东益华鹏交易广场A16+2"},{"busname":"深圳大兴奔驰","address":"深圳市宝安区前进二路与洲石路交汇处（桃源居西侧）"},{"busname":"深圳大兴罗湖奔驰","address":"深圳市罗湖区笋岗宝安北路（梅园路口）"}]},
            {"name":"广州","pinyin":"guangzhou","bus":[{"busname":"仁孚怡邦","address":"中山大道店：广州市中山大道西901号（骏景花园对面）"},{"busname":"广州龙星行","address":"广州市海珠区新滘东路611号"},{"busname":"广州仁孚","address":"广州市白云区同和北路198号"},{"busname":"广州鸿粤星辉","address":"番禺公司：广州市番禺区沙头街桥兴大道989号（原市广路祈福酒店南行500米）"},{"busname":"广州锦星行","address":"广州市天河区科林路18号"},{"busname":"广州中升之星","address":"广州市增城区广汕公路朱村路段（碧桂园城市花园东侧）"},{"busname":"广州龙星骏宜","address":"广州市天河区广园快速路博汇街6号"}]},
			{"name":"东莞","pinyin":"dongguan","bus":[{"busname":"东莞溢华（南城店）","address":"东莞市南城区莞太路231号"},{"busname":"东莞溢华（长安店）","address":"东莞市长安镇上角社区振安西路212-214号"},{"busname":"寮步仁孚","address":"东莞寮步国际汽车城2号路"},{"busname":"中升奔驰厚街店","address":"东莞市厚街镇莞太路桥头路段东3号"}]},
			{"name":"佛山","pinyin":"foshan","bus":[{"busname":"佛山中升之星","address":"佛山市南海区佛平四路30号"},{"busname":"佛山中升星辉","address":"佛山市顺德区容桂街道海尾社区居委会合祥路55号之二"},{"busname":"佛山鹏龙利泰","address":"佛山市禅城区南庄镇吉利工业园内"},{"busname":"佛山怡和仁孚","address":"佛山市南海区桂城谢叠大桥之南G10街区"},{"busname":"顺德怡孚","address":"佛山市顺德区伦教广珠公路东侧"}]}

        ],
        "2": [
            {"name":"南宁","pinyin":"nanning","bus":[{"busname":"南宁恒信之星","address":"广西南宁市西乡塘区罗文大道50号"},{"busname":"南宁冠星","address":"南宁市白沙大道54-3号"},{"busname":"广西龙星行","address":"南宁市兴宁区昆仑大道209号"}]}
        ],
		"3": [
            {"name":"厦门","pinyin":"xiamen","bus":[{"busname":"厦门东之星","address":"厦门市海沧区马青路1221号"},{"busname":"厦门东之星.星聚点","address":"厦门思明区体育路38号华强企业大楼一层之一"},{"busname":"厦门航星","address":"厦门高崎国际机场"}]},
			{"name":"石狮","pinyin":"shishi","bus":[{"busname":"石狮大长江红星","address":"石狮市石泉路入口处奔驰大厦"}]},
			{"name":"福州","pinyin":"fouzhou","bus":[{"busname":"福州东星","address":"福州市仓山区福峡路755号"},{"busname":"福州利之星","address":"福州市青口海峡汽车城（沈海高速兰圃出口往前200米）"},{"busname":"福建波士骏达","address":"福州市乌龙江南大道29号"},{"busname":"福州鹏龙国戎","address":"福州市闽侯县荆溪镇永丰社区"}]},
            {"name":"泉州","pinyin":"quanzhou","bus":[{"busname":"泉州闽星","address":"晋江世纪大道奔驰大厦（博物馆对面）"},{"busname":"泉州中升之星","address":"泉州清濛经济技术开发区迎宾大道"},{"busname":"泉州之星","address":"福建省泉州市丰泽区城华南路18号泉州之星奔驰"},{"busname":"泉州瑞星","address":"福建省泉州市鲤城区南环路99号瑞星大厦"},{"busname":"泉州中升星辉","address":"福建省泉州市南安市水头镇海联创业园DK31-B号地块"}]}
        ],
		"4": [
            {"name":"长沙","pinyin":"changsha","bus":[{"busname":"湖南龙星行","address":"长沙高新区文轩路920号"},{"busname":"湖南仁孚","address":"长沙市中南汽车世界A区A01（星沙收费站旁）"},{"busname":"湖南鹏龙瑞丰","address":"长沙市雨花区万家丽路与黄谷路口东300米"},{"busname":"湖南华美","address":"长沙市芙蓉南路一段999号（省政府东门）"}]}
        ],
		"5": [
            {"name":"南昌","pinyin":"nanchang","bus":[{"busname":"江西华宏星","address":"南昌市望城新区新兴西大道129号"},{"busname":"江西华宏名驰","address":"南昌市洪都南大道145号（青云谱交警大队旁）"},{"busname":"南昌东之星","address":"南昌市迎宾中大道518号"},{"busname":"南昌迎星","address":"南昌市高新大道777号"},{"busname":"南昌中升之星","address":"南昌市青山湖区京东南大道366号"}]}
        ]

    };
    var selectP ;
    var genOptions = function(id) {
        $("#city").children().remove();
        for(var i=0;i<business[id].length;i++) {
            cityOpt = $("<option value='"+business[id][i]['name']+"'>"+business[id][i]['name']+"</option>");
            $("#city").append(cityOpt);
        }
        $("#mall").children().remove();
        busOpt = $("<option value='-1'>请选择</option>");
        $("#mall").append(busOpt);
        for(var j=0;j<business[id][0]['bus'].length;j++) {
            busOpt = $("<option value='"+business[id][0]['bus'][j]['busname']+"'>"+business[id][0]['bus'][j]['busname']+"</option>");
            $("#mall").append(busOpt);
        }
    };
    $("#province").on("change",function(){
        var num = $("#province option").not(function(){ return !this.selected }).val();
        if (num != undefined) {
            genOptions(num);
            selectP = num;
        }
    });
    
    $("#city").on("change",function(){
        var city = $("#city option").not(function(){ return !this.selected }).val();
        for(var i=0;i<business[selectP].length;i++) {
            if(city == business[selectP][i]['name']) {
                $("#mall").children().remove();
                busOpt = $("<option value='-1'>请选择</option>");
                $("#mall").append(busOpt);
                for(var j=0;j<business[selectP][i]['bus'].length;j++) {
                    busOpt = $("<option value='"+business[selectP][i]['bus'][j]['busname']+"'>"+business[selectP][i]['bus'][j]['busname']+"</option>");
                    $("#mall").append(busOpt);
                }
            }
        }
    });
    var select = function() {
        c = getQueryParams("city");
        for(i in business) {
            for(j=0;j<business[i].length;j++) {
                if (business[i][j]['pinyin'] == c) {
                    $("#province").val(i);
                    $("#province").change();
                    $("#city").val(business[i][j]['name']);
                    $("#city").change();
                    break;
                }
            }

        }
    };
    select();
    $(".city-point").on("tap",function(){
        showCity($(this).data("index"));
    });
    $(".ask-close").on("tap",function(){
        $(".background-cla").css("display","none");
    });
    var formShow = function() {
        $(".background-cla").css("display","block");
    };
    $(".ask").on("tap",function(){
        formShow(); 
    });
    $(".page1 .car-icon").on("tap",function(){
        $(".car1").css("display","block");
    });
    $(".page2 .car-icon").on("tap",function(){
        $(".car2").css("display","block");
    });
    $(".page3 .car-icon").on("tap",function(){
        $(".car3").css("display","block");
    });
    $(".car-close").on("tap",function(){
        $(".car1").css("display","none"); 
        $(".car2").css("display","none"); 
        $(".car3").css("display","none"); 
    });
    w = $(window).width();
    h = $(window).height();
    $(document).on("touchmove",function(){
        return false;
    });
    var check = function() {
        if(!$("#name").val().length) {
            return -1;
        }
        else if(!$("#sex").val().length) {
            return -2;
        }
        else if(!$("#mobile").val().length || $("#mobile").val().length != 11) {
            return -3;
        }
        else {
            return 1;
        }
    }
    $(".share").on("tap",function(){
        $(".share-text").velocity("fadeIn");
    });
    $(".share-text").on("tap",function(){
        $(this).velocity("fadeOut");
    });
    var submit_success = function() {
        $(".submit-success").velocity("fadeIn");
    };
    var alertMessage = function(message) {
        $(".alertMessage").velocity("fadeIn");
        $(".alertMessage").html(message);
        setTimeout(function(){
            $(".alertMessage").velocity("fadeOut");
        },1000);

    };
    $("#submit").on("tap",function(){
        checked = check();
        console.log(checked);
        if(checked == '1') {
            $.post("/portal/submit/",{
                "name":$("#name").val(),
                "sex":$("#sex").val(),
                "mobile":$("#mobile").val(),
                "email":$("#email").val(),
                "province":$("#province").val(),
                "city":$("#city").val(),
                "mall":$("#mall").val()
            },function(data){
                if(data.error_no == '0') {
                    submit_success(); 
                }
            })
        } 
        else {
            alertMessage("请填写完整信息");
        }
    });
    
}
