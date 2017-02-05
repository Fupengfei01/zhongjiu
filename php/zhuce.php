<?php
	$tel=$_POST	["tel"];
	if(strlen($tel)!=11){
		$tel="";
	}
	$pwd=$_POST["pwd"];
	if(strlen($pwd)<6||strlen($pwd)>20){
		$pwd="";
	}
//	$tel=13111111119;
//	$pwd=123456;
	mysql_connect("localhost","root","");
	mysql_select_db("zhuce");
	$sql="insert into user(tel,pwd) values($tel,$pwd)";
	//$sql="delete from user";
	mysql_query($sql);
	echo "good";
?>