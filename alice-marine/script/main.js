$(document).ready(function () {
    $('.upper-block__sliders').slick({
        dots: true,
        arrows: true,
        infinite: true
    });


    $('.products--slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        infinite: false
    });

    $('.articles__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false
    });

    $('.production__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false
    });

    //Плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {
        let offset;
        if ($(this.hash).offset()) {
            offset = $(this.hash).offset().top
        } else offset = 0;

        $('html, body').stop().animate({
            scrollTop: offset
        }, 1000);
        e.preventDefault();
    });
});


