$(document).ready(function(){ 

  /* -------------------------------------------
  Code to run sequentially
  ----------------------------------------------- */
  drawGridObjects();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
    drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
    drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
    drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  drawRandomObject();
  
var now = new Date();
var second = now.getSeconds();
console.log(second);


drawGridObjects();
setInterval(function(){ 
rotateGridObjects(second);
},1000);

function rotateGridObjects(){
    var now = new Date();
    var second = now.getSeconds();
    console.log(second);
    $('.element').css('transform','rotate(' + second*6 + 'deg)');
  }
  //drawRandomObject();

  
  //mouse interaction
  $('.element').mouseover(function(){
    $(this).css('background-color','white');
  });
  $('.element').mouseout(function(){
    $(this).css('background-color','white');
  });
   $('.element').mouseleave(function(){
    $(this).css('background-color','#F3B3A9');
  });
  $('.element').click(function(){
    $(this).fadeOut('fast');
  });




  /* -------------------------------------------
  Custom functions used above are defined below
  ----------------------------------------------- */
  function drawGridObjects(w){
    //append new element 1000 times (50*20=1000)
    for (j = 0; j < 50; j++){
      for (i = 0; i < 20; i++) { 
        $("body").append( "<div class='element' style='left:" + i*5 + "vw; top:" + j*50 + "px; width:" + w*10 + "px'></div>" );
        // console.log("element " + j + ", " + i + " added");
      }
    }
  }

  function drawRandomObject(){
    //store random values between 0 to 100, to rx and ry
    var rx = Math.floor(Math.random()*100);
    var ry = Math.floor(Math.random()*100);
    var rw = Math.floor(Math.random()*100); //random width
    var rh = Math.floor(Math.random()*100); //random height
    var color = "#000";
    if (ry < 50) {
      //ry is smaller than 50 = above the half
      color = "white";
    }
    else if (rx < 25){
      //square is on the left, below the half
      color = "white";
    }
    else if (rx < 75){
      //square is on the left, below the half
      color = "white";
    }
    else {
      //square is on the right, below the half
      color = "white";
    }
    console.log("rx: " + rx + " ry: " + ry);
    $("body").append( "<div class='element random' style='left:" + rx + "vw; top:" + ry + "vh; background-color:" + color + "; width:" + rw + "px; height:" + rh + "px;'></div>" );
  }
});