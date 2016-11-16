$(document).ready(function() {
	
	//append new element
	for (i = 0; i < 100; i++) { 
  		$("body").append( "<div class='element'style='background-color: hsl(" + i * 3 + ", 50%, 100%);'></div>" );
  	console.log("element " + i + " added");
	}


	//mouse interaction	
  $('.element').mouseover(function(){
    $(this).css('background-color','#ED3E00');
  });
$('.element').mouseout(function(){
    $(this).css('background-color','#ED3E00');
$('.element').mouseleave(function(){
	$(this).css('background-color',"white");
  });
});
});