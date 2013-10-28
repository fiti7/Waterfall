<!DOCTYPE html>
<html lang"en">
  <head>
   <meta charset="utf-8">
    <title>...</title>

    <link rel="stylesheet" type="text/css" href="./waterfall.css" />

    <script src="./waterfall.js"></script>
	
	<!-- charts -->
	<script type="text/javascript" src="./jquery-2.0.2.min.js"></script>

	<script type="text/javascript" id="key" src="key.js"></script>
	
	
	<input type='button' id='nextwaterfall' value='next'>

	<script type="text/javascript" >
	var length = outnames.length;
	console.log(outnames);
	var index;
	
	//foreach item in outnames, make a hidden div
	// outnames.forEach(function(element, index, array) {
	// var id = "chart"+index
	// document.writeln("<div id="+id+" style=\"display:'none'\">\<script type=\"text/javascript\" src="+path+"\>\</script\>\</div>");
	// });
	
	var path = outnames[0];
	document.writeln("<script type=\"text/javascript\" src="+path+"\>\</script\>");
	
	//show only the current div
	index = 0;
   	nextwaterfall.onclick = function() {
    $('script[src="' + outnames[index] + '"]').remove();
    index = (index + 1) % length;
    $('<script>').attr('src', outnames[index]).appendTo('head');
	}	
		
	</script>
	
  </head>
  <body>
  <div class="media", id="media">

    <div class="imageContainer">
	
	<?php
	$dir = "./Data/ScreenCapAt1381319303931/*.jpg";
	//get the list of all files with .jpg extension in the directory and save it in an array named $images
	$images = glob( $dir );
	//extract only the name of the file without the extension and save in an array named $images
	
	//Show an image for each increment% of the page loading
	$increment = 10;
	
	
	//get the total load time
	function getmax($images){
	$msecMax = substr(end($images), -8, 4);
	reset($images);
	return $msecMax;
	}
	
	$msecMax = getmax($images);
	
	
	// use only the images whose timestamp are closest to each percentila
	function reduce($increment, $images){
	
	//what is my max?
	$msecMax = getmax($images);
	
	//create keyvalue pairs of [percent complete => %image]
	$newimages = array();
	foreach( $images as $image ):
		$newimages[(100 * (substr($image, -8, 4)/$msecMax))] = $image;
	endforeach;
	
	$percentages = array_keys($newimages);		
	
	//my new array
	$n = array();
	//my target percentages
	$a = (range(0, 100, $increment));
	//for each target percentage
	foreach($a as $i):
		$temp = 0;
		//find the closest image percentage
		foreach($percentages as $p):
			if (($p <= $i) && ($p > $temp)):
				$temp = $p;
			endif;	
		endforeach;
		//dump that in my new array
		$n[$i] = $newimages[$temp];
	endforeach;
	return $n;
	}
	
	$reducedimages = reduce($increment, $images);
	
	//output my images to the html
	foreach( $reducedimages as $image ):
	echo "<div class=\"image\">
	<img src="
	.$image.
	" height=\"80%\" style=\"max-width: 100%;\" alt=\"\" class=\"hascaption\" title=\"000!\">
	\"<p>".round(100 * substr($image, -8, 4)/$msecMax)."% (".(substr($image, -8, 4)/100.0)."s)</p>
	</div>
	";
	endforeach;
	?>

  </div>
</div>
    <script src="./HighCharts/js/highcharts.js"></script>
<script src="./HighCharts/js/highcharts-more.js"></script>
<script src="./HighCharts/js/modules/exporting.js"></script>

<div id="container" style="min-width: 1010px; max-width: 1500px; height: 2000px; margin: 0 auto"></div>


  </body>
</html>