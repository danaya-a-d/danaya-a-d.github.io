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

    // слайдер баланса валют
    $('.mining__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });

    // кастомный input range
    const setting_range = {
        start: 0,
        step: 1,

        format: {
            to: (v) => parseFloat(v).toFixed(0),
            from: (v) => parseFloat(v).toFixed(0)
        },

        range: {
            'min': 0,
            'max': 100
        },

        tooltips: true,
        connect: [true, false],
    }

    let ranges = document.querySelectorAll('.ranges__range');

    for (let i = 0; i < ranges.length; i++) {
        noUiSlider.create(ranges[i], setting_range);
    }

    // текст по кругу
    let circles = document.querySelectorAll('.stats__about')

    for (let i = 0; i < circles.length; i++) {
        new CircleType(circles[i]);
    }

    // показать / скрыть пароль
    $('body').on('click', '.password-control', function () {
        if ($('.password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $('.password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('.password-input').attr('type', 'password');
        }
        return false;
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


    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.mob-menu').removeClass('close');
        $('.mob-menu').addClass('open');
    }

    function menu_close() {
        $('.mob-menu').addClass('close');
        $('.mob-menu').removeClass('open');
    }

    $('.header__menu-btn').on('click', function () {
        menu_open();
    });

    $('.mob-menu__close').on('click', function () {
        menu_close();
    });

    $('.mob-menu__overlay').on('click', function () {
        menu_close();
    });

    $(".mob-menu__overlay").on("touchmove", function () {
        menu_close();
    });


    //модальные окна
    function modal_show(modal, button_open) {

        function show() {
            $('.modal').addClass('hide');
            modal.removeClass('hide');
            modal.addClass('show');
            $('.modal__overlay').removeClass('hide');
            $('.modal-back').removeClass('hide');
        }

        function hide() {
            modal.addClass('hide');
            $('.modal__overlay').addClass('hide');
            $('.modal-back').addClass('hide');
        }

        button_open.on('click', function (e) {
            show();
        });
        $('.modal__overlay').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });

        $('.modal__overlay').on('touchmove', function (e) {
            modal.addClass('hide');
            hide();
        });

        $('.modal-close').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });

        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide();
            }
        });
    }

    modal_show($('.modal--login'), $('.login-btn'));
    modal_show($('.modal--registr'), $('.registr-btn'));
    modal_show($('.modal--recover'), $('.recover-btn'));
    modal_show($('.modal--table'), $('.table-btn'));

});