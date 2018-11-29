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
    $("#swiper3 .swiper-pagination-bullet").hover(function() {
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
    $("#swiper4 .swiper-pagination-bullet").hover(function() {
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
        // console.log(top);
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
        if(scroll>=$(".gm_jinrong").offset().top){
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
            // console.log(data)
            data.forEach(function(ele,index){
                var li = document.createElement("li");
                li.innerHTML += '<dl><dt><img src="'+ele.src+'" alt=""></dt><dd>'+ele.name+'</dd><dd>￥'+ele.gomePrice+'</dd></dl>'
                ul.appendChild(li);
            })
        }
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
    })
    //美日必抢数据请求
    var shop = document.querySelector(".shop_bottom_block");
    $.ajax({
        method:"get",
        url:"data/meiribiqiang.json",
        success:function(data){
            console.log(data)
            data.forEach(function(ele,index){
                var dl = document.createElement("dl");
                dl.innerHTML += '<dt><img src="'+ele.goods_img+'_120.jpg"></dt>'
                dl.innerHTML += '<dd>'+ele.goods_tg_price+'<span>'+ele.goods_price+'</span></dd>'
                dl.innerHTML += '<dd>'+ele.goods_name+'</dd>'
                shop.appendChild(dl)
            })

        }
    });
    // 计时器
    var timer = setInterval(showTime,1000);
    function showTime(){
        var end = Date.parse('2019/01/01');
        var now = Date.now();
        var offset = Math.floor((end - now)/1000);//毫秒
     if(offset <= 0){
            clearInterval(timer);
       }
    var sec = offset%60;
    var min = Math.floor(offset/60)%60;
    var hour = Math.floor(offset/60/60)%24;
        sec = sec<10? '0'+sec : sec;
        min = min<10? '0'+min : min;
        hour = hour<10? '0'+hour : hour;
    document.querySelector('.hour').innerHTML = hour;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.sec').innerHTML = sec;
 }

// 购物车
// 将cookie中的值渲染到页面
$.get("data/cart.json").done(function(data){
    console.log(data)
    var ul = document.querySelector(".cart_content1 ul");
    if(getCookie("car")){
        var apro = getCookie("car").split("&");
        console.log(apro)
        for(var i = 0; i<apro.length; i++){
            var pro = apro[i].split("|");
            var info = find(data,pro[0]);
            var lis = document.createElement("li");
            lis.innerHTML += ' <div class="samll_img"><img src="'+info.pic+'" alt=""></div>'
            lis.innerHTML += ' <p title="'+info.name+'">'+info.name+'</p>';
            ul.appendChild(lis);
            var div1 = document.createElement("div");
            div1.className="samll_price";
            div1.innerHTML += ' <span>￥'+info.price+'</span>';
            lis.appendChild(div1);
            var span = document.createElement("span");
            span.innerHTML += ' <a href="javascript:;">-</a>';
            span.innerHTML += '<div class="cart_input"><input type="text" value="'+pro[1]+'"></div>';
            span.innerHTML += ' <a href="javascript:;">+</a>'
            div1.appendChild(span);
            div1.innerHTML += '<a href="javascript:;">删除</a>';
        }
    }
    function find(arr,id){
        for(var i = 0;i<arr.length; i++){
            if(arr[i].skuId == id){
                return arr[i];
            }
        }
        return null;
    };

    function changeNum(id,num){
        var carpros = getCookie("car").split("&");
        for(var i = 0; i<carpros.length; i++){
            var pro = carpros[i].split("|");
            if(id == pro[0]){
                pro[1] = parseInt(pro[1])+parseInt(num);
                if(pro[1]<=0){
                    carpros.splice(i,1);
                }else{
                    carpros.splice(i,1,pro.join("|"));
                }
            }
        }
        setCookie("car",carpros.join("&"),7);
    
    };
})







});




