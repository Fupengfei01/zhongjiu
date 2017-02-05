<?php
	$txt=$_POST["txt"];
	$pwd=$_POST["pwd"];
	mysql_connect("localhost","root","");
	mysql_select_db("zhuce");
	$sql="select * from user where tel='$txt' and pwd='$pwd'";
	$result=mysql_query($sql);
	$num = mysql_num_rows($result);
	if($num){
		echo true;
	}
	else{
		echo false;
	}
?>