// Code by ZHJ/ZenLiver
// 朗美

$(function () {

    // 全局变量
    var screenWidth = $(window).width();

    // 手机下：点击菜单项显示/隐藏子菜单
    $("#app_5500345888940088 li.family.navItem").click(function () {
        $(this).toggleClass("selected active");
        $(this).find("ul.navSon").slideToggle(500);
    });

    // 移动设备下：顶部导航子菜单改为点击切换显示/隐藏
    if (screenWidth<1025) {
        $(".nav_1 .navList li.family.navItem").click(function () {
            $(this).find("ul.navSon").toggleClass("visibility_toggle");

            // if ($(this).find("ul.navSon").hasClass("visibility_toggle") == false) {
            //     $(this).find("ul.navSon").addClass("visibility_toggle");
            //     $(this).find("ul.navSon").removeClass("fadeOut");
            // }
            // else {
            //     $(this).find("ul.navSon").removeClass("visibility_toggle");
            //     $(this).find("ul.navSon").addClass("fadeOut");
            // }

        });

        $("#el_14908598674884xw11").off();
        $("#el_14908598674884xw11").click(function () {
            $("#app_2378630758728660").slideToggle(500);
        });
    }

    // 右侧悬浮条：微信二维码
    $("#app_6757174153088972, #el_1492068048406vsms1").click(function () {
        $("#app_8010177416361774 > .appMask, #app_8010177416361774 > .appContent").show();
    });
    $("#app_8010177416361774 > .appMask").click(function () {
        $(this).hide();
        $("#app_8010177416361774 > .appContent").hide();
    });

    // 手机下：解决顶部导航被遮挡的问题
    var logoAreaOffsetTop=$("#el_1466842167621n37e21").offset().top;
    console.log(logoAreaOffsetTop);
    $(window).scroll(function() {
        var scrollLength=$(window).scrollTop();
        // console.log(scrollLength);
        var isHidden=$("#app_5500345888940088 .nav_1 .navContainer").is(":hidden");
        // console.log(isHidden);
        if ($("#app_5500345888940088 .nav_1 .navContainer").is(":hidden")) {
            if (scrollLength>=30) {
                $("#el_1466842167621n37e21").hide();
            }
            else {
                $("#el_1466842167621n37e21").show();
            }
        }

    });

    // 手机下：底部导航点击标题切换显示/隐藏
    if (screenWidth < 768) {
        $("#el_14669355915471p2h151, #el_1466935604732l5to154, #el_14669356061457tws156, #el_146693560762477dr158").click(function () {
            $(this).next().toggle(300);
        });
    }

    // 积分换购页面添加多少积分可换购信息
    var pagePath = window.location.pathname;
    console.log(pagePath);
    if (pagePath == "/p-43.html") {
        $(".goods_list_pricebox").each(function () {
            var productPrice = $(this).find("span.price").text().slice(1);
            console.log(productPrice);
            var productUrl = $(this).siblings("a.goods_list_picBox").attr("href");
            console.log(productUrl);
            $(this).after("<div class='goods_list_jifenbox'><a href='"+productUrl+"'>"+(productPrice*300)+"积分换购</a></div>");
        });
    }


});
