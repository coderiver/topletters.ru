$(document).ready(function() {
	// tab
	function tab() {
	     $(".js-tab").each(function(){
	       var tab_link = $(this).find("a");
	       var tab_item = $(this).find("li");
	       var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
	       tab_cont.hide();
	       tab_item.first().addClass("is-active");
	       $(this).parents(".js-tab-group").find(".js-tab1").show();
	       tab_link.on("click", function() {
	           var index = $(this).attr("href");
	           tab_item.removeClass("is-active");
	           $(this).parent().addClass("is-active");
	           tab_cont.hide();
	           $(this).parents(".js-tab-group").find("."+index).show();
	           return false;
	        });
	     });
	}
	tab();
	// fancybox
	$('.fancybox').fancybox();
	// popup
	$('.js-popup').click(function(event) {
		$('.popup').addClass('is-active');
		$('.overlay').addClass('is-active');
		return false;
	});
	$('.overlay').click(function(event) {
		$('.popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		return false;
	});
	// 
	$('.js-send').click(function(event) {
		$(this).parents().find(".popup__form").hide();
		$(this).parents().find(".popup__sucess").show();
	});
	// 
	$('.js-close').click(function(event) {
		$('.popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		$(this).parents().find(".popup__form").show();
		$(this).parents().find(".popup__sucess").hide();
	});
});