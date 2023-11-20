window.addEventListener('DOMContentLoaded', function (event) {
    //слайдеры
    const first_screen_swiper = new Swiper('.first-screen__sliders', {
        direction: 'horizontal',
        slidesPerView: 1,
        effect: 'fade',

        navigation: {
            nextEl: '.first-screen__slider-button-next',
            prevEl: '.first-screen__slider-button-prev',
        }
    });

    //workers
    let flip_block = document.querySelectorAll('.flip-block');

    //переворот блока
    if (flip_block !== null) {
        for (let i = 0; i < flip_block.length; i++) {
            let btn = flip_block[i].querySelector('.flip-block__front');
            let back = flip_block[i].querySelector('.flip-block__back');

            btn.addEventListener('click', function (event) {
                flip_block[i].classList.toggle('active');
            });

            back.addEventListener('click', function (event) {
                if (flip_block[i].classList.contains('active')) {
                    flip_block[i].classList.toggle('active');
                }
            });

        }
    }
});
