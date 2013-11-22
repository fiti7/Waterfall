var imageWidth = 300;

var height = 2000;


$(".imageContainer").width($(".image").length*imageWidth);
   
$(document).ready(function() {
	$("img.hascaption").each(function() {
		$(this).wrap('<div class="figure"></div>')
		.after('<p class="caption">'+$(this).attr("title")+'</p>')
		.removeAttr('title');
	});
	$(".figure").width($(this).find('img').width());
});