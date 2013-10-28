<!DOCTYPE html>
<html lang"en">
  <body>
  	   <meta charset="utf-8">

    <title>...</title>

    <link rel="stylesheet" type="text/css" href="./waterfall2.css" />

    <script src="./waterfall.js"></script>
	
	<!-- charts -->
	<script type="text/javascript" src="./jquery-2.0.2.min.js"></script>

	<script type="text/javascript" id="key" src="key.js"></script>
	 <div id="bigcontainer">

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
	
	
	var i = 0;

	$(document).ready(function(){

                setInterval(function() {



			        var element = document.getElementById('media');
			        style = window.getComputedStyle(element);
			        var scrollPercent = ((element.scrollLeft) / (element.scrollWidth - element.clientWidth));
			        var startPercent = (starttimes[i] / endtimes[length-1]);
        			var endPercent = (endtimes[i] / endtimes[length-1]);
        			var calculatedPercent = (scrollPercent - startPercent)/(endPercent - startPercent);
										
					//what is my current item?
					//if I pass my current item on either side, then switch
					//the problem: the time is not matched on start/end and the graph itself.
					if (calculatedPercent < 0){
						if (i != 0){
							$('script[src="' + outnames[i] + '"]').remove();
							$('<script>').attr('src', outnames[i-1]).appendTo('head');
						i = i - 1;
						console.log("moved down ", i," ", timeScrolled);
						}
					}
					if (calculatedPercent >= 1){
						if (i != length-1){
							i = i + 1;
							$('script[src="' + outnames[i-1] + '"]').remove();
							$('<script>').attr('src', outnames[i]).appendTo('head');
							console.log("moved up ", i," ", timeScrolled);

						}
					}
						
						
// 					
// 
					// for (var i=0;i<length;i++) {
// 					
// 					
					// //if the scrollbar is between any two subsequent thresholds or it is above the last threshold then swap it.
					// if (((starttimes[i] < timeScrolled) && (timeScrolled < starttimes[(i+1) % length])) || (starttimes[i] == starttimes[starttimes.length-1] && timeScrolled > starttimes[i])){
						// if (temp != i){
						// $('script[src="' + outnames[temp] + '"]').remove();
						// $('<script>').attr('src', outnames[i]).appendTo('head');
						// temp = i;
						// }
					// }
// }
					
                }, 100);
            });
		
	</script>
	


  <div class="media" id="media">

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
	echo"<div class=\"image\">
	<p>".$imagename."s</p>
	<img src=".$image.
	" height=\"300em\" style=\"max-width: 400em;\">
	<p>".round(100 * $imagename/$msecMax)."%</p>
	</div>";
	endforeach;
	?>

  </div>
</div>
<script src="./HighCharts/js/highcharts.js"></script>
<script src="./HighCharts/js/highcharts-more.js"></script>
<script src="./HighCharts/js/modules/exporting.js"></script>

<div id="container" style="min-width: 25em; background-color:blue; max-width: 75em; height: 150em; margin: auto"></div>
</div>
  </body>
</html>