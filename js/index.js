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
        mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
    });
    $(".lazy").lazyload();


    // 一楼轮播
    var swiper3 = new sw('#swiper3',{
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
        mySwiper.autoplay.start(); //鼠标移出之后，自动轮播开启
    });

    $(".gome .gome_image b i").click(function(){
        $(this).parents(".gome").hide();
    });


    // 二级菜单
    $(".tab").tab("active");
    $(".phone").tab("active");
    $(".phone1").tab("active");

});

// 二级菜单

