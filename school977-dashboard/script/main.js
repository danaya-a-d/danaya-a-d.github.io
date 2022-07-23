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

    // Слайдер при ресайзе
    function slick_mobile(slider, settings) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < 991) {
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

    // Слайдер расписания при ресайзе
    function slick_mobile_nav(slider) {
        $(window).on('resize', function (e) {
            let init = slider.data('init-slider');
            if (window.innerWidth < 991) {
                if (init !== 1) {
                    slider.each(function () {
                        $(this).slick({
                            asNavFor: $(this).parents('.schedule-block').find('.schedule-block__dates'),
                            arrows: false,
                            dots: false
                        }).data({'init-slider': 1});
                    });
                }
            } else {
                if (init === 1) {
                    slider.each(function () {
                        $(this).slick('unslick').data({'init-slider': 0});
                    });
                }
            }
        }).trigger('resize');
    }

    const settings_nav = {
        dots: false,
        arrows: false,
        mobileFirst: true,
        settings: 'slick',
        swipe: false,
        responsive: [{
            breakpoint: 991,
            settings: 'unslick'
        }]
    };

    slick_mobile_nav($('.schedule-block__list'));
    slick_mobile($('.schedule-block__dates'), settings_nav);

    // Слайдер новостей дашбоард
    $('.news-sec__list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    dotsClass: "my-dots",
                }
            }
        ]
    });

    // Сворачивание расписания дашбоард
    $('.schedule-list__title').on('click', function () {
        $(this).closest('.schedule-list__item').toggleClass('active');
    });

    // Сворачивание активных заданий
    $('.task:not(".inactive")').on('click', function () {
        $(this).toggleClass('active');
    });

    // Сворачивание вкладок успеваимости
    $('.performance__item').on('click', function () {
        $(this).toggleClass('active');
    });

    // Открытие/закрытие меню
    $('.header__menu-btn').on('click', function () {
        $(this).toggleClass('close');
        $('.menu').toggleClass('close');
    });

    $('.menu__overlay').on('click', function () {
        $('.header__menu-btn').addClass('close');
        $('.menu').addClass('close');
    });

    $('.menu__overlay').on('touchmove', function () {
        $('.header__menu-btn').addClass('close');
        $('.menu').addClass('close');
    });

    // Диаграмма прогресса
    let progress_data = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    let progress_text_color = 'white';

    for (let i = 0; i < progress_data.length; i++) {

        if (progress_data[i] <= 29) {
            progress_text_color = '#222529'
        }

        $('.statistic__list').append(
            '<div class="statistic__item">\n' +
            '<div class="statistic__value-block">\n' +
            '<div class="statistic__value-color" style="height: ' + progress_data[i] + '%"></div>\n' +
            '<span class="statistic__value-name" style="color: ' + progress_text_color + '">Алгебра</span>\n' +
            '</div>\n' +
            '<div class="statistic__value-number">' + progress_data[i] + '%</div>\n' +
            '</div>'
        );
    }

    $('.statistic__sort-button').on('click', function () {
        $('.statistic__list').toggleClass('reverse');
        $('.statistic__sort-button').toggleClass('reverse');
    });

    // Диаграмма успеваемости
    let performance_data = [12, 11, 10, 9, 8, 7, 6];
    let performance_text_color = 'black';

    function isScore(data) {
        if (data === 12)
            return "star";
        else return "";
    }

    for (let i = 0; i < performance_data.length; i++) {

        if (performance_data[i] <= 10) {
            performance_text_color = '#ff732b'
        }

        let val = performance_data[i] * 100 / 12;

        $('.statistic-horizontal__list').append(
            '<div class="statistic-horizontal__item ' + isScore(performance_data[i]) + '">\n' +
            '<div class="statistic-horizontal__value-block">\n' +
            '<div class="statistic-horizontal__value-color" style="width: ' + val + '%"></div>\n' +
            '<span class="statistic-horizontal__value-name">Алгебра</span>\n' +
            '<div class="statistic-horizontal__value-number" style="color: ' + performance_text_color + '">' + performance_data[i] + '/<small>12</small></div>\n' +
            '</div>\n' +
            '</div>');
    }

    // Переключение вкладок
    let toggles_items = document.querySelectorAll('.toggles-btn');
    let toggles_blocks = document.querySelectorAll('.toggles-block');

    for (let i = 0; i < toggles_items.length; i++) {

        toggles_items[i].addEventListener('click', function () {

            for (let j = 0; j < toggles_items.length; j++) {
                toggles_items[j].classList.remove('active');
                toggles_blocks[j].classList.remove('active');
            }

            toggles_items[i].classList.add('active');
            toggles_blocks[i].classList.add('active');
        });
    }

    // Открытие сообщения
    $('.message').on('click', function () {
        $(this).addClass('open');
    });

    $('.message__close').on('click', function () {
        $(this).closest('.message').hide();
    });

    $('.message__overlay').on('click', function () {
        $(this).closest('.message').hide();
    });

    $('.message__overlay').on('touchmove', function () {
        $(this).closest('.message').hide();
    });


    // Открытие модального календаря
    $('.calendar-btn').on('click', function () {
        $('.calendar-modal').addClass('open');
    });

    $('.calendar-modal__overlay').on('click', function () {
        $('.calendar-modal').removeClass('open');
    });

    $('.calendar-modal__overlay').on('touchmove', function () {
        $('.calendar-modal').removeClass('open');
    });

    // Показать / скрыть пароль
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

    // Кастомный select
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

    // добавить поле формы
    $('.main-form__add-button').click(function () {
        let container = $(this).siblings('.main-form__contacts');
        $('.main-form__fieldset-clone').clone().appendTo(container).removeClass('main-form__fieldset-clone');
    });


    // Phone input
    let inputs = document.querySelectorAll(".tel-input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] !== null) {
            let iti = intlTelInput(inputs[i], {
                utilsScript: "script/intlTelInput/js/utils.js",
                separateDialCode: true,
                initialCountry: "ua"
            });
        }
    }
    // Маска телефона
    // $(".phone_mask").mask("99 999 99 99");

    // Графики дашборда

    function graf(current_val, total_val, unit, arrow = null) {


        let percent_val = current_val / total_val * 100;
        let deg_val = current_val / total_val * 360;
        let coords = deg_val - 87; // 87 градусов для перемещения точки начала вверх
        if (arrow !== null) {
            $(window).on('resize', function (e) {
                if (window.innerWidth < 991) {
                    arrow.attr('style', 'transform: rotate(' + coords + 'deg) translate(45px)');
                } else {
                    arrow.attr('style', 'transform: rotate(' + coords + 'deg) translate(58px)');
                }
            }).trigger('resize');
        }
        unit.attr('stroke-dasharray', percent_val + ' 100')
    }

    function graph_octopus(current_val, total_val, unit) {
        let r0 = 0;

        $(window).on('resize', function (e) {
            if (window.innerWidth < 991) {
                r0 = 143;
            } else {
                r0 = 180;
            }

            let r1 = r0 * Math.sqrt(0.75); // Inner radius
            let d30 = 22.5 * Math.PI / 180; // 30 degrees in radians
            let d60 = 45 * Math.PI / 180; // 60 degrees in radians
            let theta = current_val / total_val * 6.2832; // 100% = 6.2832
            let percent_val = current_val / total_val * 320; // 100% = 320
            let deg_val = current_val / total_val * 360; // 100% = 360

            let r = r1 / Math.cos((theta + d30) % d60 - d30);
            let x = Math.sin(theta) * r;
            let y = Math.cos(theta) * r;
            document.getElementById('dot').style.top = x.toFixed(2) + 'px';
            document.getElementById('dot').style.left = y.toFixed(2) + 'px';
            document.getElementById('dot').style.transform = 'rotate(' + deg_val + 'deg)';

            unit.attr('stroke-dasharray', percent_val + ' 320');
        }).trigger('resize');
    }

    graph_octopus(7, 20, $('#unit-5'));
    graf(9, 20, $('#unit-0'), $('#arrow-0'));
    graf(9.68, 12, $('#unit-1'));
    graf(12, 20, $('#unit-2'));
    graf(6, 30, $('#unit-3'));
    graf(16, 20, $('#unit-4'));


    //увеличение изображений
    if ($('[data-fancybox="gallery"]').length > 0) {
        $('[data-fancybox="gallery"]').fancybox({
            thumbs: {
                showOnStart: true,
            },
            hash: true,
            hideOnOverlayClick: true,
            enableEscapeButton: true,
        });
    }

});


// let theta=0.0;
// let r0 = 190.0; // Outer radius
// let r1 = r0 * Math.sqrt(0.75); // Inner radius
// let d30 = 22.5 * Math.PI/180; // 30 degrees in radians
// let d60 = 45 * Math.PI/180; // 60 degrees in radians
//
// function move_dot() {
//     // theta += 0.025;
//     theta = 6.2832;
//     let r = r1 / Math.cos((theta + d30) % d60 - d30);
//     let x = Math.sin(theta) * r;
//     let y = Math.cos(theta) * r;
//     document.getElementById('dot').style.top=x.toFixed(2)+'px';
//     document.getElementById('dot').style.left=y.toFixed(2)+'px';
//     console.log(theta)
// }
//
// document.body.onload=function(){setInterval(move_dot,30);}