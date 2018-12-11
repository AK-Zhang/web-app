$(function () {
    // // 	$('#nav_u > li ').click(function(){
    // // 		// 点击菜单页面导航样式和返回顶部
    // // 		// $('html,body').animate({scrollTop:0},500);
    // // 		$(this).children('a').css({'color':'#efc816','border-top':'3px solid #efc816'});
    // // 		$(this).siblings().children('a').css({'color':'#fff','border-top':'3px solid #262626'});
    // // 	})
    // // 	// 返回顶部
    // // 	$('#top').click(function(){
    // // 		$('html,body').animate({scrollTop:0},500);
    // // 	})

    $('.mui-bar > a').click(function () {
        var _this = $(this)
        _this.addClass('mui-active').siblings().removeClass('mui-active')
        // console.log(_this.parent().children()[0] == _this[0])
        // console.log(_this[0])
        if (_this.parent().children()[0] == _this[0]) {
            window.location.href = '#/indexpage'
        } else if (_this.parent().children()[1] == _this[0]) {
            window.location.href = '#/referprice'
        } else if (_this.parent().children()[2] == _this[0]) {
            window.location.href = '#/trade/home'
        } else if (_this.parent().children()[3] == _this[0]) {
            window.location.href = '#/mine'
        }
    })
}) 
