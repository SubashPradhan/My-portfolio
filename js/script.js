$(document).ready(function() {
	$('.search').focusin(function() {
		$('#navbar a').fadeOut(1500);
		$('.search').css('width', '350px');
	});

	$('.search').focusout(function() {
		$('#navbar a').fadeIn(3000);
		$('.search').css('width', '200px');
	});

	$("#content-1").typed({
		strings: ["<span class='hello'> Hello !!!</span><br /> <br /><span class='hello-2'>Welcome To My PortFolio !!! <br /> <br /> I am Subash Pradhan !!! <br /> <br /> Nice to meet you !!!</span>"],
		typeSpeed: 20
	});

	$('.my-image').mouseenter(function() {
		$(this).attr('src', 'images/my-image2.png');
	});

	$('.my-image').mouseleave(function() {
		$(this).attr('src', 'images/my-image.png');
	});

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
})