$('.feedbacks__list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.switch__button--left'),
    nextArrow: $('.switch__button--right '),
    // variableWidth: true
});

$('.individual__filling-list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.individual__filling-switch-l'),
    nextArrow: $('.individual__filling-switch-r'),
    // variableWidth: true
});


$('.individual__design-list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.individual__design-switch-l'),
    nextArrow: $('.individual__design-switch-r'),
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
    ]
    // variableWidth: true
});


if (window.matchMedia("(max-width: 768px)").matches) {
    $('.individual__size-list').slick(
        {
            breakpoint: 768,
            dots: false,
            dotsClass: "my-dots",
            arrows: false,
            adaptiveHeight: true,
        }
    );
}