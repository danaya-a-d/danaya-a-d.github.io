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

//слайдер
$('.story__list').slick({
    dots: true,
    dotsClass: "my-dots",
    arrows: false
});


//////////////// МОБИЛЬНОЕ МЕНЮ ////////////////
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