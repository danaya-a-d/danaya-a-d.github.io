window.addEventListener('DOMContentLoaded', function (event) {

    // слайдеры

    const product_swiper = new Swiper('.arrivals__list-container', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 6,


        slidesPerView: 1.24,

        breakpoints: {
            // when window width is <= 767
            767: {
                slidesPerView: 2,
            },

            991: {
                slidesPerView: 3,
                spaceBetween: 8,
            },

            1199: {
                slidesPerView: 4,
            },

            1620: {
                slidesPerView: 5,
            }
        }

    });

    // горизонтальный скролл

    let scroll_items = document.querySelectorAll('.banners__item');

    let sliders_count = -3;
    let sliders_to_show = 3;

    for (let i = 0; i < scroll_items.length; i++) {
        sliders_count += 1;
    }

    let multiplier = sliders_count / sliders_to_show;

    let x = 100 * multiplier;

    let duration = 300 * multiplier;
    let screen_size = 991;

    let w = window.innerWidth;
    let horizontalSlide = new TimelineMax();
    let controller;
    let size = w > screen_size ? "big" : "small";
    if (size === "big") {
        makeScrollMagic();
    }

    function makeScrollMagic() {
        controller = new ScrollMagic.Controller();
        horizontalSlide.to("#js-slideContainer", 1, {x: "-" + x + "%"})

        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#js-wrapper",
            triggerHook: "onLeave",
            duration: duration + "%"
        })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller)
    }


    function sizeIt() {
        w = window.innerWidth;
        let newSize = w > screen_size ? "big" : "small";
        if (newSize !== size) {
            size = newSize;
            if (newSize === "small") {
                console.log("The screen is now small - ScrollMagic has been destroyed by aliens.");
                TweenMax.set("#target", {clearProps: "all"});
                horizontalSlide.clear();
                controller.destroy(true);
            } else {
                console.log("The screen is now large - ScrollMagic is active.");
                makeScrollMagic();
            }
        }
    }

    window.addEventListener("resize", sizeIt);

    // мобильное меню

    let header_close_menu_btn = document.querySelector('.header__menu-close-btn');
    let header_open_menu_btn = document.querySelector('.header__menu-open-btn');

    let header_nav_menu = document.querySelector('.header__nav-menu');
    let header_overlay = document.querySelector('.header__overlay');

    let header_nav_item = document.querySelectorAll('.header__nav-item');

    function menu_close() {
        header_nav_menu.classList.remove('opened');
        header_overlay.classList.remove('opened');

        for (let i = 0; i < header_nav_item.length; i++) {
            let submenu = header_nav_item[i].querySelector('.header__nav-sublist');
            if (submenu != null)
                header_nav_item[i].classList.remove('opened');
        }
    }

    function menu_open() {
        header_nav_menu.classList.add('opened');
        header_overlay.classList.add('opened');
    }

    header_open_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    header_close_menu_btn.addEventListener('click', function () {
        menu_close();
    });

    header_overlay.addEventListener('click', function () {
        menu_close();
    });

    header_overlay.addEventListener('touchmove', function () {
        menu_close();
    });

    // мобильное подменю

    for (let i = 0; i < header_nav_item.length; i++) {
        header_nav_item[i].addEventListener('click', function () {
            let submenu = header_nav_item[i].querySelector('.header__nav-sublist');
            if (submenu != null)
                header_nav_item[i].classList.toggle('opened');
        });
    }
});
