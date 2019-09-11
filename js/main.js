
//alert("hellow world");

//  ****** LOADING FUNCTIONS SECTIONS *********
navbar();

// ********** TEST SWUP **********
//const swup = new Swup(); // only this line when included with script tag


// ******* NAV BEAHVIOUR ****************
function navbar(){
  let burger = document.getElementById('burger'),
  nav    = document.getElementById('main-nav'),
  slowmo = document.getElementById('slowmo');

  burger.addEventListener('click', function(e){
  this.classList.toggle('is-open');
  nav.classList.toggle('is-open');
  });

  /* Onload demo - dirty timeout */
  let clickEvent = new Event('click');

  window.addEventListener('load', function(e) {
  slowmo.dispatchEvent(clickEvent);
  burger.dispatchEvent(clickEvent);

  setTimeout(function(){
  burger.dispatchEvent(clickEvent);

  setTimeout(function(){
    slowmo.dispatchEvent(clickEvent);
  }, 3500);
  }, 5500);
  });
}

// ************* HOME BACKGROUND *********
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
