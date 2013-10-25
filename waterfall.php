<!DOCTYPE html>
<html lang"en">
  <head>
   <meta charset="utf-8">
    <title>...</title>
    <link rel="stylesheet" type="text/css" href="./waterfall.css" />
    <script src="./waterfall.js"></script>
	
	<!-- charts -->
	
	<script type="text/javascript" src="./RGraph/libraries/RGraph.common.core.js" ></script>
    <script type="text/javascript" src="./RGraph/libraries/RGraph.gantt.js" ></script>
    <!--[if lt IE 9]><script src="../excanvas/excanvas.js"></script><![endif]-->
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!--		
    <script type="text/javascript" src="./output.js" ></script>
	<script type="text/javascript">
	$(function Waterfall() {    $('#container').highcharts({        chart: {            type: 'bar'        },        legend: {            enabled: false        },        tooltip: {            enabled: false        },        title: {            text: 'Waterfall'        },         xAxis: {categories:['/personal/main/home/', '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.0.min.20130906121923.js', '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.1.min.20130906121923.js', '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.2.min.20130906121923.js', '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.0.nonmin.20130906121923.js', '/utag/vodafone/za-main/prod/utag.js', '/personal/framework/skins/vodacom_skins/css/vodacom.0.min.20130906121923.css', '/personal/framework/skins/vodacom_skins/css/vodacom.1.min.20130906121923.css', '/personal/framework/skins/vodacom_skins/img/vf-logo-sa.png', '/utag/tiqapp/utag.v.js?a', '/widgets.js', '/personal/framework/skins/vodacom_skins/img/bg.gif', '/personal/framework/skins/vodacom_skins/img/simplicity/sprite.png', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-652407.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-655644.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-654540.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-629220.jpg', '/personal/updatesessions', '/dc.js', '/personal/portlets/searchBox_Web.portlet?_nfpb', '/personal/PhoneSelector/AllPhonesAndManufacturers', '/personal/js/gs_portal.js?_', '/cs/groups/public/documents/document/pocm01-652409.jpg', '/personal/js/gs_suggest.js?_', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-642974.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-653756.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-655976.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/328x190_myvodacomappcomp.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-644190.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/328x190_samsunggalaxynote3.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-633982.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-632171.jpg', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-077910.jpg', '/personal/framework/skins/vodacom_skins/img/nav-down-arrow.png', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/facebooklogo_large.png', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-600122.png', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/twitterlogo_large.png', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-622634.png', '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-606207.png', '/personal/framework/skins/vodacom_skins/img/backgrounds/gradient.gif', '/personal/framework/skins/vodacom_skins/sprite/csg-50ab483ed1616_v2.png', '/personal/framework/skins/vodacom_skins/img/backgrounds/drop_shadow.gif', '/personal/framework/skins/vodacom_skins/img/backgrounds/button_open_close.gif', '/personal/framework/skins/vodacom_skins/img/simplicity/footer_bg.jpg', '/personal/main/img/backgrounds/button_open_close.gif', '/personal/framework/skins/vodacom_skins/img/hero/btn_close.png', '/personal/framework/skins/vodacom_skins/img/tabs/next.png', '/personal/framework/skins/vodacom_skins/img/tabs/previous.png', '/personal/img/search_clear_header.png', '/personal/img/search-q.png', '/personal/main/page_not_found.html', '/personal/framework/skins/vodacom_skins/img/arrowRight.png', '/personal/appmanager/personal/main?_nfpb', '/widgets.js', '/personal/js/gs_portal.js', '/personal/js/jquery.tagcloud.js', '/c/p/search?q', '/personal/updatesessions', '/personal/portlets/searchBox_Web.portlet?_nfpb', '/personal/js/gs_suggest.js', '/personal/js/gs_portal.js?_', '/personal/js/gs_suggest.js?_', '/c/p/css/gsa_portal.css', '/c/p/css/tabs.cs', '/c/p/js/xmlhttp.j', '/c/p/js/ss_portal.j', '/c/p/js/ss.j', '/search?q', '/c/p/img/buttons/redRight_v2.gif', '/common.js', '/xmlhttp.js', '/uri.js', '/cluster.js', '/personal/framework/skeletons/vodacom-skeletons/js/s_code.js', '/clicklog_compiled.js', '/click?&amp;q', '/cluster?coutput']         },                 yAxis: {            min: 0,            title: {                text: 'Waterfall'            }        },        legend: {            backgroundColor: '#FFFFFF',            reversed: true        },        plotOptions: {            series: {                stacking: 'normal'            }        },         series: [
{
    showInLegend: false, data: [353, 366, 365, 366, 366, 2, 365, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 354, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 348, 0, 0, 0, 0, 0, 0, 348, 348, 347, 347, 0, 0, 0, 0, 0, 0, 353, 352, 348, 347]}
,
{
    showInLegend: false, data: [645, 380, 372, 371, 371, 34, 380, 355, 355, 4, 3, 368, 368, 364, 364, 365, 365, 353, 9, 358, 426, 404, 356, 381, 353, 353, 354, 354, 354, 356, 354, 352, 353, 352, 353, 353, 354, 353, 352, 351, 352, 455, 352, 352, 363, 352, 352, 351, 353, 353, 353, 352, 467, 4, 353, 352, 400, 352, 354, 353, 383, 379, 352, 378, 365, 373, 374, 512, 353, 442, 432, 433, 421, 708, 432, 432, 648]}
,
{
color: 'transparent',
    showInLegend: false, data: [28, 1042, 1042, 1042, 1042, 1043, 1043, 2442, 2480, 5764, 5767, 5768, 5768, 5772, 5772, 5772, 5772, 5865, 6008, 6138, 6496, 6923, 7328, 7733, 7742, 7893, 8096, 8115, 8247, 8625, 8934, 9170, 9232, 9303, 9362, 9523, 9586, 9656, 9680, 9715, 9877, 9941, 9991, 10010, 10033, 10067, 10344, 10363, 10396, 10396, 10419, 11528, 5, 625, 5835, 5835, 6192, 6537, 6567, 6923, 6927, 7314, 7657, 7657, 7657, 7658, 7658, 9446, 9450, 9960, 9961, 9961, 9961, 9961, 12670, 14166, 14169]}
        ]    });});

	-->
  </head>
  <body>
  
<div class="media", id="media">

    <div class="imageContainer">
	
	<script type="text/php">
	<?php
	$dir = "./Data/ScreenCapAt1379997743347/*.jpg";
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
	\"<p>".round(100 * substr($image, -8, 4)/$msecMax)."% (".substr($image, -8, 4)."ms)</p>
	</div>
	";
	endforeach;
	?>
	</script>
  </div>
</div>
    
    
    <!--<canvas id="cvs" width="1200" height="7000">[No canvas support]</canvas> -->

    <script>
    
    //refreshrate for the scrollbar
    var refreshrate = 100;

    
        window.onload = function ()
        {
        	                
                //Draw that line
                //somehow make the x position based on the scrollwheel from css
                var c=document.getElementById("cvs");
				var ctx=c.getContext("2d"); 
				
				
				/**
				var gantt1 = new RGraph.Gantt('cvs', [[30, 1045, 30.8133971291866, '/personal/main/home/'],
 [1090,
  659,
  48.861911987860395,
  '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.0.min.20130816152740.js'],
 [1090,
  659,
  49.013657056145675,
  '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.1.min.20130816152740.js'],
 [1091, 43, 9.30232558139535, '/utag/vodafone/za-main/prod/utag.js'],
 [1091,
  654,
  49.08256880733945,
  '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.2.min.20130816152740.js'],
 [1091,
  662,
  48.6404833836858,
  '/personal/framework/skeletons/vodacom-skeletons/js/vodacom.0.nonmin.20130816152740.js'],
 [1091,
  663,
  48.56711915535445,
  '/personal/framework/skins/vodacom_skins/css/vodacom.0.min.20130816152740.css'],
 [2284,
  323,
  0,
  '/personal/framework/skins/vodacom_skins/css/vodacom.1.min.20130816152740.css'],
 [2556, 321, 0, '/personal/framework/skins/vodacom_skins/img/vf-logo-sa.png'],
 [5360, 3, 0, '/utag/tiqapp/utag.v.js?a'],
 [5361, 11, 54.54545454545455, '/widgets.js'],
 [5364, 335, 0, '/personal/framework/skins/vodacom_skins/img/bg.gif'],
 [5364,
  326,
  0,
  '/personal/framework/skins/vodacom_skins/img/simplicity/sprite.png'],
 [5366,
  333,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-652407.jpg'],
 [5366, 333, 0, '/cs/groups/public/documents/document/pocm01-652409.jpg'],
 [5366,
  333,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-629220.jpg'],
 [5367,
  333,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-642974.jpg'],
 [5441, 658, 50.911854103343465, '/personal/updatesessions'],
 [5561, 21, 52.38095238095238, '/dc.js'],
 [5700, 326, 0, '/personal/portlets/searchBox_Web.portlet?_nfpb'],
 [5719, 328, 0, '/personal/PhoneSelector/AllPhonesAndManufacturers'],
 [6026,
  323,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-593390.jpg'],
 [6048, 339, 0, '/personal/js/gs_portal.js?_'],
 [6387,
  322,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-644190.jpg'],
 [6986, 368, 0, '/personal/js/gs_suggest.js?_'],
 [6987,
  321,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-633982.jpg'],
 [7186,
  322,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-632171.jpg'],
 [7355,
  322,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-077910.jpg'],
 [7509,
  320,
  0,
  '/personal/framework/skins/vodacom_skins/img/nav-down-arrow.png'],
 [7555,
  322,
  0,
  '/personal/framework/skins/vodacom_skins/img/backgrounds/gradient.gif'],
 [7618,
  323,
  0,
  '/personal/framework/skins/vodacom_skins/sprite/csg-50ab483ed1616_v2.png'],
 [7677,
  327,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/facebooklogo_large.png'],
 [7833,
  322,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-600122.png'],
 [7877,
  321,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/twitterlogo_large.png'],
 [7944,
  321,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-622634.png'],
 [7947,
  322,
  0,
  '/cs/groups/public/documents/vodacom.co.za_portal_webassets/pocm01-606207.png'],
 [8005,
  321,
  0,
  '/personal/framework/skins/vodacom_skins/img/backgrounds/drop_shadow.gif'],
 [8155,
  322,
  0,
  '/personal/framework/skins/vodacom_skins/img/backgrounds/button_open_close.gif'],
 [8199,
  321,
  0,
  '/personal/framework/skins/vodacom_skins/img/simplicity/footer_bg.jpg'],
 [8266, 321, 0, '/personal/main/img/backgrounds/button_open_close.gif'],
 [8269,
  322,
  0,
  '/personal/framework/skins/vodacom_skins/img/hero/btn_close.png'],
 [8326, 321, 0, '/personal/framework/skins/vodacom_skins/img/tabs/next.png'],
 [8477,
  320,
  0,
  '/personal/framework/skins/vodacom_skins/img/tabs/previous.png'],
 [8520, 323, 0, '/personal/img/search-q.png'],
 [8587, 323, 0, '/personal/img/search_clear_header.png'],
 [8591, 324, 0, '/personal/main/page_not_found.html'],
 [9665, 321, 0, '/personal/framework/skins/vodacom_skins/img/arrowRight.png'],
 [5, 490, 0, '/personal/appmanager/personal/main?_nfpb'],
 [6803, 326, 0, '/personal/js/gs_portal.js'],
 [6803, 326, 0, '/personal/js/jquery.tagcloud.js'],
 [7133, 722, 43.767313019390585, '/c/p/search?q'],
 [7450, 321, 0, '/personal/updatesessions'],
 [7480, 328, 0, '/personal/portlets/searchBox_Web.portlet?_nfpb'],
 [7810, 323, 0, '/personal/js/gs_suggest.js'],
 [7813, 359, 0, '/personal/js/gs_portal.js?_'],
 [8174, 350, 0, '/personal/js/gs_suggest.js?_'],
 [8511, 322, 0, '/c/p/css/gsa_portal.css'],
 [8511, 673, 47.10252600297177, '/c/p/css/tabs.cs'],
 [8511, 668, 47.455089820359284, '/c/p/js/xmlhttp.j'],
 [8512, 654, 48.62385321100918, '/c/p/js/ss_portal.j'],
 [8512, 656, 48.47560975609756, '/c/p/js/ss.j'],
 [10143, 509, 0, '/search?q'],
 [10146, 321, 0, '/c/p/img/buttons/redRight_v2.gif'],
 [10654, 412, 0, '/common.js'],
 [10654, 403, 0, '/xmlhttp.js'],
 [10655, 404, 0, '/uri.js'],
 [10655, 403, 0, '/cluster.js'],
 [10655,
  969,
  33.333333333333336,
  '/personal/framework/skeletons/vodacom-skeletons/js/s_code.js'],
 [12947, 734, 43.32425068119891, '/clicklog_compiled.js'],
 [14330, 726, 43.66391184573003, '/click?&amp;q'],
                                                  [14333, 976, 32.377049180327866, '/cluster?coutput']])
                                                 

                .Set('xmax', 15309 )
                .Set('labels', ['0.2', '0.4', '0.6', '0.8'])
                .Draw();
                **/
				// create backup canvas

				var backCanvas = document.createElement('canvas');
				backCanvas.width = canvas.width;
				backCanvas.height = canvas.height;
				var backCtx = backCanvas.getContext('2d');

				backCtx.drawImage(canvas, 0,0);

				// function to draw the scroll line every x milliseconds );
				setInterval(function drawLine(){
				// Use the identity matrix while clearing the canvas
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				
				ctx.drawImage(backCanvas, 0,0);
				
				
				ctx.fillStyle="#FF0000";
				var element = document.getElementById('media'),
    			style = window.getComputedStyle(element);
    			var scrollPercent = .99 * element.scrollLeft / (element.scrollWidth-element.clientWidth); 	
    			myline = ctx.fillRect(scrollPercent * cvs.width,0,1, cvs.height);
				}, 
				//my refresh rate
				refreshrate);
        }
    </script>
    
<script src="../../js/highcharts.js"></script>
<script src="../../js/highcharts-more.js"></script>
<script src="../../js/modules/exporting.js"></script>

<div id="container" style="min-width: 1010px; max-width: 1500px; height: 2000px; margin: 0 auto"></div>

  </body>
</html>