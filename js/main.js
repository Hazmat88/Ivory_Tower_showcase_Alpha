
//alert("hellow world");

//  ****** LOADING FUNCTIONS SECTIONS *********
navbar();
Paralaxeffect();
//S0animation();

// ********** TEST SWUP **********
//const swup = new Swup(); // only this line when included with script tag
//function TrySwup(){
  //const swup = new Swup();
//}

// ******* NAV BEAHVIOUR ****************
function navbar(){
  let burger = document.getElementById('burger'),
  nav    = document.getElementById('main-nav'),

  // TARGET NAV LINK 1BY1 THINK POSSIBLE TO TURN INTO LOOP
  li1 = document.getElementById('li1');
  li2 = document.getElementById('li2');
  li3 = document.getElementById('li3');
  li4 = document.getElementById('li4');

// BURGER ELEMENTS TURN TO CROSS WHEN CLICK
  burger.addEventListener('click', function(e){
  this.classList.toggle('is-open');
  nav.classList.toggle('is-open');
  });

// CLOSE NAV & TURN BUGER/CROSS ICON WHEN CLICK NAV LINK
  [li1, li2,li3,li4].map(element => element.addEventListener('click',function(e){ nav.classList.toggle('is-open');
  burger.classList.toggle('is-open');
  }));

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


// ****** EFFECTS & ANIMATIONS ******
// ----- PARALAX ----------------
function Paralaxeffect(){
    $("#container").mousemove(function(e) {
    parallaxIt(e, ".img_m_1", -25);
    parallaxIt(e, ".img_m_2", -10);
    parallaxIt(e, ".img_m_3", -20);
    parallaxIt(e, ".img_m_4", -15);
  //  parallaxIt(e, ".titleBT", -30);
    parallaxIt(e, "#imgparalax", -10);

    });

    function parallaxIt(e, target, movement) {
    var $this = $("#container");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
    }
}

// ----- ANIMATIONS ----------------

/*function S0animation(){

  var $isAnimatedSecond = $('.second .is-animated'),
      $isAnimatedSecondSingle = $('.second .is-animated__single');

  /* this code is part of the onLeave callback
  if( index == 1 && nextIndex == 2 ) {
      $isAnimatedSecond.addClass('animated fadeInUpBig');
      $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
      $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
      $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
      $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
  }
}*/
