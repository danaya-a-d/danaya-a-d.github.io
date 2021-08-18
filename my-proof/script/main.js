window.addEventListener('DOMContentLoaded', function (event) {

    const swiper1 = new Swiper('.upper-block__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.upper-block__slider-button-next',
            prevEl: '.upper-block__slider-button-prev',
        },
    });

    const swiper2 = new Swiper('.browse__list', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.categories__slider-button-next',
            prevEl: '.categories__slider-button-prev',
        },
    });

    const thumbsSwiper = new Swiper('.product__thumbs-block', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
    });

    const swiper3 = new Swiper('.product__big-photo-block', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: thumbsSwiper
        }
    });

});

