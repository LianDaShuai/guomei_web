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
    // 小轮播
    var swiper1 = new sw('#swiper1',{
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,//自动轮播
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
    });
    
    // 大轮播
    var swiper2 = new sw('#swiper2',{
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay:true,//自动轮播
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }
    });
    $(".swiper-pagination-bullet").hover(function() {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    },function() {
        swiper2.autoplay.start(); //鼠标移出之后，自动轮播开启
    });
    $(".lazy").lazyload();


    // 一楼轮播
    var swiper3 = new sw('.phone_list .phone_c_center .swiper-container',{
        autoplay:true,//自动轮播
        autoplay: {
            delay: 10000,//1秒切换一次
        },
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }
    });
    $(".swiper-pagination-bullet").hover(function() {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    },function() {
        swiper3.autoplay.start(); //鼠标移出之后，自动轮播开启
    });

    $(".gome .gome_image b i").click(function(){
        $(this).parents(".gome").hide();
    });

    // 四楼轮播
    var swiper4 = new sw('.phone1_list .phone1_c_center .swiper-container',{
        autoplay:true,//自动轮播
        autoplay: {
            delay: 10000,//1秒切换一次
        },
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        }
    });
    $(".swiper-pagination-bullet").hover(function() {
        $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
    },function() {
        swiper4.autoplay.start(); //鼠标移出之后，自动轮播开启
    });

    $(".gome .gome_image b i").click(function(){
        $(this).parents(".gome").hide();
    });



    // 二级菜单
    $(".tab").menu("active");
    $(".phone").tab("active");
    $(".phone1").tab("active");


    // 楼层
    $('.left_floor ul li').click(function(){//点击按钮设置卷去高度
        var top = $('.floor_box').eq($(this).index()).offset().top;
        console.log(top);
        $('body,html').stop().animate({
            scrollTop:top
        });
    });

    $(window).scroll(function(){//卷去高度改变，设置按钮高亮。
        var scroll = $('html,body').scrollTop();
        $('.floor_box').each(function(index,ele){
            if(scroll>=$(ele).offset().top){
                $('.left_floor>ul>li').eq(index).addClass('active').siblings().removeClass('active');
            }
        });
    });
    // 楼层导航栏出现
    $(window).scroll(function(){
        var scroll = $('html,body').scrollTop();
        if(scroll>=$(".gm_finance").offset().top){
            $(".left_floor").addClass("active")
        }else{
            $(".left_floor").removeClass("active")
        }
    });
    //楼层上下按钮
    // 回到顶部
    $(".Top_nav").click(function(){
        $("html,body").animate({
            scrollTop:"0px"
        },1000)
    })
    // 回到底部
    var WH = parseInt($("body").css("height"));
    $(".foot_nav").click(function(){
        $("html,body").animate({
            scrollTop:WH+"px"
        },1000)
    })
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
    // 楼层一商品遍历
    var ul = document.querySelector(".phone_list>ul");
    $.ajax({
        method:"get",
        url:"data/index.json",
        dataType:"json",
        success:function(data){
            console.log(data)
            data.forEach(function(ele,index){
                var li = document.createElement("li");
                li.innerHTML += '<dl><dt><img src="'+ele.src+'" alt=""></dt><dd>'+ele.name+'</dd><dd>￥'+ele.gomePrice+'</dd></dl>'
                ul.appendChild(li);
            })
        }
    });
});




