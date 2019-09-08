
//alert("hellow world");
//import Swup from 'swup';

//const swup = new Swup(); // only this line when included with script tag

  


function HeightBackground() {
      height= $(window).height();
      $("#cover").css({
         'height': height
      })

}
/*
function Heightwidth() {
      width= $(window).width();
      $("#cover").css({
         'width': width
      })

}*/

$(document).ready(function(){
    HeightBackground();
    //Heightwidth();
    $(window).resize(function(){
        HeightBackground();
    })
  /*  $(window).resize(function(){
        Heightwidth();
    })*/

})
