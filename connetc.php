<?php
	//���������ļ�
	require_once('config.php');
	//�������ݿ�
	if(!$con=mysqli_connect(HOST,USERNAME,PASSWORD)){
		echo mysqli_error($con);
	}
	//ѡ�����ݿ�
	if(!mysqli_select_db($con,'sasa.com')){
		echo mysqli_error($con);
	}
	//�����ַ���
	if(!mysqli_query($con,'set names utf8')){
		echo mysqli_error($con);
	}
?>