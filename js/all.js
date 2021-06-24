let body_fix = document.querySelector('body');
let loading = document.querySelector('#loading');
let progress = document.querySelector('#progress');

document.addEventListener('DOMContentLoaded', function () {
    body_fix.classList.add('body-fix');
    let imgs = document.querySelectorAll('img'),
        show = 0,
        num = 0;
    let all_imgs = imgs.length;
    [].slice.call(imgs).forEach(function (element, index) {
        element.addEventListener('load', function () {
            num++;
            show = Math.floor(100 * num / all_imgs);
            progress.textContent = show + '%';
        })
        element.addEventListener('error', function () {
            num++;
            show = Math.floor(100 * num / all_imgs);
            progress.textContent = show + '%';
        })
    })
})
window.onload = function () {
    loading.classList.add('loading-out');
    setTimeout(function () {
        body_fix.classList.remove('body-fix');
    }, 500);
    
}


let small_pic = document.querySelectorAll('.small-pic');
for (let i = 0; i < small_pic.length; i++){
    small_pic[i].onmouseover = function(){
        let pic_src = this.getAttribute('src');
        let small_img = this.querySelector('.small-pic');

        let show_pic = document.querySelector('#show-pic');
        show_pic.setAttribute('src', pic_src);
    }
}
