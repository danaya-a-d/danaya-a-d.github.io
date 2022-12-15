window.addEventListener('DOMContentLoaded', function (event) {

    // Slider

    const reviews_right = new Swiper('.reviews-right', {
        slidesPerView: 'auto',
        speed: 25000,
        loop: true,

        freeMode: true,
        freeModeMomentum: false,
        freeModeMomentumBounce: false,

        autoplay: {
            delay: 0,
            disableOnInteraction: true,
            waitForTransition: false,
        },
    })

    const reviews_left = new Swiper('.reviews-left', {
        slidesPerView: 'auto',
        speed: 25000,
        loop: true,

        freeMode: true,
        freeModeMomentum: false,
        freeModeMomentumBounce: false,
        grabCursor: false,

        autoplay: {
            delay: 0,
            disableOnInteraction: true,
            waitForTransition: false,
            reverseDirection: true,
        },
    })

    //
    // document.getElementsByClassName("swiper-container")[0].addEventListener("mouseover", function( ) {
    //     reviews_right.autoplay.stop();
    // });
    //
    // document.getElementsByClassName("swiper-container")[0].addEventListener("mouseout", function( ) {
    //     reviews_right.autoplay.start();
    // });
    //
    // document.getElementsByClassName("swiper-container")[0].addEventListener("mouseover", function( ) {
    //     reviews_left.autoplay.stop();
    //     reviews_left.speed(0);
    // });
    //
    // document.getElementsByClassName("swiper-container")[0].addEventListener("mouseout", function( ) {
    //     reviews_left.autoplay.start();
    //     reviews_left.speed(15000);
    // });
});
