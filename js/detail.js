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
			shopping();
		});
	});
	$(".headers").load("index.html .header");
	$(".navs").load("index.html .nav");
	$(".footers").load("index.html .footer");
});
//$(function(){
//	$(".right-slides").load("index.html .slide-right",function(){
//		var $li=$(".slide-right li");
//		$li.hover(function(){
//			$(this).css("background","red").find("span").css("display","block").stop(true).animate({"opacity":1,"right":"40px"});
//		},function(){
//			$(this).css("background","#2a2a2a").find("span").stop(true).animate({"opacity":0,"right":"68px"},function(){
//				$(this).find("span").css("display","none");
//			});
//		});
//		var $ul=$(".menu-bot");
//		$ul.click(function(){
//			var k=$(document).scrollTop();
//			var timer=setInterval(function(){
//				var x=Math.ceil(k/10);
//				k=k-x;
//				$(document).scrollTop(k);
//				if(k<=0){
//					clearInterval(timer);
//				}
//			},10);
//		});
//		shopping();
//	});
//});
$(function() {
	var $wrap = $(".Warp");
	var $a = $(".spec-list a");
	var num = 0;
	$a.click(function() {
		num = $(this).parent().index();
		$(".Warp img").attr("src", "images/small0" + num + ".jpg");
	});
	$wrap.hover(function(evt) {
		var $lens = $("<div class='lens'/>").appendTo($wrap);
		var $jqzoom = $(".jqzoom");
		var $large = $("<div class='large'/>;").appendTo($jqzoom);
		$(document).mousemove(function(ev) {
			var viewwidth = $wrap.innerWidth() - $lens.innerWidth();
			var viewheight = $wrap.innerHeight() - $lens.innerHeight();
			var _top = ev.pageY - parseInt($wrap.offset().top) - $lens.innerWidth() / 2;
			var _left = ev.pageX - parseInt($wrap.offset().left) - $lens.innerHeight() / 2;
			if(_top < 0) {
				_top = 0;
			} else if(_top > viewheight) {
				_top = viewheight;
			}
			if(_left < 0) {
				_left = 0;
			} else if(_left > viewwidth) {
				_left = viewwidth;
			}
			$lens.css({
				"top": _top,
				"left": _left
			});
			var scale = $large.innerWidth() / $lens.innerWidth();
			var Top = -_top * scale;
			var Left = -_left * scale;
			$large.css({
				"background": "url(images/large0" + num + ".jpg) no-repeat " + Left + "px " + Top + "px"
			});
		});
	}, function() {
		$(document).off("mousemove");
		$(".Warp .lens").remove();
		$(".jqzoom .large").remove();

	});
});

$(function() {
	var $reduce = $(".btn-reduce");
	var $add = $(".btn-add");
	var $txt = $(".choose-amount input");
	var partten = /^\d*$/;
	$txt.blur(function() {
		if($txt.val() == "" || $txt.val() == 0) {
			$txt.val("1");
		}
	});
	$txt.keyup(function() {
		if(!partten.test($txt.val())) {
			$txt.val("1");
		}
	});
	$add.click(function() {
		$txt.val($txt.val() * 1 + 1);
	});
	$reduce.click(function() {
		var x = $txt.val() - 1;
		if(x <= 0) {
			x = 1;
		}
		$txt.val(x);
	});
});

function shopping() {
	var $txt = $(".choose-amount input");
	var $btn_append = $(".btn-append");
	var $cart = $(".right-cart i");
	var $many = $(".right-cart b");
	if(getCookie("product")) {
		var $x = JSON.parse(getCookie("product"));
		$many.html($x.num);
	}
	$btn_append.click(function(ev) {
		clearInterval(timer);
		var $shops = $("<div class='shops'/>").appendTo($btn_append);
		//$shops.css({"background":"url(../images/small00.jpg)"});
		$shops.css({
			"background": "url(images/small00.jpg) no-repeat",
			"background-size": "cover"
		});
		$shops.offset({
			left: ev.pageX - 22,
			top: ev.pageY - 22
		});
		var disx = 0;
		var disy = 0;
		largex = $cart.offset().left - $shops.offset().left;
		var _x = $cart.offset().left - $shops.offset().left;
		var _y = $cart.offset().top - $shops.offset().top;
		var a = 0.002;
		var b;
		var $w = $shops.innerWidth();
		var $h = $shops.innerHeight();
		b = (_y - _x * _x * a) / _x;
		var timer = setInterval(function() {
			_x = $cart.offset().left - $shops.offset().left;
			_y = $cart.offset().top - $shops.offset().top;
			disx += 10;
			disy = a * disx * disx + b * disx;
			$w = $w / 1.015;
			$h = $h / 1.015;
			$shops.width($w);
			$shops.height($h);
			$shops.offset({
				left: ev.pageX - 22 + disx,
				top: ev.pageY - 22 + disy
			});
			if(disx >= largex) {
				clearInterval(timer);
				$shops.remove();
				$many.html($many.html() * 1 + $txt.val() * 1);
				setshopping(); //购物车添加
			}
		}, 12)
	});
}
$(function() {
	var $li = $(".float-navwrap li");
	var $jieshao = $(".jieshao");
	var $pingjia = $(".pingjia");
	var $zixun = $(".zixun");
	var $navwrapul = $(".float-navwrap ul");
	var $top = $(".float-navwrap ul").offset().top + 186;
	$jieshao.click(function() {
		$li.removeClass("active");
		$(this).addClass("active");
		$(".product-img").show();
		$(window).scrollTop($top);
	});
	$pingjia.click(function() {
		$li.removeClass("active");
		$(this).addClass("active");
		$(".product-img").hide();
		$(window).scrollTop($top + 30);
	});
	$zixun.click(function() {
		$li.removeClass("active");
		$(this).addClass("active");
		$(".product-img").hide();
		$(window).scrollTop($top + 282);
	});
	$(window).scroll(function() {
		$navwrapul = $(".float-navwrap ul");
		//console.log($(window).scrollTop()+"----"+$top);
		if($top <= $(window).scrollTop()) {
			$navwrapul.css({
				"position": "fixed",
				"top": 0
			});
		} else {
			$navwrapul.css({
				"position": "relative",
				"top": "0"
			});
		}
	});
});

function setshopping() {
	var $name = $(".prices .name h1").html();
	var $price = $(".prices .s-price d").text();
	var $imgsrc = $(".spec-list li:first").find("img").attr("src");
	var $manycart = $(".right-cart b").html();
	var $promotion = {
		name: $name,
		price: $price,
		src: $imgsrc,
		num: $manycart
	};
	$promotion = JSON.stringify($promotion);
	setCookie("product", $promotion, 7);
}