$(document).ready(function () {

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
        infinite: true,
        fade: true,
        speed: 1000,
        swipe: false,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: true,
                    arrows: false,
                    swipe: true
                }
            }
        ]
    });

    $('.products--slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false,
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

    $('.articles__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
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
        infinite: false,

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
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        mobileFirst: true,
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
                settings: 'unslick'
            },
        ]
    };

    slick_mobile($('.products:not(.products--slider)'), settings_var, 992);
    slick_mobile($('.banners__container'), settings_ban, 769);

    //Плавное пролистывание к якорю
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
    var directionLeft = false
    var directionRight = false

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

    function move_left() {
        if (sliding) {
            sliding = false;
            for (let j = 1; j <= 9; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", transitionPrefix + j + " streak");
            }
            sliding = true;
            setTimeout(() => {
                click = true;
            }, 1700);

            setTimeout(() => {
                for (j = 1; j <= 9; j++) {
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

    // Left-Prev
    $('.upper-block__sliders').find('.slick-next').click(function (e) {
        move_right();
    });

    // Right - Next
    $('.upper-block__sliders').find('.slick-prev').click(function (e) {
        // move_left();
        move_right();
    });

    function show_overlay(v) {
        v.on({
            mouseenter: function () {
                $('.header__overlay').removeClass('hide');
                $(this).addClass('on-top');
            },
            mouseleave: function () {
                $('.header__overlay').addClass('hide');
                $(this).removeClass('on-top');
            }
        });

        v.click(function (e) {
            $('.header__overlay').removeClass('hide');
            $(this).addClass('on-top');
        });

        $('.header__overlay').click(function (e) {
            $(this).addClass('hide');
            v.removeClass('on-top');
        });
    }

    function show_overlay_menu(v) {
        v.on({
            mouseenter: function () {
                $('.header__overlay').removeClass('hide');
                $(this).addClass('on-top');
            },
            mouseleave: function () {
                $('.header__overlay').addClass('hide');
                $(this).removeClass('on-top');
            }
        });

        v.click(function (e) {
            $('.header__overlay').toggleClass('hide');
            $(this).toggleClass('on-top');
        });

        $('.header__overlay').click(function (e) {
            $(this).addClass('hide');
            v.removeClass('on-top');


            $('.header__mobile-btn').removeClass('active');
            $('.header__wrapper-nav').removeClass('active');
            $('.header__nav-list').removeClass('active');
            $('.header__cart-about').removeClass('open-nav');
        });
    }

    show_overlay($('.header__form'));
    show_overlay_menu($('.header__wrapper-nav'));


    $('.header__call-btn').click(function (e) {
        $('.header__call-btn').toggleClass('active');
        $('.header__call-block').toggleClass('active');
    });

    $('.header__cart-icon').click(function (e) {
        $('.header__cart-block').addClass('active');
        $('.header__cart-about').addClass('dark');
    });

    $('.cart__close').click(function (e) {
        $('.header__cart-block').removeClass('active');
        $('.header__cart-about').removeClass('dark');
    });

    $('.header__mobile-btn').click(function (e) {
        $('.header__mobile-btn').toggleClass('active');
        $('.header__wrapper-nav').toggleClass('active');
        $('.header__nav-list').toggleClass('active');
        $('.header__cart-about').toggleClass('open-nav');
    });


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
            $('.modal').addClass('hide');
            modal.removeClass('hide');
            modal.addClass('show');
            $('.modal-overlay').removeClass('hide');
            $('.modal-back').removeClass('hide');
        }

        function hide() {
            modal.addClass('hide');
            $('.modal-overlay').addClass('hide');
            $('.modal-back').addClass('hide');
        }

        button_open.on('click', function (e) {
            show();
        });

        $('.modal-overlay').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });

        $('.modal-close').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });

        $('.modal-overlay').on('touchmove', function (e) {
            modal.addClass('hide');
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
});


