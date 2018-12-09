<!DOCTYPE html>
<html>
<head>
<link rel="shortcut icon" type="image/png" href="assets/favicon.png"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="description" content="Protect your home with GEICO Insurance Agency Portfolio homeowners insurance. Get a free quote and select the coverage options that best suit your needs.">
<title>GEICO Insurance Agency Portfolio | Homeowners Insurance Property Quote</title>
<!--[if lte IE 8]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<link href="css/styles.css" rel="stylesheet" type="text/css" />
<script src="js/root.js"></script>
<script src="js/analytics.js"></script>
<script src="js/mixpanel.js"></script>
<style>
.container .content {
	width: 100%;
}
.container .content .error-wrapper {
	height: auto;
	margin-top: 100px;
	margin-bottom: 100px;
	text-align: center;
}

.container .content .error-wrapper h1 {
	text-align: center;
	display: block;
	font-size: 40px;
}
.container .content .error-wrapper .body {
 font-size: 20px;
}
</style>
</head>
<body>

	<div class="blue-bar">
    	<div class="center">
        	<div class="right">Customer Service: <strong>@phonenumber@</strong></div>
        </div>
    </div>

    <div class="container center">
      <div class="header">
            <div class="left"><img src="assets/geico-logo.png"/></div>
            <div class="right"><span class="label">Underwritten by:</span><img src="assets/occidental-logo.png"/></div>
        </div>



	  	<div class="content">

        	<div class="error-wrapper">
                <h1>Coverage Not Available</h1>
                <div class="body">Unfortunately we currently don't offer coverage for<?php if(base64_decode($_GET["info"])){?>: <strong><?php echo base64_decode($_GET["info"]);?></strong><?php } else {echo " the entered ZIP Code";}?>.
                <p>

                Go back to <a href="https://www.geico.com/getaquote/homeowners/">Geico.com</a>.

                </div>

          </div>

      </div>

        <div class="footer">
            <div class="left">
                © 2014 Occidental Fire & Casualty Company of North Carolina  |  <a href="https://service.occidentalhomeowners.com/about.html" target="_blank">About Us</a>  |  <a href="https://service.occidentalhomeowners.com/privacy.html" target="_blank">Privacy Policy</a>  |  <a href="https://service.occidentalhomeowners.com/terms.html" target="_blank">Terms and Conditions</a>
          </div>

            <div class="right">
                <a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=quotes.occidentalhomeowners.com&lang=en" target="_blank"><img src="assets/verisign-logo.png"/></a>
            </div>
      </div>

    </div>



</body>
</html>
