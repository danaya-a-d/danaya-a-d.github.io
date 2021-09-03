$(document).ready(function () {

    //Слайдеры производства
    $('.videos__big-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.videos__small-list',
    });

    $('.videos__small-list').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.videos__big-list',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow: $('.videos .arrows__btn--left'),
        nextArrow: $('.videos .arrows__btn--right'),
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.reviews__list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: true,
        prevArrow: $('.reviews .arrows__btn--left'),
        nextArrow: $('.reviews .arrows__btn--right'),
        // variableWidth: true,
        responsive: [
            {
                breakpoint: 1198,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

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

    //Маска телефона
    $(".phone_mask").mask("+38(999)999-99-99");

    //Модальные окна

    function modal_hide(modal) {
        modal.addClass('hide');
        $('.modal__overlay').addClass('hide');
        $('.modal-back').addClass('hide');
    }

    function modal_show(modal, button_open) {

        function show() {
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

        if (button_open === null) {
            show();
        } else {
            button_open.on('click', function (e) {
                show();
            });
        }

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

    modal_show($('.modal-form'), $('.open-modal'));

    //Плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {

        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        e.preventDefault();
    })

    //Отправка формы
    $('.form__button').click(function (e) {
        let form_data = $(this).closest('.form').serializeArray(); // Собираем все данные из формы
        let valid = true;

        $(this).closest('.form').find($('.form__input')).each(function () {
            let value;
            if ($(this).val() !== '') {
                value = 1;
            } else value = 0;
            valid *= value;
        });

        if (valid) {
            e.preventDefault();
            $('body').addClass('sending');

            $.ajax({
                type: "POST", // Метод отправки
                url: "../action.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    $('body').removeClass('sending');
                    modal_hide($('.modal-form'));
                    modal_show($('.modal-thanks'), null);
                },
                error: function () {
                    // Код в этом блоке выполняется при неуспешной отправке сообщения
                    $('body').removeClass('sending');
                    modal_hide($('.modal-form'));
                    modal_show($('.modal-error'), null);
                }
            });
        }
    });
});
