
//alert("hellow world");
//import Swup from 'swup';

//const swup = new Swup(); // only this line when included with script tag

  navbar();





function navbar(){
  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

}


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
