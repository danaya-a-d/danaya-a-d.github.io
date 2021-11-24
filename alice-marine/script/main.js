$(document).ready(function () {

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
    };

    const settings_ban = {
        infinite: false,
        dots: true,
        arrows: false,
        slidesToShow: 1,
    };

    slick_mobile($('.products:not(.products--slider)'), settings_var);
    slick_mobile($('.banners__container'), settings_ban);

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

});


