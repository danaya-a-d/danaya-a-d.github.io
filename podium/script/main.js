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

    /////// СЛАЙДЕРЫ ///////
    function slick_mobile(slider, settings, width) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < width) {
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


    const settings = {
        dots: true,
        arrows: false,
        mobileFirst: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 480,
            settings: 'unslick'
        }]
    };

    const settings_goods_hot = {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('#slider-left-hot'),
        nextArrow: $('#slider-right-hot'),

        mobileFirst: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    };

    const settings_goods_new = {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('#slider-left-new'),
        nextArrow: $('#slider-right-new'),

        mobileFirst: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    };

    //Слайдер верхнего блока
    $('.banner__list').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.goods__list--slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('#slider-left-similar'),
        nextArrow: $('#slider-right-similar'),

        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    slick_mobile($('.why-us__list'), settings, 480);
    slick_mobile($('.goods__list--slick-mob-hot'), settings_goods_hot, 767);
    slick_mobile($('.goods__list--slick-mob-new'), settings_goods_new, 767);

    // товар
    if ($('[data-fancybox="gallery"]').length > 0) {
        $('[data-fancybox="gallery"]').fancybox({
            thumbs: {
                showOnStart: true
            },
            hash: true,
            hideOnOverlayClick: true,
            enableEscapeButton: true
        });

        $('.fancybox-img').loupe({
            width: 200, // width of magnifier
            height: 200, // height of magnifier
            loupe: 'loupe' // css class for magnifier
        });
    }

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#slider-left-big-photo'),
        nextArrow: $('#slider-right-big-photo'),
        dots: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: $(this).find(".product__photo-item").length === 1 ? 1 : $(this).find(".product__photo-item").length === 2 ? 2 : 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: false,
        responsive: [{
            breakpoint: 767,
            settings: "unslisck"
        }]
    });

    if ($('.product__photo-list').find('.product__photo-item').length < 4) {
        $('.product__photo-list').find('.slick-track').addClass('slick-scale');
    }


    //Блок фильтров
    $('.filter__show').on('click', function () {
        if ($('.filter').hasClass('filter--hide')) {
            $('.filter').removeClass('filter--hide');
            $('.filter__show').text('Скрыть фильтры');
        } else {
            $('.filter').addClass('filter--hide');
            $('.filter__show').text('Показать фильтры');
        }
    });

    //Маска телефона
    $(".call-me-input").mask("+38(999)999-99-99");
    $(".ordering__tel").mask("+38 999 999 99 99");

    //Кастомный input number
    $('.counter .counter__button').on('click', function () {
        var input = $(this).closest('.counter').find('input'); // инпут
        var value = parseInt(input.val()) || 0; // получаем value инпута или 0
        if ($(this).hasClass('minus')) {
            if (value - 1 > 0)
                value = value - 1; // вычитаем из value 1
        }
        if ($(this).hasClass('plus')) {
            value = value + 1; // прибавляем к value 1
        }
        input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
        // initCart();
    });

    $('.counter .counter__input').on('keyup', function () {
        if (!$(this).val().length) {
            $(this).val(1);
        }
    });

    //Показать / скрыть пароль
    $('body').on('click', '.password-control', function () {
        if ($('#password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
        }
        return false;
    });

    // Открытие и закрытие мобильлного меню
    function call_menu_open() {
        $('.contacts-menu').removeClass('close');
        $('.overlay').show();
    }

    function call_menu_close() {
        $('.contacts-menu').addClass('close');
        $('.overlay').hide();
    }

    function menu_open() {
        $('.header').removeClass('close');
        $('.overlay').show();
    }

    function menu_close() {
        $('.header').addClass('close');
        $('.overlay').hide();


        function close_submenu() {
            $('.header__nav-sublist').addClass('close');
        }

        setTimeout(close_submenu, 300);
    }

    $('.header__open-contacts').on('click', function () {
        if ($(".contacts-menu").hasClass('close')) {
            call_menu_open();
        } else {
            call_menu_close();
        }
    });

    $('.header__recall').on('click', function () {
        menu_close();
        if ($(".contacts-menu").hasClass('close')) {
            call_menu_open();
        } else {
            call_menu_close();
        }
    });

    $('.header__open-menu').on('click', function () {
        if ($(".header").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    $('.contacts-menu__btn-close').on('click', function () {
        call_menu_close();
    });

    $('.header__btn-close').on('click', function () {
        menu_close();
    });

    $('.header__sublist-btn-close').on('click', function () {
        $(this)
            .closest('.header__nav-item')
            .find('.header__nav-sublist')
            .addClass('close');
    });

    $('.overlay').on('click', function () {
        menu_close();
        call_menu_close();
    });

    $(".overlay").on("touchmove", function () {
        menu_close();
    });


    function moving_header_elements() {
        const mediaQuery = window.matchMedia('(max-width: 1199px)');
        if (mediaQuery.matches) {
            $('.header-mobile').append($('.header__buy-list'));
            // $('.contacts-menu').append($('.header__contacts'));
        }
        else {
            $('.header__buy').append($('.header__buy-list'));
            // $('.header__medium').prepend($('.header__contacts'));
        }
    }

    // перемещение элементов в хедере
    moving_header_elements();
    window.addEventListener('resize', function (event) {
        moving_header_elements();
    }, true);


    //чекбокс, жирный лейбл
    function bold_label() {
        $('.filter input[type="checkbox"]:checked:not(:disabled)')
            .closest('label')
            .find('.filter__indicator-title')
            .css("font-family", 'avenirnextcyr-bold, Arial, sans-serif');

        $('.filter input[type="checkbox"]:not(:checked):not(:disabled)')
            .closest('label')
            .find('.filter__indicator-title')
            .css("font-family", 'avenirnextcyr-demibold, Arial, sans-serif');
    }

    bold_label();
    $('.filter__item input').on('change', function () {
        bold_label()
    });


    // открытие подменю на моб
    $('.header__nav-item-block').on('click', function (e) {
        $(this)
            .parent('.header__nav-item')
            .find('.header__nav-sublist')
            .removeClass('close');
    });
});