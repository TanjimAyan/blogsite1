$(document).ready(function(){

	var navbar = $('.nav-sec');
	var logo = $('.navbar .logo span');

	$(window).scroll(function(){

		let scrollTop = $(window).scrollTop();

		if(scrollTop > 0){
				navbar.removeClass('bg1');
				navbar.addClass('white');
				navbar.addClass('shadow1');
				logo.addClass('logoScrolled');

		}else{
			navbar.removeClass('white');
			navbar.removeClass('shadow1');
			logo.removeClass('logoScrolled');
		}

	});


});