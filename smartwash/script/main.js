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
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        infinite: false,
    });

});