

$('.feedbacks__list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.feedbacks__switch-l'),
    nextArrow: $('.feedbacks__switch-r '),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
});

$('.individual__filling-list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.individual__filling-switch-l'),
    nextArrow: $('.individual__filling-switch-r'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
            }
        },
    ]
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
                arrows: false,
                dots: true,
                dotsClass: "my-dots",
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        },
    ]
});


if (window.matchMedia("(max-width: 768px)").matches) {
    $('.individual__size-list').slick(
        {
            breakpoint: 768,
            dots: true,
            dotsClass: "my-dots",
            arrows: false,
            adaptiveHeight: true,
        }
    );
}
