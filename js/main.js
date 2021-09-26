  (function ($) {

      'use strict';

      $(window).scroll(function () {

          var navber = $('.navbar');

          if ($(window).scrollTop() >= navber.height()) {

              navber.addClass('scrolled');


          } else {


              navber.removeClass('scrolled');
          }


      });



  });

  $('.tab-switch li').click(function () {
      
  $(this).addClass('selected').siblings().removeClass('selected');
      $('.tab-section .tabe-content > div').hide();
     $('.tab-section .imagessection > div').hide();

      $('.'+$(this).data('class')).show();
      
  });
  


