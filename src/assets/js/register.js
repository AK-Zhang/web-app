import './jquery.min.js'
$(function(){
    // 机构代码框验证
    $('.T-code').blur(function(){
        console.log(1);
        // 发送请求判定是否有该机构账号
    })
    // 手机号验证
    $('.T-phone').blur(function(){
        checkMobile();
    })
    // 验证码验证

    // 设置密码不能有特殊字符，长度是否达标或者过长

    // 验证两次输入是否一致

    // 点击注册按钮的时候判定协议手否勾选，如果未勾选提示用户阅读并同意 然后勾选才能注册
    // 注册成功之后跳转到登陆界面使用手机号和密码登陆
})
function checkMobile(){ 
    var sMobile = document.getElementsByClassName('.T-phone').value 
    if(!(/^1[3|5|7|8|9][0-9]\d{4,8}$/.test(sMobile))){ 
     alert("不是完整的11位手机号或者正确的手机号前七位"); 
     document.getElementsByClassName('.T-phone').focus(); 
     return false; 
    } 
   } 