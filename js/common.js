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



	// validate
	$(".form__input [name=tel]").mask("(999) 999-99-99");
	$(".form__input [name=birthdate]").mask("99/99/9999");
	$(".php-popup_request").validate({
    rules:{
      name:{
        required: true,
        minlength: 4,
        maxlength: 40,
      },
      adress:{
        required: true,
        minlength: 4,
        maxlength: 40,
      },
      tel:{
        // required: true
      },
    },
    messages:{
      name:{
        required: "Это поле обязательно для заполнения",
        minlength: "Имя должно быть минимум 4 символа",
        maxlength: "Максимальное число символов - 40",
      },
      adress:{
        required: "Это поле обязательно для заполнения",
        minlength: "Имя должно быть минимум 4 символа",
        maxlength: "Максимальное число символов - 40",
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
        	$('.popup').addClass('thanks');
         	$('.popup-wrap .popup__title').animate(500).html('');
        	$('.popup-wrap #first_form').animate(500).html('Спасибо, скоро менеджер свяжется с Вами');
        } 
      });
    }
	});

});
