<?php
	require_once('../config.php');
	require_once('../connetc.php');
	//print_r ($_GET);
	$username=$_GET['username'];
	$password=$_GET['passWord'];
	//echo $username;
	$reuslt=mysqli_query($con,"select * from UserName");
	/*while($con,$row = mysqli_fetch_array($con,$reuslt)){
		echo $row;
	}*/
?>