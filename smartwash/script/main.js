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
    });

    $('.facilities__list').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
    });

    $('.visual__sliders').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
    });

    $('.reasons__list').slick({
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        dots: true,
        arrows: false,
        infinite: true,
    });

    $('.reviews__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
    });

    $('.professionals__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
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

});