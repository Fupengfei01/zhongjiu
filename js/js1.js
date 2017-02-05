$(function(){
	var $bannerpic=$(".banner-pic a");
	var $slidespan=$(".slide-control span");
	var k=1;
	var timer=setInterval(fn1,3000);
	$slidespan.mouseover(function(){
		clearInterval(timer);
		k=$(this).index();
		fn1();
		timer=setInterval(fn1,3000);
	});
	function fn1(){
		if(k==$bannerpic.size()){
			k=0;
		}
		$slidespan.removeClass();
		$slidespan.eq(k).addClass("cur")
		$bannerpic.eq(k).stop(true).animate({opacity:1}).siblings().animate({opacity:0});
		k++;
	}
});
$(function(){
	$.post("json.json",function(response){
		fn1(response);
	});
	function fn1(obj){
		var createul=$("<ul/>");
		createul.appendTo($(".categorys"));
		for(var key in obj){
			var arr=obj[key].title.split(" ");
			var createli=$("<li/>");
			createli.appendTo(createul);
			createli.html("<h3><a href='javascript:;'>"+arr[0]+"</a></h3>");
			var createspan=$("<span/>");
			createspan.appendTo(createli);
			arr=arr.slice(1);
			for(var i in arr){
				var createa=$("<a href='javascript:;'></a>");
				createa.html(arr[i]);
				createa.appendTo(createspan);
			}
			fn2();
			function fn2(){
				var sub=obj[key].calalog;
				var $creatediv=$("<div class='creatediv'><div/>").appendTo(createli);
				var $subitem=$("<ul class='subitem'></ul>").appendTo($creatediv);
				$creatediv.css({top:35});
				for(var i in sub){
					var str=sub[i].split(" ");
					var $clearfix=$("<li class='clearfix  c1'></li>").appendTo($subitem);
					var $h4=$("<h4/>").appendTo($clearfix);
					$h4.html(str[0]);
					var $ul=$("<ul class='c1'></ul>").appendTo($clearfix);
					str=str.slice(1);
					for(var j in str){
						var $li=$("<li/>").appendTo($ul);
						$li.html("<a href='javascript:;'>"+str[j]+"</a>");
					}
				}
				createli.hover(function(){
					$creatediv.show();
					},function(){
						$creatediv.hide();
				});
			}
		}
	}	
});
$(function(){
	var $a=$(".buy-it-now");
	$a.hover(function(){
		$(this).find("b").stop(true).animate({width:228},200);
	},function(){
		$(this).find("b").stop(true).animate({width:6},200);	
	});
});
$(function(){
	var $floors=$(".floors");
	$.post("floor.json",function(response){
		fn1(response);
	});
	function fn1(obj){
		for(var key in obj){
			var $floor=$("<div class='floor'/>").appendTo($floors);
			f1();
			function f1(){
				var $floor_hd=$("<div class='floor-hd'/>").appendTo($floor);
				var $h3=$("<h3>").appendTo($floor_hd);
				var $ul1=$("<ul/>").appendTo($floor_hd);
				var arr01=obj[key].num01.split(" ");
				$h3.html(arr01[0]);
				arr01=arr01.slice(1);
				for(var i=0;i<arr01.length;i++){
					var $li1=$("<li/>").appendTo($ul1);
					var $a=$("<a href='javascript:;'></a>");
					$a.html(arr01[i]).appendTo($li1);
				}
				$ul1.find("li").first().addClass("active");
			}
			//top.....................
			f2();
			function f2(){
				var $floor_bd=$("<div class='floor-bd'/>").appendTo($floor);
				var $floor_content1=$("<div class='floor-content1'/>").appendTo($floor_bd);
				var $content_left=$("<div class='content-left'/>").appendTo($floor_content1);
				var $slide=$("<div class='slide'/>").appendTo($content_left);
				var str=obj[key].num02.left.l001;
				var $img=$("<img/>").appendTo($slide).attr("src","images/"+str);
				
				var $cata_flo=$("<div class='cata-flo'/>").appendTo($content_left);
				var $ul2=$("<ul/>").appendTo($cata_flo);
				var arr02=obj[key].num02.left.l002.split(" ");
				for(var j=0;j<(arr02.length/2);j++){
					var $li2=$("<li/>").appendTo($ul2);
					var $span1=$("<span><a href='javascript:;'>"+arr02[2*j]+"</a></span>").appendTo($li2);
					var $span2=$("<span><a href='javascript:;'>"+arr02[2*j+1]+"</a></span>").appendTo($li2);
				}
				var $brand_a=$("<div class='brand-A'/>").appendTo($content_left);
				var $ul3=$("<ul/>").appendTo($brand_a);
				var arr03=obj[key].num02.left.l003.split(" ");
				for(var j=0;j<arr03.length;j++){
					var $li3=$("<li/>").appendTo($ul3);
					var $_a=$("<a href='javascript:;'></a>").appendTo($li3);
					var $_img=$("<img>").appendTo($_a).attr("src","images/"+arr03[j]);
				}
				
				var $content_right=$("<div class='content-right'/>").appendTo($floor_content1);
				var arrs=obj[key].num02.right;
				var $rigth_img=$("<ul class='rigth-img c1'/>").appendTo($content_right);
				var arrli=arrs[0].split(" ");
				for(var j=0;j<arrli.length;j++){
					var $lis=$("<li/>").appendTo($rigth_img);
					var $_a=$("<a href='javascript:;'></a>").appendTo($lis);
					var $imgs=$("<img/>").appendTo($_a).attr("src","images/"+arrli[j]);
				}
				arrs=arrs.slice(1);
				for(var i in arrs){
					var $rigth_tab=$("<ul class='rigth-tab c1'/>").appendTo($content_right);
					var arrli=arrs[i].split(" ");
					for(var j=0;j<arrli.length;j++){
						var $lis=$("<li/>").appendTo($rigth_tab);
						var $_a=$("<a href='javascript:;'></a>").appendTo($lis);
						var $imgs=$("<img/>").appendTo($_a).attr("src","images/"+arrli[j]);
					}
					
				}
			}
			f3();
			function f3(){
				var $floor_bd=$("<div class='floor-bd'/>").appendTo($floor);
				var $floor_content2=$("<div class='floor-content2'/>").appendTo($floor_bd);
				var $ul=$("<ul/>").appendTo($floor_content2);
				var arr=obj[key].num03.split(" ");
				for(var i=0;i<arr.length;i++){
					var $li=$("<li>").appendTo($ul);
					var $a=$("<a href='javascript:;'/>").appendTo($li);
					var $img=$("<img/>").appendTo($a).attr("src","images/"+arr[i]);
				}
			}	
		}
		action1();
		function action1(){
			var $a=$(".floor-hd ul li a");
			$a.each(function(i){
				$(this).hover(function(){
					$(this).parent().addClass("active").siblings().removeClass();
					var $uls=$(this).parentsUntil(".floors").find(".content-right ul");
					$uls.eq($(this).parent().index()).show().siblings().hide();
				});
			});
		}
		floor1();
		function floor1(){
			var $li=$(".floor-nav li");
			var $floor=$(".floor");
			$(window).scroll(function(){
				$
				if($(window).scrollTop()>=$(".floors").position().top){
					$(".floor-nav").show();
					if($(window).scrollTop()<$floor.eq(1).position().top){
						$li.eq(0).css("background","#e3393c").siblings().css("background","");
					}else if($(window).scrollTop()<$floor.eq(2).position().top){
						$li.eq(1).css("background","#e3393c").siblings().css("background","");
					}else if($(window).scrollTop()<$floor.eq(3).position().top){
						$li.eq(2).css("background","#e3393c").siblings().css("background","");
					}else{
						$li.eq(3).css("background","#e3393c").siblings().css("background","");
					}

				}else{
					$(".floor-nav").hide();
				}
			});
			$li.click(function(){
				clearInterval(timer);
				var _top=$floor.eq($(this).index()).position().top;
				var timer=setInterval(function(){
					var k=$(document).scrollTop()-_top;
					if(k>=0){
						var x=Math.ceil(k/10);
						var y=$(document).scrollTop();
						$(document).scrollTop(y-x);
						if(k<=0){
							clearInterval(timer);
						}
					}
					if(k<0){
						var x=Math.floor(k/10);
						var y=$(document).scrollTop();
						$(document).scrollTop(y-x);
					}
				},10);
			});
		}
	}
});
$(function(){
	var $li=$(".slide-right li");
	$li.hover(function(){
		$(this).css("background","red").find("span").css("display","block").stop(true).animate({"opacity":1,"right":"40px"});
	},function(){
		$(this).css("background","#2a2a2a").find("span").stop(true).animate({"opacity":0,"right":"68px"},function(){
			$(this).find("span").css("display","none");
		});
	});
	var $ul=$(".menu-bot");
	$ul.click(function(){
		var k=$(document).scrollTop();
		var timer=setInterval(function(){
			var x=Math.ceil(k/10);
			k=k-x;
			$(document).scrollTop(k);
			if(k<=0){
				clearInterval(timer);
			}
		},10);
	});
});

$(function(){
	var $cook=getCookie("user");
	if($cook){
		var $login=$(".login-regin");
		var $li=$(".login-regin li");
		$li.remove();
		var $cli=$("<li/>").appendTo($login);
		$cli.html("你好 ！ &nbsp 用户"+$cook);
		$("<span>&nbsp退出</span>").appendTo($cli).css("color","#666").click(function(){
			delCookie("user","/");
			location.href="index.html";
		});
	}
});
