window.addEventListener('DOMContentLoaded', function (event) {
    //слайдеры
    const main_swiper = new Swiper('.first-screen__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },

        navigation: {

        },

        pagination: {
        },
    });
});
