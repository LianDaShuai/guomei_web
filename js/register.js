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
    // 滑动验证
    $(function(){
        $(".inner").mousedown(function(e){
            var el = $(".inner"),os = el.offset(),dx,$span=$(".outer>span"),$filter=$(".filter-box"),_differ=$(".outer").width()-el.width();
            $(document).mousemove(function(e){
                dx = e.pageX - os.left;
                if(dx<0){
                    dx=0;
                }else if(dx>_differ){
                    dx=_differ;
                }
                $filter.css('width',dx);
                el.css("left",dx);
            });
            $(document).mouseup(function(e){
                $(document).off('mousemove');
                $(document).off('mouseup');
                dx = e.pageX - os.left;
                if(dx<_differ){
                    dx=0;
                    $span.html("请按住滑块，拖到最右边");
                }else if(dx>=_differ){
                    dx=_differ;
                    $(".outer").addClass("act");
                    $span.html("验证通过！");
                    el.html('&radic;');
                }
                $filter.css('width',dx);
                el.css("left",dx);

            })
        })
    });
//    表单验证

    $(".yonghuming input").focus(function(){
        $(".tishi .tishi1").addClass("active")
        $(".tishi .tishi2").removeClass("active")
    });
    $(".yonghuming input").blur(function(){
        $(".tishi .tishi2").addClass("active")
        $(".tishi .tishi1").removeClass("active")
    })

})