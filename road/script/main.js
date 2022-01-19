$(document).ready(function () {

    // //кастомный select
    // jQuery(($) => {
    //     $('.select').on('click', '.select__head', function () {
    //         if ($(this).hasClass('open')) {
    //             $(this).removeClass('open');
    //             $(this).next().fadeOut();
    //         } else {
    //             $('.select__head').removeClass('open');
    //             $('.select__list').fadeOut();
    //             $(this).addClass('open');
    //             $(this).next().fadeIn();
    //         }
    //     });
    //
    //     $('.select').on('click', '.select__item', function () {
    //         $('.select__head').removeClass('open');
    //         $(this).parent().fadeOut();
    //         $(this).parent().prev().text('');
    //         $(this).parent().prev().append($(this).html());
    //         $(this).parent().prev().prev().val($(this).text());
    //     });
    //
    //     $(document).click(function (e) {
    //         if (!$(e.target).closest('.select').length) {
    //             $('.select__head').removeClass('open');
    //             $('.select__list').fadeOut();
    //         }
    //     });
    // });

    // слайдеры
    function slick_mobile(slider, settings, wide) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < wide) {
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

    const settings_ban = {
        dots: true,
        arrows: false,
        slidesToShow: 1,
        mobileFirst: true,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 769,
                settings: 'unslick'
            },
        ]
    };

    slick_mobile($('.advantages--slider'), settings_ban, 769);
    slick_mobile($('.features__list'), settings_ban, 769);
    slick_mobile($('.specialization__list'), settings_ban, 769);
    slick_mobile($('.history__list'), settings_ban, 769);
    slick_mobile($('.indications__list'), settings_ban, 769);

    // $('.slick-dots').prepend('<div><a class="prev-btn">Prev</a></div>');
    // $('.slick-dots').append('<div><a class="next-btn">Next</a></div>');

    //увеличение изображений
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

    //модальные окна
    function modal_show(modal, button_open) {

        function show() {
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
        $('.modal-close').on('click', function (e) {
            hide();
        });
        $('.modal-overlay').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });
        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide();
            }
        });
    }

    modal_show($('.modal'), $('.button-modal'));

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
        $('.header__nav').addClass('open');
        $('.header__mobile-btn').removeClass('close');
        $('.header__mobile-btn').addClass('open');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
        $('.header__nav').removeClass('open');
        $('.header__mobile-btn').addClass('close');
        $('.header__mobile-btn').removeClass('open');
    }

    $('.header__mobile-btn').on('click', function () {
        if ($(".header__nav").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    // включение видео
    $('.gallery__video-link').on('click', function () {
        let $video = $(this).find('.gallery__video'),
            src = $video.attr('src');
        $video.removeAttr('srcdoc');

        $video.attr('src', src + '?&autoplay=1');
        $(this).find('.gallery__play-btn').hide();
        $(this).addClass('play');
    });

});