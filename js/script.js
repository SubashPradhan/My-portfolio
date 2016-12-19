$(document).ready(function() {

// effect for search bar:	
	$('.search').focusin(function() {
		$('#navbar a').fadeOut(1500);
		$('.search').css('width', '350px');
	});

	$('.search').focusout(function() {
		$('#navbar a').fadeIn(3000);
		$('.search').css('width', '200px');
	});

	//search engine:

	(function() {
    var cx = '014624506685165915712:wm-8wtjqs7s';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = $('script')[0];
    s.parentNode.insertBefore(gcse, s);
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
		var currentScroll = $(this).scrollTop();
		if (currentScroll < previousScroll) {
			$('#navbar').fadeIn(1000);

		} else {
			$('#navbar').fadeOut();

		}
		previousScroll = currentScroll;
	});


	// Scrolling effect:
	$('#navbar a').click(function(e) {
		e.preventDefault();
		var sectionId = e.currentTarget.id + 'section';

		$('html body').animate({
			scrollTop: $('#' + sectionId).offset().top
		},1000);
	});

});	