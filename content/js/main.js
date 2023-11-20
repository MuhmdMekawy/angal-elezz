$(document).ready(function () {
  $('.navbar .content .close-icon').click(function () {
    $(this).hide()
    $('.navbar .content').css({
      'height': '0',
      'padding': '0'
    })
  });
  $('.upper-bar .wrapper .mobile-navbar').click(function () {
    $('.navbar .content .close-icon').show(500)
    $('.navbar .content').css({
      'height': '100vh',
      'padding': '80px 20px'
    })
  });
  $('.homepage-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    rtl:true,
    fluidSpeed: true,
    smartSpeed: 3000,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.supporters-slider').owlCarousel({
    loop: true,
    margin:20,
    nav: true,
    rtl:true,
    fluidSpeed: true,
    smartSpeed: 3000,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
  new WOW().init();

})
