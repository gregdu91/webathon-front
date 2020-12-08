"use strict";

/*
Template Name: Hostera - Web Hosting and Domain PSD Template
Template URI: http://pixner.net/hostera/
Description:
Author: pixelaxis
Author URI: https: //themeforest.net/user/pixelaxis
Version: 1.0.0

----------js Index------------

1.menu js 
2.price js 
3. select js
4. Scroll Bar Active 
5. Cart Active 
6.wow actvie
7.preloader active
8. Slcik active
9.Sticky Header
10. Scroll Up
11.counter 
12.magnify

*/
!function ($) {
  'use strict';

  jQuery(document).on("ready", function () {
    if ($(window).width() < 991.98) {
      $(".menu-item-has-children > a").on("click", function () {
        var element = $(this).parent("li");

        if (element.hasClass("open")) {
          element.removeClass("open");
          element.find("li").removeClass("open");
          element.find("ul").slideUp(500);
          element.find(".rt-mega-menu").slideUp(500);
          element.find(".c-mega-menu").slideUp(500);
        } else {
          element.addClass("open");
          element.children("ul").slideDown(500);
          element.children(".rt-mega-menu").slideDown(500);
          element.children(".c-mega-menu").slideDown(500);
          element.siblings("li").children("ul").slideUp();
          element.siblings("li").removeClass("open");
          element.siblings("li").find("li").removeClass("open");
          element.siblings("li").find("ul").slideUp();
        }
      });
    }

    $(".price-list-parent >li").on("mouseover", function () {
      $(".price-list-parent > li").removeClass("active");
      $(this).addClass("active");
    }); // select active 

    $('.rt-selectactive').select2({
      minimumResultsForSearch: Infinity
    });
    $(".rt-sidnav, .rt-cart-box, .cart-products").overlayScrollbars({//className: "os-theme-light",
    });
    $(".open-cart-opt").on("click", function () {
      $(".rt-cart-box, .cart-overlay").addClass("active");
      $("body").addClass("cartboxopen");
    });
    $(".cartbox-close, .cart-overlay").on("click", function () {
      $(".rt-cart-box, .cart-overlay").removeClass("active");
      $("body").removeClass("cartboxopen");
    });
    $(".main-menu ul li").on("click", function () {
      $(".main-menu ul li").removeClass("active");
      $(this).addClass("active");
    }); // mobile menu click

    $(".menu-click").on("click", function () {
      $(".main-menu").toggleClass('active-mobile-menu');
      $(".rt-mobile-menu-overlay").addClass("active");
      return false;
    });
    $(".rt-mobile-menu-close, .rt-mobile-menu-overlay").on("click", function () {
      $(".main-menu").removeClass('active-mobile-menu');
      $(".rt-mobile-menu-overlay").removeClass("active");
      return false;
    });
    $('.open-creatac').on("click", function () {
      $(".rt-modal-input.two , .rt-modal-headr.two").addClass("show-cac");
      $(".rt-modal-input.one, .rt-modal-headr.one").addClass("hide-cac");
    });

    if ($('.wow').length) {
      var wow = new WOW({
        boxClass: 'wow',
        // animated element css class (default is wow)
        animateClass: 'animated',
        // animation css class (default is animated)
        offset: 0,
        // distance to the element when triggering the animation (default is 0)
        mobile: false,
        // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)

      });
      wow.init();
    }

    if ($(".rt-preloder").length > 0) {
      jQuery(window).on("load", function () {
        jQuery(".rt-preloder").fadeOut(100);
      });
    }

    $('[data-toggle="tooltip"]').tooltip();

    if ($(".active-price").length > 0) {
      $('.active-price').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        //autoplay: true,
        arrows: true,
        dots: false,
        responsive: [{
          breakpoint: 980,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 479,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }

    if ($(".testi_active").length > 0) {
      $('.testi_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        arrows: false,
        dots: true
      });
    } // sticky function


    function stickyHeader() {
      var mainheader = $('.rt-sticky'),
          height = mainheader.outerHeight(),
          scroll = $(document).scrollTop();
      $(window).on('load', function () {
        if ($(document).scrollTop() > height) {
          if (mainheader.hasClass('rt-sticky-active')) {
            mainheader.removeClass('rt-sticky-active');
          } else {
            mainheader.addClass('rt-sticky-active');
          }
        }
      });
      $(window).on('scroll', function () {
        var scrolled = $(document).scrollTop(),
            header = $('.rt-sticky-active');

        if (scrolled > scroll) {
          header.addClass('sticky');
        } else {
          header.removeClass('sticky');
        }

        if (scrolled === 0) {
          mainheader.removeClass('rt-sticky-active');
        } else {
          mainheader.addClass('rt-sticky-active');
        }

        scroll = $(document).scrollTop();
      });
    }

    if ($(window).width() > 991.98) {
      stickyHeader();
    }

    $.scrollUp({
      scrollText: '<i class="flaticon-up"></i>',
      scrollSpeed: 1500,
      animation: 'slide',
      easingType: 'easeInQuint'
    });
    $('.counter').counterUp({
      delay: 10,
      time: 5000
    });
    $('.playVideo').magnificPopup({
      type: 'iframe',
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
    $('.img-popup').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
}(jQuery);