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
            // console.log(data.skuId)
            data.forEach(function(ele,index){
                var li = document.createElement("li")
                // var a = document.createElement("a")
                li.innerHTML += '<p><img src="'+ele.pic+'"></p>'
                li.innerHTML += '<div class="content_text">'+ele.name+'</div>'
                li.innerHTML += ' <b>¥'+ele.price+'</b>'
                li.innerHTML += '<a href= "javascript:;" >加入购物车</a>'
                ul.appendChild(li);
            });
        }
    });
    // 全选按钮
     $(".all").on("click",function(){
         if($(".all").hasClass("active")){
             $(".all").removeClass("active")
             $(".danxuan").removeClass("active")
         }else{
             $(".all").addClass("active")
             $(".danxuan").addClass("active")
         }
     });
     $(".danxuan").on("click",function(){
         if($(this).hasClass("active")){
             $(this).removeClass("active")
             $(".all").removeClass("active")
         }else{
             $(this).addClass("active")
             if($(".cart_good1").length == $(".title1 .active").length){
                 $(".all").addClass("active")
             }
         }
     });
    //  数量增减
        var num = $(".cart_good5_ipt input")
        $(".jia").on("click",function(){
         
         $(this).parent().children().eq(1).find("input").val(parseInt(num.val())+1)
        });
        $(".jian").on("click",function(){
            if(num.val()>1){
                $(this).parent().children().eq(1).find("input").val(parseInt(num.val())-1)
            }
        })
})