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
    // 放大镜
    $(function() {
        var magnifierConfig = {
            magnifier: "#magnifier1",//最外层的大容器
            width : 450,//承载容器宽
            height : 450,//承载容器高
            moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
            zoom : 2//缩放比例
        };
    
        var _magnifier = magnifier(magnifierConfig);
    
        /*magnifier的内置函数调用*/
        /*
            //设置magnifier函数的index属性
            _magnifier.setIndex(1);
    
            //重新载入主图,根据magnifier函数的index属性
            _magnifier.eqImg();
        */
    });
    $(".box_right").tab3("active");
    //固定栏鼠标滑过出现
    $(".guomei").hover(function(){
        $(".guomei a").css({
            right:35
        });
    },function(){
        $(".guomei a").css({
            right:-82
        })
    });
    $(".xing").hover(function(){
        $(".xing a").css({
            right:35
        });
    },function(){
        $(".xing a").css({
            right:-82
        })
    });
    $(".gome_ma .zhuce").hover(function(){
        $(".zhuce strong").css({
            right:34
        })
    },function(){
        $(".zhuce strong").css({
            right:-175
        })
    })
    $(".gome_ma .ding").hover(function(){
        $(this).children().eq(1).css({
            right:35
        })
    },function(){
        $(this).children().eq(1).css({
            right:-82
        })
    });
    // 购物车
    $(".gouwu_car").click(function(e){
        e = e || event;
        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
        if($(".cart_list").css("right") == "35px"){
            $(".cart_list").stop().animate({
                right:-250
            })
        }else{
            $(".cart_list").stop().animate({
                right:35
            })
        }
    });
    $(".cart_li>h1>span").on("click",function(){
        $(".cart_list").stop().animate({
            right:-250
        })
    })
    // 点击document购物车消失
    $(document).on("click",function(){
        $(".cart_list").stop().animate({
            right:-250
        })
    })
    $(".cart_list").on("click",function(e){
        e = e || event;
        e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
    });
    // 回到顶部
    $(".Top_nav").click(function(){
        $("html,body").animate({
            scrollTop:"0px"
        },1000)
    });


    // 加入购物车cookie
    // $(".go_shopping").append("<a>加入购物车</a>")
    

})