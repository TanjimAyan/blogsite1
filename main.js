$(document).ready(function(){

	var navbar = $('.nav-sec');
	var logo = $('.navbar .logo span');

	navbar.removeClass('white');
			navbar.addClass('bg1');

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
			navbar.addClass('bg1');
		}

	});


	let oneRightImg = $('.one .right img');

	let oneRightImgW = oneRightImg.width();

	let getHeight = oneRightImgW / 3;

	getHeight = getHeight * 2;

	oneRightImg.css('height',getHeight + 'px');


	// let fiveImg1 = $('.five .col:first-child img');

	// let fiveImg1W = fiveImg1.width();

	// let getFiveImg1H = fiveImg1W / 3 * 2;

	// fiveImg1.css('height',getHeight + 'px');



	// let rowThreeSqr = $('.three .sqr');

	// let rowThreeSqrW = rowThreeSqr.width();

	// rowThreeSqr.css('height',rowThreeSqrW + 'px');

	let rowFourTestiImg = $('.four .client-card .testiImg');

	let rowFourTestiImgH = rowFourTestiImg.height();

	rowFourTestiImg.css('height',rowFourTestiImgH + 'px');




	bodyWidth = $('body').width();

	rowFiveSec1Img = $('.five .col:first-child img');
	rowFiveSec3Img = $('.five .sec3 img');

	if(bodyWidth >= 992){
		rowFiveSec1Img.addClass('h-100');
	}

	if(bodyWidth < 992){
		rowFiveSec1Img.removeClass('h-100');
	}

	if(bodyWidth >= 768){
		rowFiveSec3Img.addClass('h-100');
	}

	if(bodyWidth < 768){
		rowFiveSec3Img.addClass('h-100');
	}

	// $(window).resize(function(){
	// 	window.location.href=window.location.href;//refresh the page while resize
	// });

	


});