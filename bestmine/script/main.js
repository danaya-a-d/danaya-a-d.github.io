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

    $('.mob-menu-close').on('click', function () {
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

    //Открытие FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== undefined) {

        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {

                for (let j = 0; j < faq_item.length; j++) {
                    faq_item[j].classList.remove('active');
                }

                faq_item[i].classList.toggle('active');
            });
        }
    }

    // показ кнопки выхода
    $('.js-account').click(function (e) {
        exit()
    });

    $('.js-account').hover(function (e) {
        exit()
    });

    $('.header__exit').hover(function (e) {
        exit()
    });

    function exit() {
        if ($('.header__exit').hasClass('hide')) {
            $('.header__exit').removeClass('hide');
        } else {
            $('.header__exit').addClass('hide');
        }
    }


    //Плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {
        let offset;
        if ($(this.hash).offset()) {
            offset = $(this.hash).offset().top
        } else offset = 0;

        $('html, body').stop().animate({
            scrollTop: offset
        }, 1000);
        // e.preventDefault();
    });


    // копировать в буфер обмена
    $('.js-copy').on('click', function () {
        copyToClipboard($(this).text());
        ui_copyDone(this);
        // this → объект, в контексте которого вызвана функция (здесь: кликнутый HTML элемент
        // $(this) → оно же, завернутое в jQuery-объект.
    });

    $('.js-copy-btn').each(function (index) {
        $(this).on('click', function () {
            copyToClipboard($('.js-copy-target').eq(index).text());
            ui_copyDone(this);
        });
        // this → очередной элемент, который перебираем
        // index → его номер, который совпадает с номером блока, откуда нужно копировать
    });

    /***/

    function copyToClipboard(str) {
        let area = document.createElement('textarea');

        document.body.appendChild(area);
        area.value = str;
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
    }

    function ui_copyDone(btn) {
        let contentSaved = btn.innerHTML;

        btn.classList.add('copied');

        setTimeout(function () {
            btn.innerHTML = contentSaved;
            btn.classList.remove('copied');
        }, 1500);
    }

    // Affiliate Program

        let program_item = document.querySelectorAll('.program__item');
        let program_text = document.querySelectorAll('.program__text');

        if (program_item !== undefined) {
        for (let i = 0; i < program_item.length; i++) {
            program_item[i].addEventListener('click', function (event) {
                for (let j = 0; j < program_item.length; j++) {
                    program_item[j].classList.remove('active');
                    program_text[j].classList.add('hide');
                }

                program_item[i].classList.add('active');
                program_text[i].classList.remove('hide');

            });
        }
    }

    // Last Deposit & Last Withdrawal

    let history_nav_item = document.querySelectorAll('.history__nav-item');
    let history_table = document.querySelectorAll('.history__table');

    if (history_nav_item !== undefined) {
        for (let i = 0; i < history_nav_item.length; i++) {
            history_nav_item[i].addEventListener('click', function (event) {
                for (let j = 0; j < history_nav_item.length; j++) {
                    history_nav_item[j].classList.remove('active');
                    history_table[j].classList.remove('active');
                }

                history_nav_item[i].classList.add('active');
                history_table[i].classList.add('active');

            });
        }
    }

});