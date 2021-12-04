$(document).ready(function () {

    $(".phone_mask").mask("+7(999)999-99-99");

    // слайдеры
    function slick_mobile(slider, settings, wide) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < wide) {
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

    $('.upper-block__sliders').slick({
        dots: true,
        arrows: true,
        fade: true,
        speed: 2300,
        infinite: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.catalog__sliders').slick({
        dots: true,
        arrows: true,
        fade: true,
        speed: 2300,
        infinite: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.products--slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
        ]
    });

    $('.articles__list--slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $('.production__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 481,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    const settings_var = {
        mobileFirst: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3,
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 992,
                settings: 'unslick'
            }
        ]
    };

    const settings_ban = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        mobileFirst: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 769,
                settings: 'unslick'
            },
        ]
    };

    slick_mobile($('.products:not(.products--slider)'), settings_var, 992);
    slick_mobile($('.banners__container--slider'), settings_ban, 769);

    // слайдер карточки товара

    $('.product__big-photos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product__small-photos'
    });

    $('.product__small-photos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product__big-photos',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
    });



    // плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {
        let offset;
        if ($(this.hash).offset()) {
            offset = $(this.hash).offset().top
        } else offset = 0;

        $('html, body').stop().animate({
            scrollTop: offset
        }, 1000);
        e.preventDefault();
    });


    /**
     * Slick slider animation effect
     **/
    var sliding = true
    var click = true
    var transitionPrefix = "circle"

    function move_right() {
        if (sliding) {
            sliding = false;

            for (let j = 10; j <= 18; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
            }
            sliding = true;

            setTimeout(() => {
                click = true;
            }, 1700);

            setTimeout(() => {
                for (let j = 10; j <= 18; j++) {
                    var c = document.getElementById(transitionPrefix + j);
                    c.classList.remove("streak");
                    c.setAttribute("class", transitionPrefix + j + " steap");
                }
                sliding = true;

            }, 850);
            setTimeout(() => {
                click = true;
            }, 1700);
        }
    }


    $('.upper-block__sliders').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        move_right();
    });

    $('.catalog__sliders').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        move_right();
    });


    // // Left-Prev
    // $('.upper-block__sliders').find('.slick-next').click(function (e) {
    //     move_right();
    // });
    //
    // // Right - Next
    // $('.upper-block__sliders').find('.slick-prev').click(function (e) {
    //     move_right();
    // });

    function show_overlay(v) {
        v.on({
            mouseenter: function () {
                $('.header__overlay-search').fadeIn(200);
                $('.header__form').addClass('on-top');
                $('.header__input-label').fadeIn(200);
                $('.header__input-label').removeClass('transform-out').addClass('transform-in');
            },
            mouseleave: function () {
                $('.header__overlay-search').fadeOut(200);
                $('.header__form').removeClass('on-top');
                $('.header__input-label').fadeOut(200);
                $('.header__input-label').removeClass('transform-in').addClass('transform-out');
            }
        });

        v.click(function (e) {
            $('.header__overlay-search').fadeIn(300);
            $('.header__form').addClass('on-top');
            $('.header__input-label').fadeIn(200);
            $('.header__input-label').removeClass('transform-out').addClass('transform-in');
        });

        $('.header__overlay-search').click(function (e) {
            $('.header__overlay-search').fadeOut(300);
            $('.header__form').removeClass('on-top');
            $('.header__input-label').fadeOut(200);
            $('.header__input-label').removeClass('transform-in').addClass('transform-out');
        });
    }

    show_overlay($('.header__form'));

    // открытие меню
    function show_overlay_menu(v) {
        v.on({
            mouseenter: function () {
                $(this).addClass('on-top');
                $('.header__overlay').fadeIn(300);
            },
            mouseleave: function () {
                $(this).removeClass('on-top');
                $('.header__overlay').fadeOut(300);
            },
            click: function () {
                $(this).addClass('on-top');
                $('.header__overlay').fadeIn(300);
            }
        });

        $('.header__overlay').click(function (e) {
            $('.header__overlay').fadeOut(200);
            $('.header__nav-second-list').removeClass('transform-in').addClass('transform-out');
            $('.header__nav-second-list').fadeOut(200);
            $('.header__wrapper-nav').removeClass('active');
            $('.header__wrapper-nav').removeClass('on-top');
            $('.header__mobile-btn').removeClass('active');
            $('.header__cart-about').removeClass('open-nav');
        });
    }

    $('.header__mobile-btn').click(function (e) {
        $('.header__mobile-btn').toggleClass('active');
        $('.header__wrapper-nav').toggleClass('active');
        $('.header__cart-about').toggleClass('open-nav');

        if ($('.header__nav-list').hasClass('transform-in')) {
            $('.header__nav-list').fadeOut(200);
            $('.header__nav-list').removeClass('transform-in').addClass('transform-out');
        } else {
            $('.header__nav-list').fadeIn(200);
            $('.header__nav-list').removeClass('transform-out').addClass('transform-in');
        }
    });
    show_overlay_menu($('.header__wrapper-nav'));

    // открытие подменю при клике и наведении
    let is_mouseenter = 0;
    $('.header__nav-catalog').on({
        mouseenter: function () {
            $(this).find('.header__nav-second-list').fadeIn(200);
            $(this).find('.header__nav-second-list').css('display', 'flex');
            $(this).find('.header__nav-second-list').removeClass('transform-out').addClass('transform-in');
            is_mouseenter = 1;
        },
        mouseleave: function () {
            $(this).find('.header__nav-second-list').removeClass('transform-in').addClass('transform-out');
            $(this).find('.header__nav-second-list').fadeOut(200);
        },
        click: function () {
            if ($(this).find('.header__nav-second-list').hasClass('transform-in') && is_mouseenter !== 1) {
                $(this).find('.header__nav-second-list').fadeOut(200);
                $(this).find('.header__nav-second-list').removeClass('transform-in').addClass('transform-out');
                console.log('click-close');
            } else {
                $(this).find('.header__nav-second-list').fadeIn(200);
                $(this).find('.header__nav-second-list').css("display", "flex");
                $(this).find('.header__nav-second-list').removeClass('transform-out').addClass('transform-in');
                is_mouseenter = 0;
            }
        }
    });

    // показ блока с телефоном
    $('.header__call-btn').click(function (e) {
        $('.header__call-btn').toggleClass('active');

        if ($('.header__call-btn').hasClass('active')) {
            $('.header__call-block').fadeIn(200);
            $('.header__call-block').css("display", "flex");
            $('.header__call-block').removeClass('transform-out').addClass('transform-in');

        } else {
            $('.header__call-block').fadeOut(200);
            $('.header__call-block').removeClass('transform-in').addClass('transform-out');
        }
    });

    // включение/выключение корзины
    $('.header__cart-about').on({
        mouseenter: function () {
            $('.header__cart-block').fadeIn(200);
            $('.header__cart-block').removeClass('transform-out').addClass('transform-in');
            $('.header__cart-about').addClass('dark');
        },
        mouseleave: function (event) {
            $('.header__cart-block').fadeOut(200);
            $('.header__cart-block').removeClass('transform-in').addClass('transform-out');
            $('.header__cart-about').removeClass('dark');
        },
    });

    $('.header__cart-icon').click(function (e) {
        $('.header__cart-block').fadeIn(200);
        $('.header__cart-block').removeClass('transform-out').addClass('transform-in');
        $('.header__cart-about').addClass('dark');
    });

    $('.cart__close').click(function (e) {
        $('.header__cart-block').fadeOut(200);
        $('.header__cart-block').removeClass('transform-in').addClass('transform-out');
        $('.header__cart-about').removeClass('dark');
    });


    // включение видео
    $('.video-block').on('click', function () {
        let $video = $(this).find('.video-block__video'),
            src = $video.attr('src');
        $video.removeAttr('srcdoc');

        $video.attr('src', src + '?&autoplay=1');
        $(this).find('.video-block__play-btn').hide();
        $(this).find('.video-block__name').hide();
        $(this).addClass('play');
    });


    // модальные окна
    function modal_show(modal, button_open) {

        function show() {
            $('.modal').hide();
            modal.fadeIn(250);
            $('.modal-overlay').fadeIn(200);
            $('.modal-back').fadeIn(200);
            $('.modal-back').css("display", "flex");
            modal.removeClass('transform-out').addClass('transform-in');
        }

        function hide() {
            modal.fadeOut(500);
            $('.modal-overlay').fadeOut(200);
            $('.modal-back').fadeOut(200);
            modal.removeClass('transform-in').addClass('transform-out');
        }

        button_open.on('click', function (e) {
            show();
        });

        $('.modal-overlay').on('click', function (e) {
            hide();
        });

        $('.modal-close').on('click', function (e) {
            hide();
        });

        $('.modal-overlay').on('touchmove', function (e) {
            hide();
        });
        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide();
            }
        });
    }

    modal_show($('.modal-recall'), $('.recall-btn'));
    modal_show($('.modal-thanks'), $('.thanks-btn'));
    modal_show($('.modal-login'), $('.login-btn'));

    //кастомный input number
    $('.counter .counter__button').on('click', function () {
        let input = $(this).closest('.counter').find('input'); // инпут
        let value = parseInt(input.val()) || 0; // получаем value инпута или 0
        if ($(this).hasClass('minus')) {
            if (value - 1 > 0)
                value = value - 1; // вычитаем из value 1
        }
        if ($(this).hasClass('plus')) {
            value = value + 1; // прибавляем к value 1
        }
        input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
    });

    //увеличение изображений
    if ($('[data-fancybox="gallery"]').length > 0) {
        $('[data-fancybox="gallery"]').fancybox({
            thumbs: {
                showOnStart: true
            },
            hash: true,
            hideOnOverlayClick: true,
            enableEscapeButton: true
        });
    }

});


