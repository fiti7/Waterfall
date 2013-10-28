<!DOCTYPE html>
<html lang"en">
  <head>
   <meta charset="utf-8">
    <title>...</title>
    <link rel="stylesheet" type="text/css" href="./waterfall.css" />
    <script src="./waterfall.js"></script>
	
	<!-- charts -->
	
  </head>
  <body>
  
<div class="media", id="media">

    <div class="imageContainer">
	
	<?php
	$dir = "./Data/ScreenCapAt1379997743347/*.jpg";
	//get the list of all files with .jpg extension in the directory and save it in an array named $images
	$images = glob( $dir );
	//extract only the name of the file without the extension and save in an array named $images
	foreach( $images as $image ):
	echo "<div class=\"image\">
	<img src="
	.$image.
	" height=\"80%\" style=\"max-width: 100%;\" alt=\"\" class=\"hascaption\" title=\"000!\">
	\"<p>".substr($image, -8, 4)."ms</p>
	</div>
	";
	endforeach;
	?>
	
  </div>
</div>
  </body>
</html>