// $(".down_menu").hover(function(){
//     $(".drop_down ul").addClass("active")
// },function(){
//     $(".drop_down ul").removeClass("active")
// });
var select = document.querySelector(".down_menu");
select.children[0].onclick=function(){
    if(select.children[1].className == ""){
        select.children[1].className = "active";
    }else{
        select.children[1].className = "";
    }
}
for(var i = 0;i < select.children[1].children.length; i++){
    select.children[1].children[i].onclick=function(){
        select.children[1].className = "";
        select.children[0].children[0].innerHTML = this.innerHTML;
    }
}
var swiper1 = new Swiper('#swiper1',{
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,//自动轮播
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});
var swiper2 = new Swiper('#swiper2',{
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
})
// 二级菜单
$.fn.extend({
	tab:function(selector){
		selector = selector || "active";
		this.each(function(index,ele){
			$(ele).children().eq(0).find("ul>li").mouseenter(function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
            });
            $(".tab").mouseleave(function(){
                $(ele).children().eq(1).children().removeClass(selector);
            })
		});
	}
});
$(".tab").tab("active");
$(".lazy").lazyload();
// 手机通讯轮播图
var swiper3 = new Swiper('#swiper3',{
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
// 一楼层
$(".phone").tab("active");