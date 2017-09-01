var a = 0;
$(".zhanghu").hover(function() {
	$(".zhanghuul").stop(true).animate({
		height: "120px"
	}, 200)
}, function() {
	$(".zhanghuul").stop(true).animate({
		height: "0px"
	}, 200)
});
$(".gouwuche").hover(function() {
	$(".gouwuchespan").stop(true).animate({
		height: "72px"
	}, 200)
}, function() {
	$(".gouwuchespan").stop(true).animate({
		height: "0px"
	}, 200)
});

$(".guanzhu1").hover(function() {
	$(".guanzhu img").eq(2).show()
}, function() {
	$(".guanzhu img").eq(2).hide()
});
$(".guanzhu2").hover(function() {
	$(".guanzhu img").eq(3).show()
}, function() {
	$(".guanzhu img").eq(3).hide()
});
$(function() {
	$(window).resize(function() {
		if($(window).width() < 1650) {
			$(".floor_location").css({
				opacity: "0"
			}, 500)
		} else {
			$(".floor_location").css({
				opacity: "1"
			}, 500)
		}
	})
});

$(function() {
	$(window).scroll(function(event) {
		if($(this).scrollTop() >= 750 && $(this).scrollTop() <= 2499) {
			$(".floor_list li").eq(0).find("a").addClass("active");
			$(".floor_list li").eq(0).siblings().find("a").removeClass("active");
		}
		if($(this).scrollTop() >= 2500 && $(this).scrollTop() < 6469) {
			$(".floor_list li").eq(1).find("a").addClass("active");
			$(".floor_list li").eq(1).siblings().find("a").removeClass("active");
		}
		if($(this).scrollTop() >= 6300) {
			$(".floor_list li").eq(3).find("a").addClass("active");
			$(".floor_list li").eq(3).siblings().find("a").removeClass("active");
		}
		console.log($(this).scrollTop())
	})
})
$(".floor_list li").click(function() {
	$(this).find("a").addClass("active");
	$(this).siblings().find("a").removeClass("active");
});
$(".floor_0 a").click(function() {
	$("html,body").animate({
		scrollTop: 750
	}, 500)
});
//$(".floor_0 a").addClass("active");
$(".floor_1 a").click(function() {
	$("html,body").animate({
		scrollTop: 2500
	}, 500)
});
$(".floor_3 a").click(function() {
	$("html,body").animate({
		scrollTop: 6470
	}, 500)
});
$("#mydisdiv").hover(function() {
	$("#mydis").css({
		opacity: "1",
		width: "90px"
	}, 200)
}, function() {
	$("#mydis").css({
		opacity: "0",
		width: "0px"
	}, 200)
});
$("#mysidecodediv").hover(function() {
	$("#mysidecode").css({
		opacity: "1",
		width: "140px",
		height: "140px"
	}, 200)
}, function() {
	$("#mysidecode").css({
		opacity: "0",
		width: "0px",
		height: "0px"
	}, 200)
});
$("#mysidehistorydiv").hover(function() {
	$("#mysidehistory").css({
		opacity: "1",
		width: "90px"
	}, 200)
}, function() {
	$("#mysidehistory").css({
		opacity: "0",
		width: "0px"
	}, 200)
});
$("#show_history").click(function() {
	$("#history").css({
		display: "block"
	})
});
$("#js_closehistory").click(function() {
	console.log($(".sidecart-cont"));
	$("#history").css({
		display: "none"
	})
});
$("#mysasadiv").hover(function() {
	$("#mysasa").css({
		opacity: "1",
		width: "90px"
	}, 200)
}, function() {
	$("#mysasa").css({
		opacity: "0",
		width: "0px"
	}, 200)
});
$("#myfavdiv").hover(function() {
	$("#myfav").css({
		opacity: "1",
		width: "90px"
	}, 200)
}, function() {
	$("#myfav").css({
		opacity: "",
		width: "0px"
	}, 200)
});
$("#show_basketcart").click(function() {
	$("#js_sidecart").show(350)
});
$("#js_closecart").click(function() {
	$("#js_sidecart").hide(350)
});
$(".sideup").click(function() {
	$("html,body").stop(true).animate({
		scrollTop: 0
	}, "slow")
});
$("#allpinpai").hover(function() {
	$("#pinpaibox").show()
}, function() {
	$("#pinpaibox").hide()
});
$("#midimg ul li").eq(0).css({
	opacity: "1",
	"z-index": "1"
});
var index = 0;

function starMove() {
	index++;
	if(index > $("#midimg li").length) {
		index = 0;
	}
	$("#midimg ul li").eq(index).stop(true).animate({
		opacity: "1",
		"z-index": "1"
	}, 1000).siblings().stop(true).animate({
		opacity: "0",
		"z-index": "0"
	}, 1000);
	$("#midimg_box dd").eq(index).addClass("active").siblings().removeClass("active")
}
var timer1 = setInterval(starMove, 5000);
$("#midimg_box dd").mouseover(function() {
	index = $(this).index();
	clearInterval(timer1);
	$("#midimg ul li").eq(index).stop(true).animate({
		"z-index": "1",
		opacity: "1"
	}, 500).siblings().stop(true).animate({
		"z-index": "0",
		opacity: "0"
	}, 500);
	$("#midimg_box dd").eq(index).addClass("active").siblings().removeClass("active");
	timer1 = setInterval(starMove, 5000)
});
$("#midimg ul li").hover(function() {
	clearInterval(timer1)
}, function() {
	timer1 = setInterval(starMove, 5000)
});
$("#fenlei").hover(function() {
	$("#ul2").show()
}, function() {
	$("#ul2").hide()
});
$("#ul2 li").hover(function() {
	$(this).find("div").show()
}, function() {
	$(this).find("div").hide()
});
$(".member-link-list li").addClass('tr');
$(".must-check-list").addClass("tr");
$(".brand").eq(0).hover(function() {
	$(".all-brand").stop(true).stop(true).animate({
		"height": "293px",
	}, 200);
}, function() {
	$(".all-brand").stop(true).stop(true).animate({
		"height": "0px",
	}, 200);
});
$(".nav-list li a").addClass("tr");
$(".accont").hover(function() {
	$(".member-link-accont").stop(true).animate({
		"height": "120px"
	}, 200)
}, function() {
	$(".member-link-accont").stop(true).animate({
		"height": "0px"
	}, 200)
});
$(".besket").hover(function() {
	$(".member-link-besket").stop(true).animate({
		"height": "65px"
	}, 200)
}, function() {
	$(".member-link-besket").stop(true).animate({
		"height": "0px"
	}, 200)
});
$(".sina").hover(function() {
	$(".member-link-floow").css("visibility", "visible");
	$(".sina-img").show();
}, function() {
	$(".member-link-floow").css("visibility", "hidden");
	$(".sina-img").hide();
});
$(".wechat").hover(function() {
	$(".member-link-floow").css("visibility", "visible");
	$(".wechat-img").show();
}, function() {
	$(".member-link-floow").css("visibility", "hidden");
	$(".wechat-img").hide()
});
var autoPlay = setInterval(auto, 5000);
var index = 0;
$(".banner-link").eq(0).css({
	"opacity": "1",
	"z-index": "2"
})

function auto() {
	index++;
	if(index >= 10) {
		index = 0;
	};
	$(".banner-link").eq(index).stop(true).animate({
		"opacity": "1",
		"z-index": "2"
	}, 1000).siblings().stop(true).animate({
		"opacity": "0",
		"z-index": "0"
	}, 1000);
	$(".banner-page-nav dl dd").eq(index).addClass("active").siblings().removeClass("active");
};
$(".banner-page-nav dl dd").hover(function() {
	$(this).addClass("active").siblings().removeClass("active");
	index = $(this).index();
	$(".banner-link").eq(index).stop(true).animate({
		"opacity": "1",
		"z-index": "2"
	}, 500).siblings().stop(true).animate({
		"opacity": "0",
		"z-index": "0"
	}, 500);
});
$(".banner-container").hover(function() {
	clearInterval(autoPlay);
}, function() {
	autoPlay = setInterval(auto, 5000);
});