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
	
	
	<!--function to replace the waterfalls at a given scroll position
	var outnames - the names of the files containing the waterfalls
	scrollPercent - Percent of the image container scrolled through
	starttimes - the time each waterfall starts
	endtimes - the time each waterfall ends
	-->
	<script type="text/javascript" >
	var length = outnames.length;
	var index;
	
	var path = outnames[0];
	document.writeln("<script type=\"text/javascript\" src="+path+"\>\</script\>");
	
	
	var temp = 0;

	$(document).ready(function(){

                setInterval(function() {
					
					//rounding is just for easier debugging
					
					var chart = $('#container').highcharts();
        			var element = document.getElementById('media');
        			style = window.getComputedStyle(element);
        			var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));
					
					var timeScrolled = Math.round(scrollPercent * endtimes[length-1]);
					console.log("time  +" + timeScrolled + "+"+ scrollPercent);

					for (var i=0;i<length;i++) {
					
					
					//if the scrollbar is between any two subsequent thresholds or it is above the last threshold then swap it.
					if (((starttimes[i] < timeScrolled) && (timeScrolled < starttimes[(i+1) % length])) || (starttimes[i] == starttimes[starttimes.length-1] && timeScrolled > starttimes[i])){
						if (temp != i){
						$('script[src="' + outnames[temp] + '"]').remove();
						$('<script>').attr('src', outnames[i]).appendTo('head');
						temp = i;
						}
					}
}
					
                }, 1000);
            });
		
	</script>
	
  </head>
  <body>
  <div class="media", id="media">

    <div class="imageContainer">
	
	<?php
	$dir = "./Data/ScreenCapAt1381654112396/*.jpg";
	//get the list of all files with .jpg extension in the directory and save it in an array named $images
	$images = glob( $dir );
	//extract only the name of the file without the extension and save in an array named $images
	
	//sort the images by time. The string manipulation is necessary to get the title of the file
	function cmp($a, $b){
		$explodeda = explode("/", $a);
		$explodedb = explode("/", $b);
		$newa = substr(end($explodeda), 0, -4);
		$newb = substr(end($explodedb), 0, -4);
    if ($newa == $newb) {
        return 0;
    }
    return ($newa) < ($newb) ? -1 : 1;
	}
	
	usort($images, "cmp");
	
	//Show an image for each increment% of the page loading
	$increment = 10;
	
	
	//get the total load time
	function getmax($images){
	$exploded = explode("/", end($images));
	$msecMax = substr(end($exploded), 0, -4);
	reset($images);
	if ($msecMax > 0){
	return $msecMax;
	}
	else {
	return 1;
	}
	}
	
	$msecMax = getmax($images);
	
	
	// use only the images whose timestamp are closest to each percentila
	function reduce($increment, $images){
	
	//what is my max?
	$msecMax = getmax($images);
	
	//create keyvalue pairs of [percent complete => %image]
	$newimages = array();
	foreach( $images as $image ):
		$exploded = explode("/", $image);
		$imagename = substr(end($exploded), 0, -4);
		$newimages[(100 * ($imagename)/$msecMax)] = $image;
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
	$exploded = explode("/", $image);
	$imagename = substr(end($exploded), 0, -4);
	echo "<div class=\"image\">
	<img src="
	.$image.
	" height=\"80%\" style=\"max-width: 100%;\" alt=\"\" class=\"hascaption\" title=\"000!\">
	<p>".round(100 * $imagename/$msecMax)."% (".$imagename."s)</p>
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