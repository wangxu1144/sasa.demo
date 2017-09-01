<?php
	require_once('../connetc.php');
?>
<!doctype html>
<html>

	<head>
		<meta charset="utf-8">
		<title>您好！请登录</title>
		<link rel="stylesheet" href="../css/login.min.v=2017-5-18.min.css" />
		<link rel="shortcut icon" href="..\images\www.ico.la_665db998e77663f88b8abcd58c890f7e_16X16.ico" />
		<script type="text/javascript" src="../js/jquery-3.2.0.min.js"></script>
	</head>

	<body>
		<div class="toobar">
			<div class="menu">
				<div class="menu1">
					<span class="welcome">
            	 	欢迎光临莎莎网!
                    </span>
					<a href="login.html">登录</a>
					<span>或</span>
					<a href="register.html">注册</a>
				</div>
				<div class="menu2">
					<div class="zhanghu" style="display: block;">
						<a href="account.html">我的账户</a>
						<img src="../images/xia.png" />
						<ul class="zhanghuul">
							<li>
								<a href="order.html">我的订单</a>
							</li>
							<li>
								<a href="gift_list.html">我的积分</a>
							</li>
							<li>
								<a href="javascriptvoid:(0)">我的优惠券</a>
							</li>
							<li>
								<a href="javascriptvoid:(0)">我的收藏</a>
							</li>
							<li>
								<a href="javascroptvoid:(0)">我的评价</a>
							</li>
						</ul>
					</div>
					<div class="gouwuche" style="display: block;">
						<img src="../images/gouwuche.png" class="gouwucheimg" />
						<a href="basket.html">我的购物车</a>
						<div class="gouwuchespan">
							<div class="empty">
								购物车中还没有商品，<br> 快去挑选心爱的商品吧
							</div>
						</div>
					</div>
					<div class="shoucang" style="display: block;">
						<a href="javascriptvoid:(0)">我的收藏</a>
					</div>
					<div class="zhanneixin">
						<a href="inbox.html">我的站内信</a>
					</div>
					<div id="sefacenter">
						<a href="../莎莎网/html/sefacenter.html" style="color: #696969;">安全中心</a>
					</div>
					<div class="jifencenter">
						<a href="gift_list.html">积分中心</a>
					</div>
					<div class="Globalsite">
						<a href="javascriptvoid:(0)">Global site</a>
					</div>
					<div class="guanzhu">
						<a href="javascriptvoid:(0)">关注我们</a>
						<img src="../images/1258dcb67b800b6af51b965e93125631a0fe6e1e.png" class="guanzhu1" />
						<img src="../images/db683af04c592c78e284bfb777f3b705bff4493a.png" class="guanzhu2" />
					</div>
					<div class="guanzhuimg">
						<img src="../images/072b1d0568da15dca7f2e550962c8961400d4a5b.jpg" id="img1" />
						<img src="../images/a2843e03f56f75bd4ffd265efdd2e88ecc2cb63c.jpg" id="img2" />
					</div>
				</div>
			</div>
		</div>
		<div class="main" style="display: block;position: relative;margin: 0 auto;">
			<div class="logo" style="margin-top: 0px;width: 1090px;height: 100px;">
				<a href="../index.html" style="display: block;position: absolute;top: 20px;"><img src="../images/de63e200c54345ad02ff3d6de8ce4eb97fafdf87.png" /></a>
			</div>
		</div>
		<div class="warp">
			<div class="warpimg">
				<a href="javascriptvoid:(0)"><img src="../images/积分兑换.png"></a>
			</div>
			<form class="formlogin" method="get" action="logintip.php">
				<div class="title">
					<span class="titlespan">
        				用户登录
        			</span>
					<span class="rightspan">
        				还没有莎莎账号？<a href="register.html">立即注册</a>
        			</span>
					<input class="zhanghao" type="text" name="username" id="userName" value="" placeholder="邮箱/手机">
					<span id="mustzhanghao">请正确填写邮箱/手机!</span>
					<input class="password" type="password" name="passWord" maxlength="16" id="password" placeholder="填写密码">
					<span id="mustpassword">请填写密码!</span>
					<span class="remuber">
        				<input type="checkbox" />
        				<span class="inputspan">记住我</span>
						<a href="javascriptvoid:(0)">忘记密码?</a>
					</span>
					<input class="login" type="submit" value="登录" />
					<div class="otherlogin">
						<span>第三方账号登录</span>
					</div>
					<div class="otherul">
						<ul>
							<li>
								<a href="javascriptvoid:(0)"><img src="../images/login01.jpg" />QQ登录</a>
							</li>
							<li>
								<a href="javascriptvoid:(0)"><img src="../images/login02.jpg" />微博登录</a>
							</li>
							<li>
								<a href="javascriptvoid:(0)"><img src="../images/login03.jpg" />支付宝登录</a>
							</li>
						</ul>
					</div>
				</div>
			</form>
		</div>
		<script src="../js/base.js"></script>
		<script>
			var login = document.getElementsByClassName("login")[0];
			var userName = document.getElementById("userName");
			var passWord = document.getElementById("password");
			var mustzhanghao = document.getElementById("mustzhanghao");
			var mustpassword = document.getElementById("mustpassword");
			//我的账户划入淡入淡出效果
			//关注我们 - 微博的划入滑出
			//用户名的规则
			login.onclick = function() {
				var reg1 = /\w_@/; //以1开头的十一位数字和a-z、A-Z 0-9 _ @;
				if(userName.value != reg1) {
					mustzhanghao.style.display = "block";
					return false;
				} else if(userName.value = reg1) {
					mustzhanghao.style.display = "none"
				}
			}
			//密码的规则
			var str1 = "1";
			login.click = function() {
				if(passWord.value == str1) {
					mustpassword.style.display = "block";
				}
			}
			//我的账户
			$(".zhanghu").hover(function() {
				$(".zhanghuul").stop(true).animate({
					'height': '120px'
				}, 200);
			}, function() {
				$(".zhanghuul").stop(true).animate({
					'height': '0px'
				}, 200);
			})
			//购物车
			$(".gouwuche").hover(function() {
				$(".gouwuchespan").stop(true).animate({
					'height': '72px'
				}, 200);
			}, function() {
				$(".gouwuchespan").stop(true).animate({
					'height': '0px'
				}, 200);
			})
			//关注我们
			$(".guanzhu1").hover(function() {
				$("#img1").css({
					'display': 'block'
				});
			}, function() {
				$("#img1").css({
					'display': 'none'
				})
			})
			$(".guanzhu2").hover(function() {
				$("#img2").css({
					'display': 'block'
				});
			}, function() {
				$("#img2").css({
					'display': 'none'
				})
			})
		</script>
	</body>

</html>