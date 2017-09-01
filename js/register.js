$(".zhanghu").hover(function() {
	$(".zhanghuul").stop(true).animate({
		'height': '120px'
	}, 200);
}, function() {
	$(".zhanghuul").stop(true).animate({
		'height': '0px'
	}, 200);
});
$(".gouwuche").hover(function() {
	$(".gouwuchespan").stop(true).animate({
		'height': '72px'
	}, 200);
}, function() {
	$(".gouwuchespan").stop(true).animate({
		'height': '0px'
	}, 200);
});
$(".guanzhu1").hover(function() {
	$("#img1").css({
		'display': 'block'
	});
}, function() {
	$("#img1").css({
		'display': 'none'
	})
});
$(".guanzhu2").hover(function() {
	$("#img2").css({
		'display': 'block'
	});
}, function() {
	$("#img2").css({
		'display': 'none'
	})
});
var regname = $(".registeruserName").eq(0);
regname.change(function() {
	if($(this).val().length < 5) {
		$(".tipuser").css("display","block");
	} else if($(this).val().length > 5) {
		$(".tipuser").css("display","none");
	} else {
		$(".tipuser").css("display","none");
	}
});