$(document).ready(function () {
    //Слайдер верхнего блока
    $('.banner__list').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //Маска телефона
    $(".call-me-input").mask("+38(999)999-99-99");
});