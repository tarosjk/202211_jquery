$(document).ready(function(){

  // slick
  $('#slick').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    // fade: true,
    dots: true,
    slidesToShow: 2,
    responsive: [
      // ~768
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          fade: true,
        },
      }
    ],
  })

});


// AOS
AOS.init();