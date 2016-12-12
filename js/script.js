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
        strings: ["<span class='hello'> Hello !!!</span><br /> <br />Welcome To My PortFolio !!! <br /> <br /> I am Subash Pradhan !!! <br /> <br /> Nice to meet you !!!"],
        typeSpeed: 20
      });

	 $('.my-image').mouseenter(function() {
	 	$(this).attr('src', 'images/my-image-2.jpg');
	 });

	 $('.my-image').mouseleave(function() {
	 	$(this).attr('src', 'images/my-image-1.jpg');
	 });
})