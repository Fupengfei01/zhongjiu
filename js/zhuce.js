$(function() {
	$(".tel-info .tex").blur(checktel);
	$(".code-info .txt").blur(checkcode);
	$(".code-info img").attr("src", "images/yanzheng/" + $data.src).click(function() {
		change();
		$(this).attr("src", "images/yanzheng/" + $data.src);
	});
	$(".pwd-info .tex").blur(setpwd);
	$(".pwdrepeat .tex").blur(checkpwd);
	$(".registsubmit .btn-regist").click(registSubmit);
	$(".chek-info .chekbox").change(checkcheckbox);
});
var pwd = "";

function setpwd() {
	var $txt = $(".pwd-info .tex");
	var $error = $(".pwd-info .error");
	var partten = /^[\w\&\%\@\#\?\,\.\!\^\*\&]{6,20}$/;
	var $result = false;
	if($txt.val() == "") {
		$error.show();
	} else if(partten.test($txt.val())) {
		$error.hide();
		pwd = $txt.val();
		$result = true;
	} else {
		$error.show();
	}
	return $result;
}

function checkpwd() {
	var $result = false;
	var $tex = $(".pwdrepeat .tex");
	var $error = $(".pwdrepeat .error");
	if($tex.val() != pwd) {
		$error.show();
	} else {
		$error.hide();
		$result = true;
	}
	return $result;
}
var $data;
change();

function change() {
	$.ajax({
		type: "post",
		url: "php/cart.php",
		async: false,
		success: function(response) {
			$data = eval("(" + response + ")");
			
		}
	});
}

function checkcode() {
	var $txt = $(".code-info .txt");
	var $error = $(".code-info .error");
	var $result = false;
	if($txt.val() == "") {
		$error.show();
	} else if($txt.val().length != 4) {
		$error.show();
		$error.html("验证码输入有误");
	} else {
		if($txt.val() == $data.cart) {
			$error.hide();
			$result = true;
		} else {
			$error.show();
			$error.html("验证码错误");
		}
	}
	return $result;
}

function checktel() {
	var $txt = $(".tel-info .tex");
	var $error = $(".tel-info .error");
	var partten = /^1[34578]\d{9}$/;
	var $result = false;
	if($txt.val() == "") {
		$error.show();
	} else if(partten.test($txt.val())) {
		$.ajax({
			type: "post",
			url: "php/jiance.php",
			data: {
				tel1: $txt.val()
			},
			async: false,
			success: function(response) {
				var data = response;
				if(data == "true") {
					$error.hide();
					$result = true;
				} else {
					$error.show();
					$error.html("手机号码已经被注册");
				}
			}
		});
	} else {
		$error.show();
		$error.html("请输入正确的手机号码");
	}
	return $result;
}

function registSubmit() {
	setpwd();
	checkpwd();
	checkcode();
	checktel();
	checkcheckbox();
	var $result = setpwd() && checkpwd() && checkcode() && checktel()&&checkcheckbox();
	var $tel = $(".tel-info .tex").val();
	var $pwd = $(".pwd-info .tex").val();
	if($result) {
		$.ajax({
			type: "post",
			url: "php/zhuce.php",
			data: {
				tel: $tel,
				pwd: $pwd
			},
			async: true,
			success: function(response) {
				setCookie("user",$tel,1);
				location.href="index.html";
			}
		});
	}
}
function checkcheckbox(){
	var $checkbox=$(".chek-info .chekbox");
	var $error=$(".chek-info .error");
	var $result=false;
	if($checkbox.is(":checked")){
		$result=true;
		$error.hide();
	}else{
		$error.show();
	}
	return $result;
}
	

