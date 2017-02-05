$(function() {
	$(".tops").load("index.html .top", function() {
		var $cook = getCookie("user");
		if($cook) {
			var $login = $(".login-regin");
			var $li = $(".login-regin li");
			$li.remove();
			var $cli = $("<li/>").appendTo($login);
			$cli.html("你好 ！ &nbsp 用户" + $cook);
			$("<span>&nbsp退出</span>").appendTo($cli).css("color", "#666").click(function() {
				delCookie("user", "/");
				location.href = "index.html";
			});
		}
	});
});
$(function() {
	$(".headers").load("index.html .header");

});
$(function() {
	$(".footers").load("index.html .footer");

});
$(function() {
	$(".right-slides").load("index.html .slide-right", function() {
		var $li = $(".slide-right li");
		$li.hover(function() {
			$(this).css("background", "red").find("span").css("display", "block").stop(true).animate({
				"opacity": 1,
				"right": "40px"
			});
		}, function() {
			$(this).css("background", "#2a2a2a").find("span").stop(true).animate({
				"opacity": 0,
				"right": "68px"
			}, function() {
				$(this).find("span").css("display", "none");
			});
		});
		var $ul = $(".menu-bot");
		$ul.click(function() {
			var k = $(document).scrollTop();
			var timer = setInterval(function() {
				var x = Math.ceil(k / 10);
				k = k - x;
				$(document).scrollTop(k);
				if(k <= 0) {
					clearInterval(timer);
				}
			}, 10);
		});
	});
});
$(function() {
	var $h4 = $(".m-left dd h4");
	$h4.click(function() {
		$(".m-left dd ul").toggle();
		$(".m-left dd b").toggleClass("b1");
	});

});