requirejs.config({
    baseUrl:"js",
    paths:{
        jquery:"libs/jquery.min",
        Swiper:"plugins/swiper.min",
        lazy:"plugins/lazyload.min",
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
requirejs(['jquery','Swiper','lazy',"extend"],function($,sw,lazy){
    $(".cart_tab").tab2("active");
    $("#all").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active")
        }else{
            $(this).addClass("active")
        }
    });
    // 购物车商品遍历
    var swiper1 = document.querySelector(".swiper-wrapper");
    $.ajax({
        method:"get",
        url:"data/cart.json",
        success:function(data){
            // console.log(data.skuId)
            data.forEach(function(ele,index){
                var li = document.createElement("li")
                li.className = "swiper-slide";
                // var a = document.createElement("a")
                li.innerHTML += '<p><img src="'+ele.pic+'"></p>'
                li.innerHTML += '<div class="content_text">'+ele.name+'</div>'
                li.innerHTML += ' <b>¥'+ele.price+'</b>'
                li.innerHTML += '<a href= "javascript:;" >加入购物车</a>'
                swiper1.appendChild(li);
            });
            var button =[];
            button = $(".content_list ul li a");
            for(var i = 0; i<data.length; i++){
                button[i].index = data[i].skuId;
            };
            $(".content_list ul li a").click(function(){
                var car = getCookie("car");
                if(!car){//购物车为空时
                    //"n|1"
                    setCookie("car",this.index+"|1",7);
                }else{
                    if(!findRepeat(this.index)){//购物车无重复数据
                        setCookie("car",car+"&"+this.index+"|1",7);
                    }else{//购物车内已有相同数据
                        var carpros = car.split("&");
                        for(var i=0; i<carpros.length; i++){
                            var pro = carpros[i].split("|");
                            if(this.index == pro[0]){
                                pro[1]++;
                                carpros.splice(i,1,pro.join("|"));
                            }
                        }
                        setCookie("car",carpros.join("&"),7);
                    }
                }

            })
            function findRepeat(id){

                var cookies = getCookie("car").split("&");
            
                for(var i=0; i<cookies.length; i++){
                    var cook = cookies[i].split("|");
                    if(cook[0] == id){
                        return true;
                    }
                }
                return false;
            }
        }
    });

    // 将cookie中的值渲染到页面
    $.get("data/cart.json").done(function(data){
        console.log(data)
        var shop = document.querySelector(".cart_goods");
        if(getCookie("car")){
            var apro = getCookie("car").split("&");
        
        for(var i = 0; i<apro.length; i++){
            var pro = apro[i].split("|");
            var info = find(data,pro[0]);
            var oDiv = document.createElement("div");
            oDiv.className= "cart_good1";
            shop.appendChild(oDiv);
            var Div1 = document.createElement("div");
            Div1.className = "title1";
            Div1.innerHTML += '<p class="danxuan"></p>';
            oDiv.appendChild(Div1);
            var Div2 = document.createElement("div");
            Div2.className = "cart_image";
            Div2.innerHTML += '<a href="javascript:;" title="联想(Lenovo)小新潮7000 13.3英寸超轻薄窄边框笔记本电脑(I5-8250U 4G内存 256G PCIE WIN10 )花火银"><img src="'+info.pic+'"></a>';
            oDiv.appendChild(Div2);
            var Div3 = document.createElement("div");
            Div3.className="cart_good2";
            Div3.innerHTML += '<a href="javascript:;">'+info.name+'</a>';
            Div3.innerHTML += '<p><i title="支持7天无理由退货"></i></p>';
            Div3.innerHTML += ' <div class="cart_good3"><i></i>选购增值服务<b></b></div>';
            oDiv.appendChild(Div3);
            var Div4 = document.createElement("div");
            Div4.className = "cart_good4";
            Div4.innerHTML += '<em>￥ '+info.price+'</em>';
            oDiv.appendChild(Div4);
            var Div5 = document.createElement("div");
            Div5.className="cart_good5";
            oDiv.appendChild(Div5);
            var Div6 = document.createElement("div");
            Div6.className = "cart_good5_j";
            Div6.innerHTML += '<a href="javascript:;" class="jian">-</a>';
            Div6.innerHTML += '<div class="cart_good5_ipt"><input type="text" value="'+pro[1]+'"></div>';
            Div6.innerHTML += '<a href="javascript:;" class="jia">+</a>';
            Div5.appendChild(Div6);
            var Div7 = document.createElement("div");
            Div7.className="cart_good6";
            Div7.innerHTML += ' <b>¥ '+info.price*pro[1]+'</b>';
            oDiv.appendChild(Div7);
            var Div8 = document.createElement("div");
            Div8.className = "cart_good7";
            Div8.innerHTML += '<a href="javascript:;" class="shanchu">删除</a>';
            Div8.innerHTML += '<a href="javascript:;">移入收藏夹</a>';
            oDiv.appendChild(Div8);
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
            totalMoney();

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
            totalMoney();
        });
        // 数量的增减
        var jia = $(".jia"),
        jian = $(".jian"),
        val = $(".cart_good5_ipt input")
        // var apro = getCookie("car").split("&");
        // var pro = [];
        // for(var i = 0; i<apro.length; i++){
        //     pro[i].index = apro[i].split("|");
        // }
        jia.on("click",function(){
            console.log($(this))
            var inputval = $(this).prev(".cart_good5_ipt").find("input"),
                count = parseFloat(inputval.val())+1,
                Smallplan = $(this).parents(".cart_good1").find(".cart_good6 b"),// 小计
                price = $(this).parents(".cart_good1").find(".cart_good4 em").html(),// 单价
                Smallprice = count*parseFloat(price.substring(1));
            inputval.val(count);
            Smallplan.html('￥'+Smallprice);
            totalMoney();
            changeNum(pro[0],1);
        });
        jian.on("click",function(){
            var inputval = $(this).next(".cart_good5_ipt").find("input"),
                count = parseFloat(inputval.val())-1,
                Smallplan = $(this).parents(".cart_good1").find(".cart_good6 b"),// 小计
                price = $(this).parents(".cart_good1").find(".cart_good4 em").html(),// 单价
                Smallprice = count*parseFloat(price.substring(1));
            if(inputval.val()>1){
                inputval.val(count);
                Smallplan.html('￥'+Smallprice);
                totalMoney();
                changeNum(pro[0],-1);
            }
        });

        $(".cart_good7 a").on("click",function(){
            $(this).parents(".cart_good1").css("display","none");
            changeNum(pro[0],-9999);
        })

    });

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


    


    // 总价
    function totalMoney(){
        var total_money = 0.00;
        var total_count = 0.00;
        $(".danxuan").each(function(){
            if($(this).hasClass("active")){
                var goods = parseFloat($(this).parents(".cart_good1").find(".cart_good6 b").html().substring(1));
                var num = parseFloat($(this).parents(".cart_good1").find(".cart_good5_ipt input").val());
                total_money += goods;
                total_count += num;
            }
            
        })
        $(".sum_price").html("￥"+total_money)
        $(".footer_yixuan span").html(total_count)
    }

    // 移动效果
    var myswiper = new sw('.phone1_list .phone1_c_center .swiper-container',{
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
});