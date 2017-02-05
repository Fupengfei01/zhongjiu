$(function() {
	$(".tops").load("index.html .top");
});
$(function() {
	var $p_name = $(".p-name a");
	var $p_img = $(".p-goods .p-img img");
	var $p_price = $(".p-price span");
	var $p_quantity = $(".p-quantity input");
	var $product = getCookie("product");
	var $p_remove = $(".p-remove a");
	if($product) {
		$product = JSON.parse($product);
		$(".product-item").show();
		$p_name.html($product.name);
		$p_img.attr("src", $product.src);
		$p_price.html($product.price + ".00");
		$p_quantity.val($product.num);
		$(".decrement").click(function() {
			var $v = $p_quantity.val() * 1 - 1;
			if($v < 1) {
				$v = 1;
			}
			$p_quantity.val($v);
			$product.num = $v;
			setCookie("product", JSON.stringify($product), 7);
		});
		$(".increment").click(function() {
			var $v = $p_quantity.val() * 1 + 1;
			$p_quantity.val($v);
			$product.num = $v;
			setCookie("product", JSON.stringify($product), 7);
		});
	}
	$p_remove.click(function() {
		$(".product-item").hide();
		delCookie("product","/");


	});

});