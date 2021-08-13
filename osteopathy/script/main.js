$(document).ready(function () {

    //Маска телефона
    $(".phone_mask").mask("+7(999)999-99-99");

    //Показ слайдеров на мобильном
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

    //Слайдер "Кому может быть полезна остеопатия?"
    $('.useful__list').slick({
        dots: true,
        arrows: false
    });

    //Слайдер отзывов
    $('.reviews__list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2
                }
            }
        ]
    });

    //Слайдер методов лечения
    const settings = {
        dots: true,
        arrows: false,
        mobileFirst: true,
        adaptiveHeight: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 769,
            settings: 'unslick'
        }]
    };

    slick_mobile($('.methods__list'), settings);
    slick_mobile($('.licenses__photos'), settings);
    slick_mobile($('.stocks__list'), settings);


    //Модальные окна
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

    modal_show($('.modal'), $('.recall-js'));

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
                    alert("Ваше сообщение отправлено!");
                },
                error: function () {
                    // Код в этом блоке выполняется при неуспешной отправке сообщения
                    $('body').removeClass('sending');
                    alert("Сообщение не отправлено!");
                }
            });
        }
    });


    //Открытие FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== undefined) {

        for (let i = 0; i < faq_item.length; i++) {
            let faq_text = faq_item[i].querySelector('.faq__text');

            faq_item[i].addEventListener('click', function (event) {

                if (faq_text.classList.contains('hidden')) {

                    for (let j = 0; j < faq_item.length; j++) {

                        let faq_text = faq_item[j].querySelector('.faq__text');
                        faq_text.classList.add('hidden');
                        faq_item[j].classList.remove('faq__item--active');
                    }

                }

                faq_text.classList.toggle('hidden');
                faq_item[i].classList.toggle('faq__item--active');
            });
        }
    }
});