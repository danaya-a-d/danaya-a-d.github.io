document.addEventListener('DOMContentLoaded', () => {

    //100vh на мобильных устройствах
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


    // Календарь
    let month_nav_item = document.querySelectorAll('.calendar__months-item');
    let month_item = document.querySelectorAll('.calendar__main-months-item');
    let calendar_data_active = document.querySelectorAll('.calendar__data-item.active');
    let calendar = document.querySelector('.events__calendar');
    let calendar_button = document.querySelector('.events__button');
    let calendar_close_btn = document.querySelector('.calendar__close-btn');

    let body = document.querySelector('body');

    if (calendar !== null) {
        for (let i = 0; i < month_nav_item.length; i++) {
            month_nav_item[i].addEventListener('click', function () {
                for (let j = 0; j < month_nav_item.length; j++) {
                    month_nav_item[j].classList.remove('active');
                    month_item[j].classList.remove('active');
                }
                month_nav_item[i].classList.add('active');
                month_item[i].classList.add('active');
            });
        }

        calendar_button.addEventListener('click', function () {
            calendar.classList.toggle('hide');
            body.classList.toggle('no-scroll');
        });

        calendar_close_btn.addEventListener('click', function () {
            calendar.classList.add('hide');
            body.classList.remove('no-scroll');
        });


        for (let i = 0; i < calendar_data_active.length; i++) {
            calendar_data_active[i].addEventListener('click', function () {
                calendar.classList.add('hide');
                body.classList.remove('no-scroll');
                let month = calendar_data_active[i].closest('.calendar__main-months-item');
                let month_name = month.querySelector('.calendar__name').innerHTML;
                calendar_button.innerText = calendar_data_active[i].innerText + " " + month_name;
            });
        }
    }

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
        body.classList.add('no-scroll');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
        body.classList.remove('no-scroll');
    }

    $('.header__menu-btn').on('click', function () {
        menu_open();
    });

    $('.header__close-btn').on('click', function () {
        menu_close();
    });

    // показать / скрыть пароль
    $('body').on('click', '.password-control', function () {
        if ($(this).siblings('.password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $(this).siblings('.password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $(this).siblings('.password-input').attr('type', 'password');
        }
        return false;
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

    modal_show($('.modal-success'), $('.success-btn'));
    modal_show($('.modal-delete'), $('.delete-btn'));

    // валидация форм
    function isEmpty(input) {
        $(input).each(function () {
            if ($(this).val() != '') {
                $(this).addClass('filled');
            } else $(this).removeClass('filled');
        })
    }

    function passwordsValidate() {
        let has_special = /[!?$%&@]/.test($('.password-original').val());
        let has_length = $('.password-original').val().length > 8;
        let is_equally = $('.password-original').val() == $('.password-repeat').val();

        if (!is_equally) {
            $('.warning-pass-repeat').text('Пароли не совпадают');
        } else $('.warning-pass-repeat').text('');

        if (!has_length) {
            $('.warning-pass-original').text('Пароль имеет менее 8 символов');
        }

        if(!has_special) {
            $('.warning-pass-original').text('Пароль должен содержать минимум один знак');
        }

        if (has_special && has_length) {
            $('.warning-pass-original').text('');
        }

        if ($('.warning-pass-original').text() == '' && $('.warning-pass-repeat').text() == '') {
            $('.main-form__button-pass').prop('disabled', false);
        } else $('.main-form__button-pass').prop('disabled', true);
    }

    (function () {
        isEmpty($('.main-form__input'));
        isEmpty($('.main-form__textarea'));
    })();

    $('.main-form__input').focusout(function () {
        isEmpty($(this));
    });

    $('.main-form__textarea').focusout(function () {
        isEmpty($(this));
    });

    $('.password-original').keyup(function () {
        passwordsValidate();
    });

    $('.password-repeat').keyup(function () {
        passwordsValidate();
    });

    // добавить поле ФИО
    $('.main-form__add-field').click(function () {
        let container = $(this).closest('.main-form__container');
        $('.main-form__label-clone').clone().appendTo(container).removeClass('main-form__label-clone');
    });

    // фильтр в попапе
    $('.lk-filter__indicator-title').click(function () {
        $('.lk-filter').toggleClass('popup');
        $('.lk-section__overlay').toggleClass('hide');
        body.classList.toggle('no-scroll');
    });
});
