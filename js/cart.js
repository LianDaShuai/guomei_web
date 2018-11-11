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
    $(".cart_tab").tab2("active");
    $("#all").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
        }
    });
    // 购物车商品遍历
    var ul = document.querySelector(".content_list ul")
    $.ajax({
        method:"get",
        url:"data/cart.json",
        success:function(data){
            console.log(data)
            data.forEach(function(ele,index){
                var li = document.createElement("li");
                li.innerHTML += '<p><img src="'+ele.pic+'" alt=""></p>'
                li.innerHTML += '<div class="content_text">'+ele.name+'</div>'
                li.innerHTML += ' <b>¥'+ele.price+'</b>'
                li.innerHTML += '<a href="javascript:;">加入购物车</a>'
                ul.appendChild(li)
            })

        }
    })
})