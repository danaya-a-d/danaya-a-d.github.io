window.addEventListener('DOMContentLoaded', function (event) {

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // Slider
    const reviews_right = new Swiper('.reviews-right', {
        slidesPerView: 'auto',
        loop: true,
        loopAdditionalSlides: 4,
        speed: 25000,

        autoplay: {
            delay: 1,
        },
    })

    const reviews_left = new Swiper('.reviews-left', {

        slidesPerView: 4,
        loop: true,
        speed: 25000,


        // freeMode: true,
        // freeModeMomentum: false,
        // freeModeMomentumBounce: false,

        autoplay: {
            delay: 1,
            reverseDirection: true,
            disableOnInteraction: false,
            waitForTransition: false, // иначе улетает при перекл страницы
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

// Mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');
    let header_overlay = document.querySelector('.header__overlay');


    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
            header_overlay.classList.remove('open');
        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
            header_overlay.classList.add('open');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    header_overlay.addEventListener('click', function () {
        menu_open();
    });

    header_overlay.addEventListener('touchmove', function () {
        menu_open();
    });


});
