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
// .attr("checked", true);
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
    }


////показ пакетов обучения
    packet_filter();

    $('.packages__input').on('change', function (e) {
        packet_filter();
    });

    function packet_filter() {

        let packet_type = $('input[name="packet-type"]:checked').val();
        let packet_time = $('input[name="packet-time"]:checked').val();
        let packet_online = $('input[name="packet-online"]:checked').val();

        // if (packet_online === undefined) {
        //     $('input[name="packet-type"]').closest($('.packages__type-list')).addClass("visually-hidden");
        // } else {
        //     $('input[name="packet-type"]').closest($('.packages__type-list')).removeClass("visually-hidden");
        // }
        //
        // if (packet_type === undefined) {
        //     $('input[name="packet-time"]').closest($('.packages__type-list')).addClass("visually-hidden");
        // } else {
        //     $('input[name="packet-time"]').closest($('.packages__type-list')).removeClass("visually-hidden");
        // }


        $('.packages__item').each(function (i, elem) {
            $(this).addClass("hide");
            console.log(packet_online + " " + packet_type + " " + packet_time);
            if ($(this).hasClass(packet_type) && $(this).hasClass(packet_time) && $(this).hasClass(packet_online)) {
                $(this).removeClass("hide");
            }
        });
    }
});
