$("#fenlei").hover(function(){$("#ul2").show()},function(){$("#ul2").hide()});$("#ul2 li").hover(function(){$(this).find("div").show()},function(){$(this).find("div").hide()});$(".zhanghu").hover(function(){$(".zhanghuul").stop(true).stop(true).animate({height:"120px"},200)},function(){$(".zhanghuul").stop(true).stop(true).animate({height:"0px"},200)});$(".gouwuche").hover(function(){$(".gouwuchespan").stop(true).stop(true).animate({height:"72px"},200)},function(){$(".gouwuchespan").stop(true).stop(true).animate({height:"0px"},200)});$(".guanzhu1").hover(function(){$("#img1").css({display:"block"})},function(){$("#img1").css({display:"none"})});$(".guanzhu2").hover(function(){$("#img2").css({display:"block"})},function(){$("#img2").css({display:"none"})});$("document").scroll(function(){console.log("Dd");if($("document").Height<700+"px"){$("#gifttab").css({position:"fixed",left:"0px",top:"0px"})}});$("#mydisdiv").hover(function(){$("#mydis").css({opacity:"1",width:"90px"},200)},function(){$("#mydis").css({opacity:"0",width:"0px"},200)});$("#mysidecodediv").hover(function(){$("#mysidecode").css({opacity:"1",width:"140px",height:"140px"},200)},function(){$("#mysidecode").css({opacity:"0",width:"0px",height:"0px"},200)});$("#mysidehistorydiv").hover(function(){$("#mysidehistory").css({opacity:"1",width:"90px"},200)},function(){$("#mysidehistory").css({opacity:"0",width:"0px"},200)});$("#show_history").click(function(){$("#history").css({display:"block"})});$("#js_closehistory").click(function(){console.log($(".sidecart-cont"));$("#history").css({display:"none"})});$("#mysasadiv").hover(function(){$("#mysasa").css({opacity:"1",width:"90px"},200)},function(){$("#mysasa").css({opacity:"0",width:"0px"},200)});$("#myfavdiv").hover(function(){$("#myfav").css({opacity:"1",width:"90px"},200)},function(){$("#myfav").css({opacity:"",width:"0px"},200)});$("#show_basketcart").click(function(){$("#js_sidecart").css({display:"block"})});$("#js_closecart").click(function(){$("#js_sidecart").css({display:"none"})});$(".sideup").click(function(){$("html,body").stop(true).stop(true).animate({scrollTop:0},800)});$(".tags-hd").eq(0).click(function(){$("html,body").stop(true).animate({scrollTop:930},500);$(this).addClass("active").siblings().removeClass("active")});$(".tags-hd").eq(1).click(function(){$("html,body").stop(true).animate({scrollTop:1210},500);$(this).addClass("active").siblings().removeClass("active")});$(".tags-hd").eq(2).click(function(){$("html,body").stop(true).animate({scrollTop:4350},500);$(this).addClass("active").siblings().removeClass("active")});$(".tags-hd").eq(3).click(function(){$("html,body").stop(true).animate({scrollTop:6595},500);$(this).addClass("active").siblings().removeClass("active")});$(".action-handle").hover(function(){$(".pop-body").stop(true).stop(true).animate({height:"148px"},300)},function(){$(".pop-body").stop(true).stop(true).animate({height:"0px"},300)});$(function(){var a=$("#tags").offset().top;$(window).scroll(function(){var b=$(this).scrollTop();if(b>a){$("#tags").css({position:"fixed",top:"0","box-shadow":"2px 4px 5px rgba(0, 0, 0, 0.2)"},200)}if(b<a){$("#tags").css({position:"relative","box-shadow":""})}})});$("#allpinpai").hover(function(){$("#pinpaibox").show()},function(){$("#pinpaibox").hide()});$(".prev").click(function(){$(".img_list").animate({"margin-left":"0px"},300)});$(".next").click(function(){$(".img_list").animate({"margin-left":"-92px"},300)});$(".product-album-pic a").eq(0).show().siblings().hide();$(".img_list li").hover(function(){$(this).addClass("active").siblings().removeClass("active");$(this).css({width:"91px",height:"94px"}).siblings().css({width:"102px",height:"102px"});$(this).find("a").css("border","none");var a=$(this).index();$(".product-album-pic a").eq(a).show().siblings().hide()},function(){$(this).find("a").css("border","1px solid #DDDDDD")});