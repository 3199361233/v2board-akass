
(function ($) {
  'use strict';


// Closes the Responsive Menu Menu Item Click
$('.navbar-collapse ul li a').on('click', function() {
 $('.navbar-toggle:visible').click();
});



/*---------------------
	preloader
--------------------- */


$(window).on("load", function () {
  setTimeout(function() {
      $("#loading").fadeOut(500);
  }, 1000);
  setTimeout(function() {
      $("#loading").remove();
  }, 2000);
});


/*--------------------------
Animation 
---------------------------- */
if ($(".wow").length) {
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      offset:       20,          // distance to the element when triggering the animation (default is 0)
      mobile:       false,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
}

/*--------------------------
Sticky Header
---------------------------- */

  $(window).on('scroll', function(event) {    
    var scroll = $(window).scrollTop();
    if (scroll < 110) {
        $(".site-navigation").removeClass("menu-sticky");
    } else{
        $(".site-navigation").addClass("menu-sticky");
    }
});

/*--------------------------
scrollUp
---------------------------- */

  $(window).on('scroll', function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 50) {
      $('.fixed-btm-top').addClass('reveal ');
    } else {
      $('.fixed-btm-top').removeClass('reveal');
    }
  }); 

  


$('a.smoth-scroll').on('click', function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0
    }, 2000);
    e.preventDefault();
});

/*--------------------------
Pop Up
---------------------------- */

$('.venobox').venobox();

// Testimonials

  $('.client-testimonials').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:4000,
  });


  $('.client-testimonials2').slick({
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: true,
    autoplay:true,
    autoplaySpeed:4000,
    prevArrow: '<div class="slide-arrow prev-arrow"><i class="flaticon flaticon-left-arrow"></i></div>',
    nextArrow: '<div class="slide-arrow next-arrow"><i class="flaticon flaticon-right-arrow"></i></div>',
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: false,
        dots: false,

      }

    }, {

      breakpoint:992,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      }

    }, {

      breakpoint: 350,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }

    }]
  });

  


  $('.client-list').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    arrows: false,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:'ease',
    loop:true,
    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: false,
      }

    }, {

      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false
      }

    }, {

      breakpoint: 300,
      settings: {
        slidesToShow: 1,
        dots: false
      }

    }]
  });




  /* ----------------------------------------------------------- */
  /*  Map
  /* ----------------------------------------------------------- */

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791) // styles: style_array_here

    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  var google_map_canvas = $('#map');

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, 'load', initialize);
  }


  /* ----------------------------------------------------------- */
  /*  Counter
  /* ----------------------------------------------------------- */  
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });
  
  
  
  /*   Tilt JS
  /* ----------------------------------------------------------- */


$('.service-item').tilt({
  perspective:700, 
  maxTilt: 20,
  glare: true,
  maxGlare: 0
})




})(jQuery);