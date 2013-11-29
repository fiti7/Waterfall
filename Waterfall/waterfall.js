$(document).ready(function(e) {
	//the image width dictates how much length is given to scroll in the filmstrip
    var imageWidth = 418;
    var height = 2000;

    $(".imageContainer").width($(".image").length*imageWidth);
  });

//   
//$(document).ready(function() {
//	$("img.hascaption").each(function() {
//		$(this).wrap('<div class="figure"></div>')
//		.after('<p class="caption">'+$(this).attr("title")+'</p>')
//		.removeAttr('title');
//	});
//	$(".figure").width($(this).find('img').width());
//});