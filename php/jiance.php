<?php
	$tel=$_POST["tel1"];
	mysql_connect("localhost","root","");
	mysql_select_db("zhuce");
	$sql="select * from user where tel='$tel'";
	$result=mysql_query($sql);
	$num = mysql_num_rows($result);
	if($num){
		echo "false";
	}
	else{
		echo "true";
	}
?>