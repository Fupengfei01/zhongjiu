<?php
	mysql_connect("localhost","root","");
	mysql_select_db("zhuce");
	//$sql="select * from user where tel='$tel'";
	$sql="select * from cart where id=".(rand(1,7));
	$result=mysql_query($sql);
	$num=mysql_num_rows($result);
	$cart=mysql_result($result,0,1);
	$src=mysql_result($result,0,2);
	echo "{'cart':'$cart','src':'$src'}";
?>