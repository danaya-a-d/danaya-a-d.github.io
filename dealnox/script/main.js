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
        // simulateTouch: false, allowSwipeToNext: false, allowSwipeToPrev: false,
        slidesPerView: 'auto',
        loop: true,
        loopAdditionalSlides: 4,
        speed: 25000,

        freeMode: true,
        freeModeMomentum: false,
        freeModeMomentumBounce: false,

        autoplay: {
            delay: 0,
        },
    })

    const reviews_left = new Swiper('.reviews-left', {
        // simulateTouch: false, allowSwipeToNext: false, allowSwipeToPrev: false,
        slidesPerView: 'auto',
        loop: true,
        speed: 25000,


        freeMode: true,
        freeModeMomentum: false,
        freeModeMomentumBounce: false,

        autoplay: {
            delay: 0,
            reverseDirection: true,
            disableOnInteraction: false,
            waitForTransition: false, // иначе улетает при перекл страницы
        },
    })

    reviews_left.autoplay.stop();
    // reviews_right.autoplay.stop();


// Получаем нужный элемент
    var element = document.querySelector('.reviews-left');

    var Visible = function (target) {
        // Все позиции элемента
        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            reviews_left.autoplay.start();
            // reviews_right.autoplay.start();
        }
    };

// Запускаем функцию при прокрутке страницы
    window.addEventListener('scroll', function () {
        Visible(element);
    });


    // reviews_left.autoplay.start();

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