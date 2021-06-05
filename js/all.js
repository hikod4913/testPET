// AOS
AOS.init();
// AOS

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




// jQ

$(function () {
  let $window = $(window);
  let $html_body = $('html, body');
  let $body = $('body');
  let $sub_nav = $('.sub-nav');
  let win_height = $window.height();
  let win_top = 0;
  let back_top = $('.back-top');
  let header = $('.header');
  let header_height = header.height();
  let menu_ham = $('.menu-ham');
  let main_nav_m = $('.main-nav-mobile');
  let close_nav = $('.close-nav-m');
  let list_title = $('.list-title');
  let donate_us = $('.donate-us');
  let half_title_m = $('.half-title-m');
  let half_list = $('.half-list');
  let half_item = $('.half-item');

  // moblie menu 
  $window.on('resize', function () {
    main_nav_m.removeClass('nav-move');
    if ($window.width() < 992) {
      $sub_nav.addClass('sub-switch');
    }
    else {
      $sub_nav.removeClass('sub-switch');
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
    $(this).parent('li').siblings().children('.sub-switch').stop().slideUp();
  })

  menu_ham.click(function () {
    main_nav_m.addClass('nav-move');
    $body.toggleClass('body-fix');
    close_nav.toggleClass('close-active');
    if ($('#menu-ctrl').prop('checked')) {
      $sub_nav.stop().delay(600).slideUp();
    }
  })

  close_nav.click(function (e) {
    e.stopPropagation();
    menu_ham.click();
  })

  
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
    $html_body.stop().animate({scrollTop: 0});
  })

  half_title_m.click(function () {
    half_list.toggleClass('half-list-show');
    half_list.slideToggle();
    if (half_list.hasClass('half-list-show')) {
      let half_top = $window.scrollTop();
      $html_body.stop().animate({ scrollTop: half_top + 250 }, 500);
    }
    else {
      $html_body.stop().animate({ scrollTop: half_top - 250 }, 500);
    }
    
  })

  $window.on('resize', function () {
    if ($window.width() > 575) {
      half_list.removeAttr('style');
    }
  })

  half_item.hover(function () {
    $(this).prev().addClass('sub-dock');
    $(this).next().addClass('sub-dock');
  },function () {
    $(this).prev().removeClass('sub-dock');
    $(this).next().removeClass('sub-dock');
  })
  
  

  
})
