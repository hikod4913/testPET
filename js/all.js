// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 滑鼠摸到停止，離開繼續
swiper.el.onmouseover = function(){
  swiper.autoplay.stop();
}
swiper.el.onmouseout = function(){
  swiper.autoplay.start();
}
// swiper

// AOS
AOS.init();
// AOS


// jQ

$(function () {
  let $window = $(window);
  let $sub_nav = $('.sub-nav');
  let win_height = $window.height();
  let win_top = 0;
  let back_top = $('.back-top');
  let header = $('.header');
  let header_height = header.height();
  let menu_ham = $('.menu-ham');
  let main_nav_m = $('.main-nav-mobile');
  let list_title = $('.list-title');
  let donate_us = $('.donate-us');

  // moblie menu 
  $window.on('resize', function () {
    main_nav.removeClass('nav-move');
    if ($window.width() < 992) {
      $sub_nav.addClass('sub-switch');
    }
    else {
      $sub_nav.removeClass('sub-switch');
      // $sub_nav.stop().slideUp();
      // $sub_nav.hover().slideDown();
      $sub_nav.removeAttr('style');
      main_nav_m.removeClass('nav-move');
      if ($('#menu-ctrl').prop('checked')) {
        menu_ham.click();
      }
    }
  })

  list_title.click(function () {
    $sub_nav.addClass('sub-switch');
    $(this).next('.sub-switch').stop().slideToggle();
    $(this).parent('li').siblings().children('.sub-switch').slideUp();
  })

  menu_ham.click(function () {
    $sub_nav.stop().delay(600).slideUp();
    main_nav_m.addClass('nav-move');
  })

  

  
  // mobile menu

  
  $window.scroll(function () {
    // back to top
    win_top = $(this).scrollTop();
    if (win_top >= win_height / 2) {
      back_top.addClass('show-back');
      donate_us.addClass('show-donate');
    }
    else{
      back_top.removeClass('show-back');
      donate_us.removeClass('show-donate');
    }

    // header fix
    if (win_top > header_height) {
        header.addClass('header-fix');
        header.next().css({
        'margin-top': header_height,
      })
    }
    else {
      header.removeClass('header-fix');
      header.next().css({
        'margin-top': 0
      })
    }
  })

  // click to top
  back_top.click(function () {
    $('html, body').stop().animate({scrollTop: 0});
  })
  

  
})
