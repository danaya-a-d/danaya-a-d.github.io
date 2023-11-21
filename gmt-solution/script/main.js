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

    const advantages_swiper = new Swiper('.advantages__container', {
        direction: 'horizontal',
        slidesPerView: 1.3,
        spaceBetween: 16,

        breakpoints: {
            767: {
                slidesPerView: 'auto',
                allowSlideNext: false,
                allowSlidePrev: false,
                spaceBetween: 'auto',
            },
        }
    });

    const why_us_swiper = new Swiper('.why-us__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 16,

        navigation: {
            nextEl: '.why-us__slider-button-next',
            prevEl: '.why-us__slider-button-prev',
        },

        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 16,
            },

            1023: {
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 16,
            },

            1260: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 48,
            },
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

    //скролл по центру блока логотипы
    let scrollElement = document.querySelector('.logos__list');
    if (scrollElement !== null) {
        window.addEventListener('load', () => {
            scrollElement.scrollLeft = (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
        });

    }
});
