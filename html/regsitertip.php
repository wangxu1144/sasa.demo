<?php
	require_once('../connetc.php');
	//print_r ($_POST);
	$username=$_POST['UserName'];
	$password=$_POST['PassWord'];
	$send="insert into userinfo(UserName,PassWord) values ('$username','$password')";
	//echo $send;
	if(mysqli_query($con,$send)){
		echo "<script>alert('用户注册成功');window.location.href='login.php'</script>";
	}
	
?>