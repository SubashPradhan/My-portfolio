$(document).ready(function() {

	// effect for search bar:	
	$('.search').focusin(function() {
		$('#navbar a').fadeOut(1500);
		$('.search').css('width', '300px');
	});

	$('.search').focusout(function() {
		$('#navbar a').fadeIn(3000);
		$('.search').css('width', '200px');
	});

	// typing text effect with library:
	$("#content-1").typed({
		strings: ["<span class='hello'> Hello !!!</span><br /> <br /><span class='hello-2'>Welcome To My PortFolio !!! <br /> <br /> I am Subash Pradhan !!! <br /> <br /> Nice to meet you !!!</span>"],
		typeSpeed: 20
	});

	// Image toggle(changes image on hover/ mouse-enter or exit):
	$('.my-image').mouseenter(function() {
		$(this).attr('src', 'images/my-image2.png');
	});

	$('.my-image').mouseleave(function() {
		$(this).attr('src', 'images/my-image.png');
	});

	// Navbar effect(appears navbar when scrolled up and hides it when scrolled down):
	var previousScroll = 0;
	$(window).scroll(function () {
		if($(window).width() > 1200){
			var currentScroll = $(this).scrollTop();
			if (currentScroll < previousScroll) {
				$('#navbar').fadeIn(1000);

			} else {
				$('#navbar').fadeOut();

			}
			previousScroll = currentScroll;
		}	
	});


	// Scrolling effect:
	$('#navbar a').click(function(e) {
		e.preventDefault();
		var sectionId = e.currentTarget.id + 'section';

		$('html body').animate({
			scrollTop: $('#' + sectionId).offset().top
		},1000);
	});

	//radio button function:	
	$('.full-view').click(function(){		
		$('.my-info').addClass('full-screen');
		$('.about-image').fadeOut(1200);
		$('.full-view').prop('checked', true);
		$('.normal-view').prop('checked', false);      		 

	});

	$('.normal-view').click(function(){		
		$('.my-info').removeClass('full-screen');
		$('.about-image').fadeIn(1200);
		$('.normal-view').prop('checked', true);
		$('.full-view').prop('checked', false);      		 

	});

	$('.icon').click(function() {
		if($('.topnav').hasClass('topnav')){
			$('.topnav').toggleClass('responsive');


		}
	});

	// if ($(window).width() < 1200) {
	// 	$('#form input').css('width', '100%');
	// }

	//contact-form validator:
	var frmvalidator = new Validator("contactform");
	frmvalidator.addValidation("name", "req", "Please provide your name");
	frmvalidator.addValidation("email", "req", "Please provide your email");
	frmvalidator.addValidation("email", "email", "Please enter a valid email address");

});

