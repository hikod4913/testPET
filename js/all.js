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


// 行事曆。這用法並非使用 ajax 去重複 request 更新
// 使用其他的id直接把樣式生成，再使用css 去控制 media 讓區塊分別顯示
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar-xs');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridFourDay',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 1 },
        buttonText: '1 day'
      }
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    slotMinTime : '09:00:00',
    slotMaxTime : '18:00:00',
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },

  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');

  var calendarEl = document.getElementById('calendar-sm');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridFourDay',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    views: {
      timeGridFourDay: {
        type: 'timeGrid',
        duration: { days: 4 },
        buttonText: '4 day'
      }
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    slotMinTime : '09:00:00',
    slotMaxTime : '18:00:00',
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },

  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');

  var calendarEl = document.getElementById('calendar-md');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridWeek',
    headerToolbar: {
      left: 'title',
      right: 'prev,next'
    },
    eventTimeFormat: {
      hour: 'numeric',
      meridiem: 'short',
    },
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },

  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');
  
  var calendarEl = document.getElementById('calendar-lg');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'title',
      right: 'prev,next today'
    },
    eventTimeFormat: {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    googleCalendarApiKey: 'AIzaSyAROK9ubm9f_L6VG-283sK72g6Z0ugX6gE',
    events: { googleCalendarId: 'petvogue2021@gmail.com' },
  });
  calendar.render();
  calendar.setOption('height', 'auto');
  calendar.setOption('contentHeight', 'auto');

  
});
// 行事曆



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
  // moblie menu 

  
  $window.scroll(function () {
    // back to top
    win_top = $(this).scrollTop();
    if (win_top >= win_height / 2) {
      back_top.addClass('show-back');
      donate_us.addClass('show-donate');
    }
    else {
      back_top.removeClass('show-back');
      donate_us.removeClass('show-donate');
    }
    // back to top

    // header fix
    if (win_top > header_height) {
      header.addClass('header-fix');
      header.next().css({
        'margin-top': header_height,
      })
    }
    if (win_top === 0) {
      header.removeClass('header-fix');
      header.next().css({
        'margin-top': 0
      })
    }
    // header fix
  })

  // back to top
  back_top.click(function () {
    $html_body.stop().animate({ scrollTop: 0 });
  })
  // back to top

  // 中途之家
  half_title_m.click(function () {
    half_list.toggleClass('half-list-show');
    half_list.stop().slideToggle();
    if (half_list.hasClass('half-list-show')) {
      let half_top = $window.scrollTop();
      $html_body.stop().animate({ scrollTop: half_top + 300 }, 500);
    }
    else {
      $html_body.stop().animate({ scrollTop: half_top - 300 }, 500);
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
  }, function () {
    $(this).prev().removeClass('sub-dock');
    $(this).next().removeClass('sub-dock');
  })
  // 中途之家

  // 行事曆
  // $('#calendar').fullCalendar();

  
});
