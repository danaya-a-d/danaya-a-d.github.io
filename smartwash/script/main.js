$(document).ready(function () {

    //Маска телефона
    $(".phone_mask").mask("+7(999)999-99-99");

    $('.why-us__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.facilities__list').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.visual__sliders').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true
    });

    $('.reasons__list').slick({
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.reviews__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.professionals__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });


    $('.fixed-video__close').on('click', function (e) {
        $('.fixed-video').hide();
    });

    //Модальные окна
    function show(modal) {
        modal.removeClass('hide');
        modal.addClass('show');
        $('.modal__overlay').removeClass('hide');
        $('.modal-back').removeClass('hide');
    }

    function hide(modal) {
        modal.addClass('hide');
        $('.modal__overlay').addClass('hide');
        $('.modal-back').addClass('hide');
    }

    function modal_show(modal, button_open) {

        if (button_open !== null) {
            button_open.on('click', function (e) {
                show(modal);
            });
        }

        $('.modal-close').on('click', function (e) {
            hide(modal);
        });

        $('.modal__overlay').on('click', function (e) {
            modal.addClass('hide');
            hide(modal);
        });

        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide(modal);
            }
        });
    }

    modal_show($('.modal--recall'), $('.recall-js'));
    modal_show($('.modal--calc'), $('.calc-js'));
    modal_show($('.modal--table'), $('.table-js'));
    modal_show($('.modal--step-1'), $('.request-js'));

    $('.modal--step-1 .button').on('click', function (e) {
        e.preventDefault();
        hide($('.modal--step-1'));
        show($('.modal--step-2'));
        modal_show($('.modal--step-2'), null)
    });

    $('.modal--step-2 .button').on('click', function (e) {
        e.preventDefault();
        hide($('.modal--step-2'));
        show($('.modal--step-3'));
        modal_show($('.modal--step-3'), null)
    });

    $('.modal--step-3 .button').on('click', function (e) {
        e.preventDefault();
        hide($('.modal--step-3'));
        show($('.modal--step-4'));
        modal_show($('.modal--step-4'), null)
    });


    $('.recall-close').on('click', function (e) {
        hide($('.modal--table'));
        show($('.modal--recall'));
        modal_show($('.modal--recall'), null)
    });


    let first = true;
    $(document).mouseleave(function () {
        if (first && $('.modal-back').hasClass('hide')) {
            show($('.modal--wait'));
            modal_show($('.modal--wait'), null)
            first = false;
        }
    });

    function fast_toggle(select) {
        $('.fast__nav-button' + select).on('click', function (e) {
            $('.fast__nav-button').addClass('button--empty');
            $('.fast__nav-item').addClass('inactive');

            $('.fast__nav-button').removeClass('button--noborder');
            $('.fast__nav-item').removeClass('active');
            $('.fast__nav-item').removeClass('show');


            if ($('.fast__nav-button' + select).hasClass('button--empty')) {

                $('.fast__nav-button' + select).removeClass('button--empty');
                $('.fast__nav-item' + select).removeClass('inactive');

                $('.fast__nav-button' + select).addClass('button--noborder');
                $('.fast__nav-item' + select).addClass('active');
                $('.fast__nav-item' + select).addClass('show');
            }
        });
    }

    fast_toggle('.control');
    fast_toggle('.quality');
    fast_toggle('.start');

    function visual_toggle(select) {
        $('.visual__nav-item' + select).on('click', function (e) {

            $('.visual__nav-item').removeClass('active');
            $('.visual__item').addClass('hidden');

            $('.visual__nav-item' + select).addClass('active');
            $('.visual__item' + select).removeClass('hidden');
        });
    }

    visual_toggle('.unloading');
    visual_toggle('.review');
    visual_toggle('.full');


    let range_auto = document.getElementById('range-auto');
    let range_check = document.getElementById('range-check');
    let range_chem = document.getElementById('range-chem');
    let range_rent = document.getElementById('range-rent');
    let range_water = document.getElementById('range-water');

    const setting_range = {
        start: 850,
        range: {
            'min': 500,
            'max': 3500
        },
        connect: [true, false],
        // Show a scale with the slider
        pips: {
            mode: 'steps',
            stepped: true,
            density: 4
        }
    }

    noUiSlider.create(range_auto, setting_range);
    noUiSlider.create(range_check, setting_range);
    noUiSlider.create(range_chem, setting_range);
    noUiSlider.create(range_rent, setting_range);
    noUiSlider.create(range_water, setting_range);


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


    $('.quiz__fieldset').on('click', function (e) {
        if ($(this).nextAll(".quiz__fieldset").length !== 0) {
            $(this).addClass('hide');
            $(this).next(".quiz__fieldset").removeClass('hide');
        }
    });

});