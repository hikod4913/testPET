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