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
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,//自动轮播
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
