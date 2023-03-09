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

// AOS.init();
// ↓

// HTML、その他ファイルのロードが完了後にAOS起動
$(window).on('load', function(){
  // AOS
  AOS.init();
})

document.addEventListener('aos:in', function() {
  alert('アニメーションしました')
})

// Fancybox
Fancybox.bind("[data-fancybox]", {
  // Your custom options
  Thumbs: {
    type: "classic",
  },
});