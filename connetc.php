<?php
	//加载配置文件
	require_once('config.php');
	//链接数据库
	if(!$con=mysqli_connect(HOST,USERNAME,PASSWORD)){
		echo mysqli_error($con);
	}
	//选择数据库
	if(!mysqli_select_db($con,'sasa.com')){
		echo mysqli_error($con);
	}
	//设置字符集
	if(!mysqli_query($con,'set names utf8')){
		echo mysqli_error($con);
	}
?>