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
            'max': 10
        },

        tooltips: true,
        connect: [true, false],
        // Show a scale with the slider
        pips: {
            mode: 'steps',
            stepped: true,
            density: 4
        }
    }

    let ranges = document.querySelectorAll('.range-js');

    for (let i = 0; i < ranges.length; i++) {
        noUiSlider.create(ranges[i], setting_range);
    }


    //Открытие FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== undefined) {

        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {

                if (!this.classList.contains('active')) {
                    for (let j = 0; j < faq_item.length; j++) {
                        faq_item[j].classList.remove('active');
                    }
                }

                faq_item[i].classList.toggle('active');
            });
        }
    }

    /////// ОТКРЫТИЕ ТАБОВ ///////
    function tabs(tabs_item_program, tabs_btn_program) {
        if (tabs_btn_program !== undefined) {
            for (let i = 0; i < tabs_btn_program.length; i++) {

                tabs_btn_program[i].addEventListener('click', function () {

                    for (let j = 0; j < tabs_item_program.length; j++) {
                        tabs_btn_program[j].classList.remove('active');
                        tabs_item_program[j].classList.remove('active');
                    }
                    tabs_btn_program[i].classList.add('active');
                    tabs_item_program[i].classList.add('active');
                });
            }
        }
    }


    let tabs_item_program = document.querySelectorAll('.banners__block');
    let tabs_btn_program = document.querySelectorAll('.banners__item');
    let banners_item_program = document.querySelectorAll('.withdrawal__block');
    let banners_btn_program = document.querySelectorAll('.withdrawal__item');
    let plans_item_program = document.querySelectorAll('.deposit__block');
    let plans_btn_program = document.querySelectorAll('.deposit__plans-item');


    tabs(tabs_item_program, tabs_btn_program);
    tabs(banners_item_program, banners_btn_program);
    tabs(plans_item_program, plans_btn_program);

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

    modal_show($('.modal--login'), $('.login-btn'));
    modal_show($('.modal--registr'), $('.registr-btn'));


    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
    }

    $('.header__menu-btn').on('click', function () {
        menu_open();
    });

    $('.header__close-btn').on('click', function () {
        menu_close();
    });

    $('.banner__close').on('click', function () {
        $('.banner').hide();
    });


    //Слайдеры

    function slick_mobile(slider, settings) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < 1270) {
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
        dots: false,
        arrows: false,
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        settings: 'slick',
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1270,
                settings: 'unslick'
            }
        ]
    };

    // slick_mobile($('.investment__rates'), settings);
});