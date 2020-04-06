(function ($) {
  "use strict";

  $('#datepicker').datepicker();

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(document).ready(function () {
    $('select').niceSelect();
  });

  var phone = $('.input-phone');
  if (phone.length) {
    phone.intlInputPhone();
  }

  var deliveries = $('.deliveries_slider');
  if (deliveries.length) {
    deliveries.owlCarousel({
      items: 3,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      smartSpeed: 2000,
      margin: 30,
      navText: [
        '<i class="flaticon-left-arrow"></i>',
        '<i class="flaticon-right-arrow"></i>'
      ],
      responsive: {
        0: {
          nav: false,
          items: 1,
        },
        768: {
          nav: true,
          items: 2,
        },
        992: {
          nav: true,
          items: 3,
        }
      }
    });
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

	$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '12666160608',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: 'YOUR ACCESS ID',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});

  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });

  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


}(jQuery));