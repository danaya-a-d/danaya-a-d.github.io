$(document).ready(function () {

    /////// СЛАЙДЕРЫ ///////
    function slick_mobile(slider, settings) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < 480) {
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
        prevArrow: $('.slider-left'),
        nextArrow: $('.slider-right'),

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

    slick_mobile($('.why-us__list'), settings);

    // товар
    if ($('[data-fancybox="gallery"]').length > 0) {
        $('[data-fancybox="gallery"]').fancybox({
            thumbs: {
                showOnStart: true
            },
            hash: true,
            hideOnOverlayClick : true,
            enableEscapeButton: true
        });
    }

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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


    $('.fancybox-img').loupe({
        width: 200, // width of magnifier
        height: 200, // height of magnifier
        loupe: 'loupe' // css class for magnifier
    });
});