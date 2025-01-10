
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Cyberland : Universal Color Translator </title>

	<link rel="stylesheet" href="assets/css/style.css">

</head>

<body>
    <!--header-->
    <header id="site-header" class="fixed-top">
       
    </header>
    <!--//header-->

	<!--main content-->
	<div class="container"> 
		<h2>Cyberland : Universal Color Translator</h2>
		Type Valid Color: 
		<input id="input-color-name" type="text" /> 
		
		<br>
		<p id="result-container" style="margin-left:45px"> 
			<span id="display-result" style="margin-right:15px"></span> <input type="color" id="color-display-input" name="color" value="#FFFFFF" disabled> 
		</p> 

		<br> 
		<button id="btn-generate-hex" style="cursor:pointer"> 
			Generate Color 
		</button> 
		
		
	</div>
		<!-- //main content-->

    <!-- footer -->
    <footer>
 
    </footer>
 	<!-- //footer -->
	<script src="assets/js/jquery-3.3.1.min.js"></script></script> <!-- JQUERY PLUGIN -->
	<script src="assets/js/colors.js"></script> <!-- List of Colors with corresponding HEX values -->
	<script src="assets/js/functions/functions.js"></script> <!-- APPLICATON FUNCTIONS/EVENTS -->
	<script src="assets/js/main.js"></script> <!-- APPLICATON Main JS -->
</body>

</html>