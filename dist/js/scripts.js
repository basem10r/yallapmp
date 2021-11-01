$(document).ready(function () {

  $(window).on('load', function () {
    $("#loader").fadeOut(1000);
  });

  $('body').scrollspy({ target: '#navbar', offset: 200 });
  //  gallery 

  var owl = $("#owl-projects");
  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    center: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      481: {
        items: 2,
        margin: 30,
        stagePadding: 6,
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 2,
        margin: 35,

      },
      1440: {
        items: 3,
        margin: 35,

      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-careers");
  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    center: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      481: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      768: {
        items: 2,
        margin: 20,
      },
      992: {
        items: 1,
        margin: 35,

      },
      1440: {
        items: 2,
        margin: 35,

      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });

  var owl = $("#owl-slider");
  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    center: false,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      481: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      768: {
        items: 1,
        margin: 20,
      },
      992: {
        items: 1,
        margin: 35,

      },
      1440: {
        items: 1,
        margin: 35,

      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider3");
  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    center: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      481: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      768: {
        items: 1,
        margin: 20,
      },
      992: {
        items: 1,
        margin: 35,

      },
      1440: {
        items: 1,
        margin: 35,

      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });
  var owl = $("#owl-slider4");
  owl.owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    center: false,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      481: {
        items: 1,
        margin: 30,
        stagePadding: 6,
      },
      768: {
        items: 1,
        margin: 20,
      },
      992: {
        items: 1,
        margin: 35,

      },
      1440: {
        items: 2,
        margin: 35,

      },
    },
    // itemsMobile disabled - inherit from itemsTablet option
  });

  $('.popup-youtube').magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $(window).on('scroll', function (event) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 120) {
      $('.navbar').addClass('affix');
    } else {
      $('.navbar').removeClass('affix');
    }
  });



  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title');
      }
    }
  });




  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 100,          // distance to the element when triggering the animation (default is 0)
      mobile: false,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      scrollContainer: null, // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

  $(window).scroll(function () {
    if ($('.counter').visible(true)) {
      $('.counter').countTo('start');
    } else {
      $('.counter').countTo('stop');
    }
  });

});




