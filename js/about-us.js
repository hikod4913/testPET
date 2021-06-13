// AOS
AOS.init();
// AOS

let html_fix = document.querySelector('html');
let body_fix = document.querySelector('.body');
let loading = document.querySelector('#loading');
let progress = document.querySelector('#progress');
let prg = 0;
let about_info = document.querySelector('.about-info');


window.onload = function () {
    let time = setInterval(function () {
        body_fix.classList.add('body-fix');
        prg++;
        if (prg >= 100) {
            prg = 100;
            progress.innerHTML = prg + '%';
            window.scroll({
                top: 0
            });
            loading.classList.add('loading-out');
            about_info.classList.add('about-info-block');
            clearInterval(time);

            setTimeout(function(){
                loading.remove();
                window.scroll({
                    top: 'auto'
                });
                body_fix.classList.remove('body-fix');
                
            }, 2000)
        }
        else {
            progress.innerHTML = prg + '%';
        }
    }, 10)
}

