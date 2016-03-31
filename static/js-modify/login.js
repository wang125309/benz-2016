require("../../bower_components/zepto/zepto.js");

window.onload = function() {
    $("#submit").on("click",function(){
        $.post("/portal/login",{
            "uname":$("#uname").val(),
            "upwd":$("#upwd").val()
        },function(data){
            if(data.error_no == '0') {
                location.href = '/backend.html'
            }
            else {
                alert(data.data.message);
            }
        });
    }) ;
}
