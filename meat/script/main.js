
$(document).ready(function () {

    //Слайдер
    $('.upper-block__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000
    });

    //маска телефона
    $(".phone_mask").mask("+380(99)999-99-99");
});