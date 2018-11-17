requirejs.config({
    baseUrl:"js",
    paths:{
        jquery:"libs/jquery.min",
    },
    shim:{
		jquery:{
			exports:"jQuery"
		}
	}
})
requirejs(['jquery'],function($){
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
    // 用户名聚焦
    $(".yonghuming input").focus(function(){
        $(this).parents(".yonghuming").find(".tishi1").addClass("active");
        $(this).parents(".yonghuming").find(".tishi2").removeClass("active");
        $(this).css({
            border:"1px solid #ccc"
        })
        $(this).parents(".yonghuming").find(".tishi3").removeClass("active")
        $(this).parents(".yonghuming").find("i").css({
            display:"none"
        })
    })
    // 用户名失焦
    $(".yonghuming input").blur(function(){
        if($(this).val() == ""){
            $(this).parents(".yonghuming").find(".tishi2").addClass("active");
            $(this).parents(".yonghuming").find(".tishi1").removeClass("active");
            $(this).css({
                border:"1px solid #FF5757"
            })
            $(this).parents(".yonghuming").find(".tishi3").removeClass("active")
        }else{
            if(!((/^[a-zA-Z0-9_-]{4,16}$/).test($(this).val()))){
                $(this).parents(".yonghuming").find(".tishi1").removeClass("active")
                $(this).parents(".yonghuming").find(".tishi3").addClass("active")
                $(this).css({
                    border:"1px solid #FF5757"
                })
            }else{
                $(this).parents(".yonghuming").find("i").css({
                    display:"block"
                })
                $(this).parents(".yonghuming").find(".tishi3").removeClass("active")
                $(this).parents(".yonghuming").find(".tishi1").removeClass("active")
                
            }
        }
    });
    // 密码聚焦
    $(".password input").focus(function(){
        $(this).parents(".password").find(".tishi1").addClass("active")
        $(this).parents(".password").find(".tishi2").removeClass("active")
        $(this).parents(".password").find(".tishi3").removeClass("active")
        $(this).css({
            border:"1px solid #ccc"
        })
    })
    // 密码失焦
    $(".password input").blur(function(){
        if($(this).val() == ""){
            $(this).parents(".password").find(".tishi2").addClass("active");
            $(this).parents(".password").find(".tishi1").removeClass("active");
            $(this).css({
                border:"1px solid #FF5757"
            })
            $(this).parents(".password").find(".tishi3").removeClass("active")
            $(".sub_password input").attr("disabled",true)
            $(this).parents(".password").find("i").css({
                display:"none"
            })
        }else{
            if(!((/^\d{6-20}$/).test($(this).val()))){
                if(!((/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/).test($(this).val()))){
                    $(this).parents(".password").find(".tishi3").addClass("active")
                    $(this).parents(".password").find(".tishi1").removeClass("active")
                    $(this).parents(".password").find("i").css({
                        display:"none"
                    })
                    $(".sub_password input").attr("disabled",false)
                }else{
                    $(this).parents(".password").find("i").css({
                        display:"block"
                    })
                    $(".sub_password input").attr("disabled",false)
                    $(this).parents(".password").find(".tishi1").removeClass("active")
                }
               
            }else{
                $(this).parents(".password").find(".tishi1").removeClass("active")
                $(this).parents(".paddword").find(".tishi4").addClass("active")
            }
        }
    })

    // 确认密码
    $(".sub_password input").focus(function(){
       if($(this).val() == ""){
        $(this).parents(".sub_password").find(".duigou").css({
            display:"none"
        })
       
       }else{
            $(this).parents(".sub_password").find(".tishi1").removeClass("active")
       }
    })
    $(this).parents(".sub_password").find(".tishi2").removeClass("active")
    $(".sub_password input").blur(function(){
        if($(this).val() == $(".password input").val()){
            $(this).parents(".sub_password").find(".duigou").css({
                display:"block"
            })
            $(this).parents(".sub_password").find(".tishi1").removeClass("active")
            $(this).parents(".sub_password").find(".tishi2").removeClass("active")
            $(this).css({
                border:"1px solid #ccc"
            })
        }else{
            $(this).parents(".sub_password").find(".tishi2").addClass("active")
            $(this).parents(".sub_password").find(".tishi1").removeClass("active")
            $(this).parents(".sub_password").find(".duigou").css({
                display:"none"
            })
            $(this).css({
                border:"1px solid #FF5757"
            })
        }
    })

    // 验证手机号码
    $(".number input").focus(function(){

    })
    $(".number input").blur(function(){
        // 判断手机号是否为空
        if($(this).val() == ""){
            $(this).parents(".number").find(".tishi2").addClass("active")
            $(this).css({
                border:"1px solid #FF5757"
            })
        }else{
            if(!((/^[1][3-8]{1}[0-9]{9}$/).test($(this).val()))){
                $(this).parents(".number").find(".tishi3").addClass("active")
                $(this).css({
                    border:"1px solid #FF5757"
                })
                $(this).parents(".number").find(".duigou").css({
                    display:"none"
                })
                $(this).parents(".number").find(".tishi2").removeClass("active")

            }else{
                $(this).parents(".number").find(".duigou").css({
                    display:"block"
                })
                $(this).parents(".number").find(".tishi3").removeClass("active")
                $(this).css({
                    border:"1px solid #ccc"
                })
                return true
            }
        }
    })
    // 后台注册
    
    $(".tijiao input").on("click",function(){
        var pic = $(".yonghuming input").val();
        var pass = $(".password input").val();
        var name = $(".number input").val();
        $.ajax({
            type:"post",
            url:"http://localhost/gome_web/gome/api/register.php",
            data:{
                uname:name,
                password:pass,
                avatar:pic
            },
            dataType:"json",
            success:function(data){
                 if(data.errorCode == 0){
                     alert("注册成功")
                 }else{
                     if(data.errorCode == 1000){
                         alert("注册成功，无头像上传")
                     }
                 }
            }
        })
    })

})