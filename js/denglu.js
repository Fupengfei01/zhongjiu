$(function(){
	var $btn_entry=$(".btn-entry");
	$btn_entry.click(function(){
		var $user=$(".fore1 .txt");
		var $pwd=$(".fore2 .txt");
		var $error=$(".errors")
		$.post("php/denglu.php",{txt:$user.val(),pwd:$pwd.val()},function(response){
			if(!response){
				$error.show();
			}else{
				$error.hide();
				setCookie("user",$user.val(),1);
				location.href="index.html";
			}
		});
	});
});
