$(document).ready(function () {

    new WOW().init();

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
        $('.header__nav').addClass('open');
        $('.header__open-menu').addClass('close');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
        $('.header__nav').removeClass('open');
        $('.header__open-menu').removeClass('close');
    }

    $('.header__open-menu').on('click', function () {
        if ($(".header__nav").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    //Плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {
        menu_close();
        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top + -100
        }, 1000);
        e.preventDefault();
    });

    //Модальные окна
    function modal_show(modal) {
        modal.removeClass('hide');
        modal.addClass('show');
        $('.modal__overlay').removeClass('hide');
        $('.modal-back').removeClass('hide');

        function hide() {
            modal.addClass('hide');
            $('.modal__overlay').addClass('hide');
            $('.modal-back').addClass('hide');
        }

        $('.modal__button-close').on('click', function (e) {
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



    //Отправка формы
    $('.form__button').click(function (e) {

        e.preventDefault();

        let form_data = $(this).closest('.form').serializeArray(); // Собираем все данные из формы
        let valid_name = true;
        let valid_email = true;
        let valid_checks = true;



        $('.form__fieldset').find($('.form__input')).each(function () {
            let value;
            if ($(this).val() !== '') {
                value = 1;
            } else value = 0;
            valid_name *= value;
        });

        $('.form__fieldset').find($('.form__input--email')).each(function () {
            let value;
            if (isEmail($(this).val())) {
                value = 1;
            } else value = 0;
            valid_name *= value;
        });

        $('.form__check-fieldset').find($('input')).each(function () {
            let value;
            if ($(this).prop('checked')) {
                value = 1;
            } else value = 0;
            valid_checks *= value;
        });


        if (!valid_name && valid_checks) {
            modal_show($('.modal--name'));
        }

        if (!valid_email && valid_checks) {
            modal_show($('.modal--name'));
        }

        if (valid_name && !valid_checks) {
            modal_show($('.modal--checks'));
        }

        if (!valid_name && !valid_checks) {
            modal_show($('.modal--all'));
        }

        if (valid_name && valid_checks) {
            $('body').addClass('sending');

            $.ajax({
                type: "POST", // Метод отправки
                url: "../action.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    $('body').removeClass('sending');
                    modal_show($('.modal--success'));
                },
                error: function () {
                    // Код в этом блоке выполняется при неуспешной отправке сообщения
                    $('body').removeClass('sending');
                    modal_show($('.modal--unsuccessful'));
                }
            });
        }
    });
});

function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}