/**
 * waterfall.js
 * Used to help create a scrolling filmstrip of images
 * 
 * 
 * @author Etai Klein
 * Keynote Systems Intern
 * 
 * Last modified 12/18/13
 **/


$(document).ready(function(e) {
	//the image width dictates how much length is given to scroll in the filmstrip
    var imageWidth = $(".image").width();
    var height = 2000;
    
    $(".imageContainer").width($(".image").length*imageWidth);
  });