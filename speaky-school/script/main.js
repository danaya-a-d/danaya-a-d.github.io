$(document).ready(function () {
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
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    });

//маска телефона
    $(".phone_mask").mask("+7(999)999-99-99");

//мобильное меню
    let navToggle = document.querySelector('.header__nav-toggle');
    let navMain = document.querySelector('.header__nav');
    let header = document.querySelector('.header');

    navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
            navToggle.classList.add('header__nav-toggle--open');
            header.style.backgroundColor = '#FFFBED';
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
            navToggle.classList.remove('header__nav-toggle--open');
            header.style.backgroundColor = '#FFF';
        }
    });

//модальные окна
    function modal_show(modal, button_open) {

        function show() {
            modal.removeClass('hide');
            modal.addClass('show');
            $('.trial__overlay').removeClass('hide');
            $('.modal-back').removeClass('hide');
            $('.page-main').addClass('blur');
            $('.header').addClass('blur');
            $('.footer').addClass('blur');
        }

        function hide() {
            modal.addClass('hide');
            $('.trial__overlay').addClass('hide');
            $('.modal-back').addClass('hide');
            $('.page-main').removeClass('blur');
            $('.header').removeClass('blur');
            $('.footer').removeClass('blur');
        }

        button_open.on('click', function (e) {
            show();
        });
        $('.modal-close').on('click', function (e) {
            hide();
        });
        $('.trial__overlay').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });
        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide();
            }
        });
    }

    modal_show($('.modal-call'), $('.socials__item--phone'));
    modal_show($('.modal-pay'), $('.packages__button'));
    modal_show($('.modal-lesson'), $('.lesson-button'));

//переключение форм
    function form_switch(toggle) {
        toggle.on('click', function (e) {
            $('.trial__tab-toggle').removeClass('trial__tab-toggle--active');
            toggle.addClass('trial__tab-toggle--active');

            if ($('.tab-toggle-adult').hasClass('trial__tab-toggle--active')) {
                $('.form-adult').removeClass('hide');
                $('.form-child').addClass('hide');
            }
            if ($('.tab-toggle-child').hasClass('trial__tab-toggle--active')) {
                $('.form-child').removeClass('hide');
                $('.form-adult').addClass('hide');
            }
        });
    }

    form_switch($('.tab-toggle-adult'));
    form_switch($('.tab-toggle-child'));


//фильтрация пакетов
    function packet_filter() {
        let filter = '';
        let packet_params = {
            packet_type: $('input[name="packet-type"]:checked').val(),
            packet_time: $('input[name="packet-time"]:checked').val(),
            packet_online: $('input[name="packet-online"]:checked').val()
        };

        $.each(packet_params, function (i, value) {
            if (packet_params[i] !== undefined) {
                filter += '.' + value;
            }
        });
        return filter;
    }

    function packet_exist() {
        let packets = {
            packet_type: $('input[name="packet-type"]'),
            packet_time: $('input[name="packet-time"]',),
            packet_online: $('input[name="packet-online"]')
        };
        let n = true;

        $.each(packets, function (i, value) {
            if (packets[i].length) {
                if (packets[i].is(':checked')) {
                    n *= true;
                }
                if (!(packets[i].is(':checked'))) {
                    n *= false;
                }
            }
        });
        return n;
    }


//слайдеры
    $('.story__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false
    });

    if (window.matchMedia("(max-width: 600px)").matches) {
        $('.results__list').slick({
            dots: false,
            arrows: false
        });

        $('.packages__item-list').slick({
            dots: false,
            arrows: false
        });

        packet_filter_mobile();
        $(".packages__input").on('change', function (e) {
            packet_filter_mobile();
        });


        let packages_toggle_slider = $('.packages__toggle-list');
        packages_toggle_slider.slick({
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1
        });

        let slick = packages_toggle_slider.slick('getSlick');

        $('.packages__type-list').on('click', function() {
            let curSlide = slick.slideCount === slick.currentSlide ? 0 : slick.currentSlide + 1;

            packages_toggle_slider.slick('slickGoTo', curSlide, true);
            console.log(slick);
        });
    }


////показ пакетов обучения
    function packet_filter_mobile() {
        let filter = packet_filter();
        $(".packages__item-list").slick('slickUnfilter');
        if (packet_exist()) {
            $(".packages__item-list").slick('slickFilter', filter);
        } else $(".packages__item-list").slick('slickFilter', '');
    }

    function packet_filter_desk() {
        let filter = packet_filter();
        $('.packages__item').each(function () {
            $(this).hide();
            if ($(this).is(filter) && packet_exist()) {
                $(this).show();
            }
        });
    }

    if (window.matchMedia("(min-width: 601px)").matches) {
        packet_filter_desk();
        $('.packages__input').on('change', function () {
            packet_filter_desk();
        });
    }


    $.each($('.packages__toggle'), function () {
        if (!($(this).hasClass('packages__toggle--mediactive'))) {
            $(this).closest('.packages__toggle-item').children('.packages__type-list').hide();
        }
    });

    $('.packages__input').on('change', function () {
        let toggle = $(this).closest('.packages__toggle-item').children('.packages__toggle');
        let toggle_next = $(this).closest('.packages__toggle-item').next().children('.packages__toggle');
        let toggle_type = $(this).closest('.packages__toggle-item').children('.packages__toggle-type');

        let toggle_list = $(this).closest('.packages__toggle-item').children('.packages__type-list');
        let toggle_list_next = $(this).closest('.packages__toggle-item').next().children('.packages__type-list');
        let toggle_list_prev = $(this).closest('.packages__toggle-item').prev().children('.packages__type-list');

        toggle.removeClass('packages__toggle--mediactive');
        toggle.addClass('packages__toggle--active');

        toggle_list.hide();
        toggle_list_prev.hide();
        toggle_list_next.show();

        toggle_next.addClass('packages__toggle--mediactive');
        toggle_type.text($(this).attr('placeholder'));
    });

    $('.packages__toggle').on('click', function () {
        let toggle_list = $(this).closest('.packages__toggle-item').children('.packages__type-list');
        let toggle_radio = $(this).closest('.packages__toggle-item').find('.packages__input');
        let toggle_type = $(this).closest('.packages__toggle-item').find('.packages__toggle-type');

        let toggle_list_next_all = $(this).closest('.packages__toggle-item').nextAll().children('.packages__type-list');
        let toggle_radio_next_all = $(this).closest('.packages__toggle-item').nextAll().find('.packages__input');
        let toggle_type_next_all = $(this).closest('.packages__toggle-item').nextAll().find('.packages__toggle-type');
        let toggle_next_all = $(this).closest('.packages__toggle-item').nextAll().find('.packages__toggle');

        if ($(this).hasClass('packages__toggle--active')) {
            $(this).removeClass('packages__toggle--active');
            $(this).addClass('packages__toggle--mediactive');
            toggle_radio.prop('checked', false);
            toggle_type.text('');
            toggle_list.show();

            toggle_next_all.removeClass('packages__toggle--mediactive');
            toggle_next_all.removeClass('packages__toggle--active');
            toggle_radio_next_all.prop('checked', false);
            toggle_type_next_all.text('');
            toggle_list_next_all.hide();
        }


        if (window.matchMedia("(min-width: 601px)").matches) {
            packet_filter_desk();
        }
        if (window.matchMedia("(max-width: 600px)").matches) {
            packet_filter_mobile();
        }
    });
});
