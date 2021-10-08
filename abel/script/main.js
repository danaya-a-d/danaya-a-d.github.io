$(document).ready(function () {

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    //Слайдеры

    function slick_mobile(slider, settings) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < 769) {
                // Если слайдер не запущен
                if (init !== 1) {
                    // Запускаем слайдер и записываем в data init-slider = 1
                    slider.slick(settings).data({'init-slider': 1});
                }
            }
            // Если десктоп
            else {
                // Если слайдер запущен
                if (init === 1) {
                    // Разрушаем слайдер и записываем в data init-slider = 0
                    slider.slick('unslick').data({'init-slider': 0});
                }
            }
        }).trigger('resize');
    }

    const settings_var = {
        dots: false,
        arrows: false,
        mobileFirst: true,
        settings: 'slick',
        centerMode: true,
        variableWidth: true,
        responsive: [{
            breakpoint: 769,
            settings: 'unslick'
        }]
    };

    const settings = {
        dots: false,
        arrows: false,
        mobileFirst: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 769,
            settings: 'unslick'
        }]
    };

    slick_mobile($('.upper-block__list'), settings_var);
    slick_mobile($('.hire__list'), settings);
    slick_mobile($('.locations__list'), settings);


    $('.reviews__list').slick({
        dots: true,
        // dotsClass: "my-dots",
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
    }

    $('.header__menu-btn').on('click', function () {
        menu_open();
    });

    $('.header__close-btn').on('click', function () {
        menu_close();
    });

    $('.banner__close').on('click', function () {
        $('.banner').hide();
    });


    $('.faq__item').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.footer__block').on('click', function () {
        $(this).find('.footer__text').find('> *:not(.footer__title)').toggleClass('active');
    });

});