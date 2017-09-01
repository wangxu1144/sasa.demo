<?php
	require_once('../connetc.php');
?>
<!doctype html>
<html>

	<head>
		<meta charset="utf-8">
		<title>您好！请注册</title>
		<link rel="stylesheet" href="../css/register.min.css" />
		<link rel="shortcut icon" href="..\images\www.ico.la_665db998e77663f88b8abcd58c890f7e_16X16.ico" />
		<script type="text/javascript" src="../js/jquery-3.1.1.min.js"></script>
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
						<a href="sefacenter.html" style="color: #696969;">安全中心</a>
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
		<div class="main">
			<div class="logo">
				<a class="index" href="../index.html" target="_blank">
					<img src="../images/de63e200c54345ad02ff3d6de8ce4eb97fafdf87.png" />
				</a>
			</div>
			<div class="warp">
				<div class="warpimg">
					<a href="javascript:void(0)"><img src="../images/123.png"></a>
				</div>
				<form class="formregisger" method="post" action="regsitertip.php">
					<div class="forminner">
						<div class="title clearfix">
							<div class="titlespan fl">注册账号</div>
							<div class="rightspan fr">
								已有莎莎账号？
								<a href="login.html">立即登录</a>
							</div>
						</div>
						<div class="pd10 p20">
							<input class="registeruserName" type="text" name="UserName" placeholder="请输入邮箱/手机号，最少5个字符">
							<div class="tipuser">
								<span id="tipuserName">请填写邮箱或者手机号，最少5个字符</span>
							</div>
						</div>
						<div class="pd10">
							<input class="registerpassWord" type="password" name="PassWord" placeholder="请输入密码6-16位字母和数字的组合!" />
							<div class="tippass">
								<span id="tippassWord">请填写密码，6-16个字符</span>
							</div>
						</div>
						<div class="pd10">
							<input class="repassWord" type="password" placeholder="请再次输入您的密码" />
							<span id="tiprepassWord">两次输入的密码不一致</span>
						</div>
						<div class="yzm pd10 clearfix">
							<input id="yanzhengma" type="text" style=" " maxlength="4" placeholder="请填写验证码" />
							<div class="cgyzm fr">
								<span class="yanzhengma">1234</span>
								<a id="changeyzm" href="javascript:void(0)">
									看不清楚？换一张
								</a>
							</div>
							<span id="spanyz">请正确输入验证码</span>
						</div>
						<div class="yinsi">
							<input id="check1" type="checkbox" />同意
							<a class="tiaokuan" href="javascriptvoid:(0)">莎莎使用条款</a>
							和
							<a class="yinsizhengce" href="javacriptvoid:(0)">隐私保护政策</a>
						</div>
						<div class="btn-register">
							<input class="x-input_submit register" type="submit" value="注册" />
						</div>
					</div>
				</form>
			</div>
		</div>

		<script src="../js/base.js"></script>
		<script>
			var yz = document.getElementById("yanzhengma"); //验证码输入框
			var yanzhengma = document.getElementsByClassName("yanzhengma")[0]; //验证码
			var changeyzm = document.getElementById("changeyzm"); //更换验证码
			var spanyz = document.getElementById("spanyz");
			var userName = document.getElementsByClassName("registeruserName")[0];
			var passWord = document.getElementsByClassName("registerpassWord")[0];
			var tipuserName = document.getElementById("tipuserName");
			var tippassWord = document.getElementById("tippassWord")
			var repassWord = document.getElementsByClassName("repassWord")[0];
			var tiprepassWord = document.getElementById("tiprepassWord");
			var check1 = document.getElementById("check1");
			var register = document.getElementsByClassName("x-input_submit")[0];
			//检查用户名
			/*userName.onchange = function() {
				if(userName.value.length < 5) {
					tipuserName.style.visibility="visible";
					//register.disabled="disabled"
				} else if(userName.value.length > 5) {
					tipuserName.style.visibility="hidden";
					//register.disabled="";
				} else {
					tipuserName.style.visibility="hidden";
				}
			}*/
			//userName.onblur=function(){
			//tipuserName.style.display="none"
			//}
			//检查密码
			passWord.onchange = function() {
				if(passWord.value.length < 6) {
					tippassWord.style.display = "inline";
					//register.disabled="disabled";
					//tippassWord.innerHTML="请填写正确的密码"
				} else if(passWord.value.length >= 6) {
					tippassWord.style.display = "none"
					//register.disabled=""
				}
			}
			repassWord.onchange = function() {
				if(repassWord.value != passWord.value) {
					tiprepassWord.style.display = "inline-block";
					//register.disabled="disabled"
				} else if(repassWord.value == passWord.value) {
					tiprepassWord.style.display = "none";
					//register.disabled="";
				}
			}
			//检查验证码
			yz.onchange = function() {
				if(yz.value != yanzhengma.innerHTML) {
					spanyz.style.display = "inline-block"
					yz.value = "";
					//register.disabled="disabled";
				} else if(yz.value == yanzhengma.innerHTML || yz.length < 4) {
					spanyz.style.display = "none";
					//register.disabled=""
				}
			}
			//账号的正则
			//var reguser=/\w
			//更换验证码
			changeyzm.onclick = function() {
				yanzhengma.innerHTML = parseInt(Math.random() * 9000 + 1000);
			}
			/*register.onclick = function() {
				if(userName.value.length < 6 || passWord.value.length < 6 || yz.value != yanzhengma.innerHTML || repassWord.value != passWord.value) {
					return false;
				} else {
					return false;
				}
				if(userName.value.length > 5 || passWord.value.length > 5 || yz.value == yanzhengma.innerHTML || repassWord.value == passWord.value) {
					return true;
				}
				console.log($(".username").val())
				if(userName.value.length < 5) {
					tipuserName.style.display = "block";
					//register.disabled="disabled"
					//如果输入的内容不符合正则，则显示提示信息
				} else if(userName.value.length > 5) {
					tipuserName.style.display = "none";
					//register.disabled="";
					//如果输入的内容符合正则，则隐藏提示信息
				} else {
					tipuserName.style.display = "none"
				}
			}*/
			//我的账户
		</script>
		<script type="text/javascript" src="../js/register.js"></script>
	</body>

</html>