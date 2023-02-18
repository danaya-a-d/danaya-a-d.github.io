window.addEventListener('DOMContentLoaded', function (event) {

    //слайдеры
    const news_swiper = new Swiper('.news__list-container', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 12,


        navigation: {
            nextEl: '.news__slider-button-next',
            prevEl: '.news__slider-button-prev',
        }
    });


    const partners_swiper = new Swiper('.about-us__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.about-us__pagination'
        },

        navigation: {
            nextEl: '.about-us__slider-button-next',
            prevEl: '.about-us__slider-button-prev',
        }
    });


    //кастомный select
    jQuery(($) => {
        $('.select').on('click', '.select__head', function () {
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $(this).next().fadeOut();
            } else {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
                $(this).addClass('open');
                $(this).next().fadeIn();
            }
        });

        $('.select').on('click', '.select__item', function () {
            $('.select__head').removeClass('open');
            $(this).parent().fadeOut();
            $(this).parent().prev().text('');
            $(this).parent().prev().append($(this).html());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    });


});
