requirejs.config({
    baseUrl:"js",
    paths:{
        jquery:"libs/jquery.min",
        Swiper:"plugins/swiper.min",
        lazy:"plugins/lazyload.min",
        home:"modules/home",
        extend:"plugins/extend"
    },
    shim:{
		jquery:{
			exports:"jQuery"
		},
		lazy:{
			deps:["jquery"]
		},
		swiper:{
			exports:"Swiper",
			deps:["jquery"]
        },
        extend:{
			deps:["jquery"]
		}
	}
})
requirejs(['jquery','Swiper','lazy','home',"extend"],function($,sw,lazy,h){

    // 遮罩层显隐
    $("document,body").mousemove(function(e){
        e = e || event;
        var X = e.clientX;
        var Y = e.clientY;
        // console.log(X,Y);
        setInterval(function(e){
            
        },2000)
       
    })

   $(".login_img").hover(function(){
       $(this).stop().animate({
           left:0
       },1000,function(){
           $(this).parent().children().eq(2).addClass("active")
       })
   },function(){
       $(this).stop().animate({
           left:75
       },1000).parent().children().eq(2).removeClass("active")
    //    setInterval(function(){
    //        $(".shuaxin").addClass("active")
    //    },2000)
   });
   
   $(".shuaxin a").click(function(){
       $(this).parent().addClass("active")
   });
   $(".login_pay p").click(function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".show").addClass("hide")
         } else {
            $(this).addClass("active");
            $(".login_pay a").removeClass("hide")
        }
   });
//    二维码和手机登陆切换
   $(".login_wrap").tab1("active")
//    点击自动登录出现安全提示
    $(":checkbox").on("change",function(){
        if($(this).prop("checked")){
            $(".tishi").addClass("active")
        }else{
            $(".tishi").removeClass("active")
        }
    });
    // 载入尾部
    $(".foot").load("footer.html");

    // 后台登陆
    $(".submit").on("click",function(){
        var name = $(".name").val();
        var pass = $(".pass").val();
        $.ajax({
            type:"get",
            url:"http://localhost/gome_web/gome/api/login.php",
            data:{
                uname:name,
                password:pass
            },
            dataType:"json",
            // async:true,
            success:function(data){
                if(data.errorCode == 0){
                    alert("登陆成功")
                }
            }
        })
    })

})