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

    function menu_open() {
        $(".menu").removeClass('menu--close');
    }

    function menu_close() {
        $(".menu").addClass('menu--close');
    }

    $('.header__open-btn').on('click', function () {
        if ($(".menu").hasClass('menu--close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    $(".phone_mask").mask("+7(999)999-99-99");

    //Слайдеры

    $('.products__list--scroll').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow:
            $(this).find(".product__photo-item").length === 1 ? 1 :
            $(this).find(".product__photo-item").length === 2 ? 2 :
            $(this).find(".product__photo-item").length === 3 ? 3 : 4,
        // slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
    });

    //чекбокс, выделенный лейбл
    function bold_label() {
        // $('form input[type="checkbox"]:checked:not(:disabled)')
        //     .closest('label')
        //     .find('.indicator-title')
        //     .css("color", '#FD4F79');
        //
        // $('form input[type="checkbox"]:not(:checked):not(:disabled)')
        //     .closest('label')
        //     .find('.indicator-title')
        //     .css("color", 'black');

        $('input[type="radio"]:checked')
            .closest('label')
            .find('.indicator-title')
            .css("color", '#FD4F79');

        $('input[type="radio"]:not(:checked)')
            .closest('label')
            .find('.indicator-title')
            .css("color", 'black');

        $('input[type="checkbox"]:checked')
            .closest('label')
            .find('.indicator-title')
            .css("color", '#FD4F79');

        $('input[type="checkbox"]:not(:checked)')
            .closest('label')
            .find('.indicator-title')
            .css("color", 'black');
    }

    bold_label();
    $('input[type="radio"]').on('change', function () {
        bold_label();
    });
    $('input[type="checkbox"]').on('change', function () {
        bold_label();
    });

    //модальные окна
    function modal_show(modal, button_open) {

        function show() {
            $('.modal').addClass('hide');
            modal.removeClass('hide');
            modal.addClass('show');
            $('.modal__overlay').removeClass('hide');
            $('.modal__back').removeClass('hide');
        }

        function hide() {
            modal.addClass('hide');
            $('.modal__overlay').addClass('hide');
            $('.modal__back').addClass('hide');
        }

        button_open.on('click', function (e) {
            show();
        });
        $('.modal-close').on('click', function (e) {
            hide();
        });
        $('.modal__overlay').on('click', function (e) {
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


    //Показать / скрыть пароль
    function show_password(input) {
        $('body').on('click', '.password-control', function () {
            if (input.attr('type') === 'password') {
                $(this).addClass('view');
                input.attr('type', 'text');
            } else {
                $(this).removeClass('view');
                input.attr('type', 'password');
            }
            return false;
        });
    }

    show_password($('#password-registr'));
    show_password($('#password-login'));


    //Получение начения из лейблов кастомного input range
    function srt_range_text() {
        $('.range-number.low').text($('.pointer-label.low').text());
        $('.range-number.high').text($('.pointer-label.high').text());
    }

    srt_range_text();
    $('.range-slider').on('change', function () {
        srt_range_text();
    });

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
});
