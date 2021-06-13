// AOS
AOS.init();
// AOS

let html_fix = document.querySelector('html');
let body_fix = document.querySelector('.body');
let loading = document.querySelector('#loading');
let progress = document.querySelector('#progress');
let prg = 0;

window.onload = function () {
    
    let time = setInterval(function () {
        body_fix.classList.add('body-fix');
        prg++;
        progress.innerHTML = prg + '%';

        if (prg >= 100) {
            window.scroll({
                top: 0
            });
            loading.classList.add('loading-out');
            body_fix.classList.remove('body-fix');
            
            clearInterval(time);

            setTimeout(function(){
                loading.remove();
            }, 3000)
        }
    }, 10)
}

