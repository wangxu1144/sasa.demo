$("#fenlei").hover(function() { $("#ul2").show() }, function() { $("#ul2").hide() });
$("#ul2 li").hover(function() { $(this).find("div").show() }, function() { $(this).find("div").hide() });
$(".zhanghu").hover(function() { $(".zhanghuul").stop(true).stop(true).animate({ height: "120px" }, 200) }, function() { $(".zhanghuul").stop(true).stop(true).animate({ height: "0px" }, 200) });
$(".gouwuche").hover(function() { $(".gouwuchespan").stop(true).stop(true).animate({ height: "72px" }, 200) }, function() { $(".gouwuchespan").stop(true).stop(true).animate({ height: "0px" }, 200) });
$(".guanzhu1").hover(function() { $("#img1").css({ display: "block" }) }, function() { $("#img1").css({ display: "none" }) });
$(".guanzhu2").hover(function() { $("#img2").css({ display: "block" }) }, function() { $("#img2").css({ display: "none" }) });
$("document").scroll(function() { console.log("Dd"); if($("document").Height < 700 + "px") { $("#gifttab").css({ position: "fixed", left: "0px", top: "0px" }) } });
$("#mydisdiv").hover(function() { $("#mydis").css({ opacity: "1", width: "90px" }, 200) }, function() { $("#mydis").css({ opacity: "0", width: "0px" }, 200) });
$("#mysidecodediv").hover(function() { $("#mysidecode").css({ opacity: "1", width: "140px", height: "140px" }, 200) }, function() { $("#mysidecode").css({ opacity: "0", width: "0px", height: "0px" }, 200) });
$("#mysidehistorydiv").hover(function() { $("#mysidehistory").css({ opacity: "1", width: "90px" }, 200) }, function() { $("#mysidehistory").css({ opacity: "0", width: "0px" }, 200) });
$("#show_history").click(function() { $("#history").css({ display: "block" }) });
$("#js_closehistory").click(function() {
	console.log($(".sidecart-cont"));
	$("#history").css({ display: "none" })
});
$("#mysasadiv").hover(function() { $("#mysasa").css({ opacity: "1", width: "90px" }, 200) }, function() { $("#mysasa").css({ opacity: "0", width: "0px" }, 200) });
$("#myfavdiv").hover(function() { $("#myfav").css({ opacity: "1", width: "90px" }, 200) }, function() { $("#myfav").css({ opacity: "", width: "0px" }, 200) });
$("#show_basketcart").click(function() { $("#js_sidecart").css({ display: "block" }) });
$("#js_closecart").click(function() { $("#js_sidecart").css({ display: "none" }) });
$(".sideup").click(function() { $("html,body").stop(true).stop(true).animate({ scrollTop: 0 }, "slow") });
$("#allpinpai").hover(function() { $("#pinpaibox").show() }, function() { $("#pinpaibox").hide() });
$(".ahover:has(ul)").click(function(a) { if(this == a.target) { if($(this).children().is(":hidden")) { $(this).find("ul").show() } else { $(this).find("ul").hide() } } });