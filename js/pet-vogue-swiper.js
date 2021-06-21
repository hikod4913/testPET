// 首頁
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


// 商品 mobile 列表 滑動選單
var productSwiper = new Swiper(".product-sort-list", {
    slidesPerView: 3.5,
    freeMode: true,
});

// 文章列表 mobile 列表 滑動選單
var articleSwiper = new Swiper(".article-sort-list", {
    slidesPerView: 3.5,
    freeMode: true,
});

// 商品內頁手機版
var productSwiper = new Swiper(".product-swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});