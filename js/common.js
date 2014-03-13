$(document).ready(function() {
	// tab
	function tab() {
	   $(".js-tab").each(function(){
	     var tab_link = $(this).find("a");
	     var tab_item = $(this).find("li");
	     var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
	     tab_item.first().addClass("is-active"); // !
	     // $(this).parents(".js-tab-group2").find(".js-tab1").show();
	     tab_link.on("click", function() {
	        var index = $(this).attr("href");
	        tab_item.removeClass("is-active");
	        $(this).parent().addClass("is-active");


	        tab_cont.removeClass("is-show");
	        $(this).parents(".js-tab-group").find("."+index).addClass("is-show");


	        // if ($(this).parents(".js-tab-group").find("."+index)){
	        // 	$(this).addClass("is-show");
	        // }
	        // else{
	        // 	$(this).removeClass("is-show");
	        // }


	        return false;
	      });
	   });

	   // $(".js-tab").each(function(){

	   // 	});
	}
	tab();

	// fancybox
	$('.fancybox').fancybox();

	// popup
	$('.js-popup_form').click(function(event) {
		$('.popup_request').addClass('is-active');
		$('.overlay').addClass('is-active');
		return false;
	});
	// popup 2
	$('.js-popup_down').click(function(event) {
		$('.popup_download').addClass('is-active');
		$('.overlay').addClass('is-active');
		return false;
	});
	$('.overlay').click(function(event) {
		$('.popup').removeClass('is-active');
		$('.overlay').removeClass('is-active');
		return false;
	});
	// 



	// 
	$('.js-close').click(function(event) {
		$('.popup').removeClass('is-active');
		$('.popup').removeClass('thanks');
		$('.overlay').removeClass('is-active');
	});



	// validate
	$(".php-popup_request").validate({
    rules:{
      name:{
        required: true,
      },
      adress:{
        required: true,
      },
      tel:{
        // required: true
      },
    },
    messages:{
      name:{
        required: "Заполните это поле",
      },
      adress:{
        required: "Заполните это поле",
      },
    },

    submitHandler: function(form) {
      var values = {};

      $.each($(form).serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });
      $.ajax({
        url: '/mail.php',             // указываем URL и
        dataType : "json",            // тип загружаемых данных
        type: "POST",
        data: values,                    
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
        	$('.popup_request').addClass('thanks');
        } 
      });
    }
	});


	$(".php-popup_request2").validate({
    rules:{
      name:{
        required: true,
      },
      adress:{
        required: true,
      },
      tel:{
        // required: true
      },
    },
    messages:{
      name:{
        required: "Заполните это поле",
      },
      adress:{
        required: "Заполните это поле",
      },
    },

    submitHandler: function(form_m) {
      var values = {};

      $.each($(form).serializeArray(), function(i, field) {
        values[field.name] = field.value;
      });
      $.ajax({
        url: '/mail-two.php',             // указываем URL и
        dataType : "json",            // тип загружаемых данных
        type: "POST",
        data: values,                    
        success: function (data, textStatus) { // вешаем свой обработчик на функцию success
        	$('.php-popup_request2').addClass('thanks');
        } 
      });
    }
	});

	// get attr
	$('.js-data').click(function(event) {
		var getAttr = $(this).attr("data");
		$(".get-attr").val(getAttr);
	});



		// link to button
		// $(function(){
		// 	$('.php-popup_request2').submit(function () { 
		// 	    $('.popup__title').append('<code>submit</code> JavaScript event triggered<br />');
		// 	    return false; // disable submit 
		// 	  });

		// 	$('.js-button-submit').click(function() {
		// 		$(".php-popup_request2").submit();
		// 	});
		// });
});
