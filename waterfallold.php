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
    
    <canvas id="cvs" width="1200" height="7000">[No canvas support]</canvas>

    <script>
        window.onload = function ()
        {
        	                
                //Draw that line
                //somehow make the x position based on the scrollwheel from css
                var c=document.getElementById("cvs");
				var ctx=c.getContext("2d"); 
				
				
				
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
                
				// create backing canvas
				var backCanvas = document.createElement('canvas');
				backCanvas.width = canvas.width;
				backCanvas.height = canvas.height;
				var backCtx = backCanvas.getContext('2d');

				backCtx.drawImage(canvas, 0,0);

				// drawLine();
				setInterval(function drawLine(){
				// Use the identity matrix while clearing the canvas
				ctx.setTransform(1, 0, 0, 1, 0, 0);
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				// ctx.fillRect(0,0,1, cvs.height);
				
				ctx.drawImage(backCanvas, 0,0);
				
				ctx.fillStyle="#FF0000";
				var element = document.getElementById('media'),
    			style = window.getComputedStyle(element);
    			var scrollPercent = .99 * element.scrollLeft / (element.scrollWidth-element.clientWidth); 	
    			myline = ctx.fillRect(scrollPercent * cvs.width,0,1, cvs.height);
				}, 1000);
        }
    </script>
  </body>
</html>