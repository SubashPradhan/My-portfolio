<?php 
$errors = '';
$myemail = 'suprowilde5@gmail.com';//<-----Put Your email address here.
if(empty($_POST['message']))
{
	$errors .= "\n Error: all fields are required. You need to generate positive words.";
}
$name = $_POST['name']; 
$email_address = $_POST['email']; 
$message = $_POST['message'];
$stickers=$_POST['message_1'];
if( empty($errors))
{
	$to = $myemail;
	$email_subject = "Thank you : $name for contacting draw-like-masters by elwebman.nl";
	$email_body = "A few words on how we operate. ".	// this is the content of the email
	" <html>
	<head>
	<title>draw-like-masters by elwebman.nl</title>
	<style>
	p{
		font-size=20px;
		font-weight: 700;
	}
	h6
	{
		font-size=26px;
		font-weight: 900;
	}
	</style>
	</head>
	<body>
	<br>
	<br>
	<p>Hello \n $name, </p>
	<p>Thank you for contacting us.</p>
	<br>
	<br>
	<p>We have taken your interest into account.</p>
	<p>We are preparing the stickers.</p>
	<br>
	<br>
	<p>You have made the following comment on our website.</p>
	<br>
	<h1>\n $message</h1>
	<p>You have expressed interest in the following sticker:</p>
	<h1>\n $stickers</h1>
	<p>Delivery will take more or less 10 days depending on where you are located.</p>
	<br>
	<br>
	<p>You have ordered a total of \n $quantity sticker(s).</p>
	<br>
	<p> <a href=\"http://www.stickers.elwebman.nl/pwg/\">Stickers by elwebman.nl </a> is available 24 hours a day.</p>
	<p>If your email address is not \n $email_address, then please delete this email.</p>
	<p>Thank you for contacting stickers by elwebman.nl</p>
	<p>Check us on <a href=\"https://github.com/alexolivet/\">Github</a>.</p>   
	</body>
	</html>
	"; 
	// To send HTML mail, the Content-type header must be set
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
// reply address
	$headers .= "Reply-To: $email_address";
	$headers.= "cc: " . $myemail. " <" . $myemail . ">" . "\r\n" ;
	//first mail instance for visitor
	mail($to,$email_subject,$email_body,$headers);
	//second mail instance for webmaster
	//this means 2 emails are sent
	mail($to1,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: http://stickers.elwebman.nl/contact-form-thank-you.html');
} 
?>
<!-- This page is displayed only if there is some error -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
	<!-- main css style sheet-->
	<link rel="stylesheet" href="http://draw-like-masters.elwebman.nl/css/main_style.css">
	 <!-- font awesome declaration-->
  <link rel='stylesheet prefetch' href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'>
</head>
<body>
	<div class="wrapper">
		<div class="container part3">

			<div id="error">
				<?php
				echo nl2br($errors);
				?>
				<p>Oops!..something went wrong.</p>
				<p>Please fill in all fields and then click send.</p>
				<p> Go back to  <a href="http://draw-like-masters.elwebman.nl/">Draw-like-masters by elwebman.nl</a>.</p>
				<div class="footer-icons">
					<a href="https://www.facebook.com/elwebmanamsterdam/"><i class="fa fa-facebook"></i></a>
					<a href="https://www.linkedin.com/in/alexolivet"><i class="fa fa-linkedin"></i></a>
					<a href="https://github.com/alexolivet/final_project"><i class="fa fa-github"></i></a>
				</div>
				<p class="footer-company-name">elwebman.nl &copy; 2017</p>
			</div>
			<div class="cover-holder">
				<img src="http://positivegenerator.elwebman.nl/images/sun.png" alt="positive word generator">
			</div>
		</div>
	</div>
</body>
</html>