window.addEventListener('DOMContentLoaded', function (event) {

    // слайдеры

    const arrival_swiper = new Swiper('.arrivals__list-container', {
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

    const offer_great = new Swiper('.offer-great', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 24,
        slidesPerView: 2,

        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 8,
            },

            1199: {
                slidesPerView: 3,
            },

            1620: {
                slidesPerView: 4,
            }
        }
    });

    const offer_like = new Swiper('.offer-like', {
        direction: 'horizontal',
        loop: false,
        spaceBetween: 24,
        slidesPerView: 2,

        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 18,
            },

            1199: {
                slidesPerView: 3,
            },

            1620: {
                slidesPerView: 4,
            }
        }
    });

    const product_thumbs_swiper = new Swiper('.card__thumbs-block', {
        direction: 'vertical',
        loop: false,
        speed: 1000,
        slidesPerView: 6,
        spaceBetween: 24,
    });

    const product_swiper = new Swiper('.card__big-photo-block', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        thumbs: {
            swiper: product_thumbs_swiper
        },

        navigation: {
            nextEl: '.card__slider-button-next',
            prevEl: '.card__slider-button-prev',
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

    // фильтр категорий

    let category_filter = document.querySelector('.category__filters');

    document.querySelector('body').addEventListener('click', (e) => {

        const target = e.target;
        if (target.classList.contains('filters-btn-js')) {
            category_filter.classList.toggle('open');
        }
    });


    // видимость кнопки фильтрации

    // Получаем нужный элемент
    let category_nav = document.querySelector('#category-nav-js');
    let filters_fixed_btn = document.querySelector('#filters-fixed-btn-js');

    let Visible = function (target) {
        // Все позиции элемента
        let targetPosition = {
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

        if (targetPosition.bottom > windowPosition.top &&
            targetPosition.top < windowPosition.bottom &&
            targetPosition.right > windowPosition.left &&
            targetPosition.left < windowPosition.right) {
            // Если элемент полностью видно, то запускаем следующий код
            filters_fixed_btn.classList.add('hide');
        } else {
            // Если элемент не видно, то запускаем этот код
            filters_fixed_btn.classList.remove('hide');
        }
    };

    // Запускаем функцию
    if (category_nav !== null) {

        window.addEventListener('scroll', function () {
            Visible(category_nav);
        });

        Visible(category_nav);
    }


    // открытие блоков описания товара

    let filters_section = document.querySelectorAll('.filters__section');

    if (filters_section !== null) {
        for (let i = 0; i < filters_section.length; i++) {
            let filters_title = filters_section[i].querySelector('.filters__title');

            filters_title.addEventListener('click', function () {
                filters_section[i].classList.toggle('active');
            });
        }
    }


    // плавная прокрутка к якорю

    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }


    // открытие блоков описания товара

    let text_block = document.querySelectorAll('.text-block');

    if (text_block !== null) {
        for (let i = 0; i < text_block.length; i++) {

            text_block[i].addEventListener('click', function () {
                text_block[i].classList.toggle('active');
            });
        }
    }

});
