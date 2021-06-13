let body_fix = document.querySelector('.body');
let loading = document.querySelector('#loading');
let progress = document.querySelector('#progress');

document.addEventListener('DOMContentLoaded', function () {
    body_fix.classList.add('body-fix');
    let imgs = document.querySelectorAll('img'),
        show = 0,
        num = 0;
    let all = imgs.length;
    [].slice.call(imgs).forEach(function (element, index) {
        element.addEventListener('load', function () {
            num++;
            show = Math.floor(100 * num / all);
            console.log(show);
            progress.textContent = show + '%';
        })
        element.addEventListener('error', function () {
            num++;
            show = Math.floor(100 * num / all);
            console.log(show);
            progress.textContent = show + '%';
        })
    })
})
window.onload = function () {
    loading.classList.add('loading-out');
    setTimeout(function () {
        body_fix.classList.remove('body-fix');
        AOS.init();
        remove_opacity();

    }, 1000);
    
}

function remove_opacity() {
    let about_info = document.querySelector('.about-info');
    if (!about_info.classList.contains('about-info-block')) {
        about_info.classList.add('about-info-block');
    }
}