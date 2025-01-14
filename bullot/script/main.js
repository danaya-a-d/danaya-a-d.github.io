$(window).on('load', function () {

    new WOW().init();

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

    //mobile menu
    let header = document.querySelector('.header');
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');

    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
            header.classList.remove('open');

            if (languages.classList.contains('open')) {
                languages.classList.remove('open');
            }

            for (let i = 0; i < header_nav_section.length; i++) {
                header_nav_section[i].classList.remove('active');
            }

        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
            header.classList.add('open');
        }
    }

    if (header_menu_btn) {
        header_menu_btn.addEventListener('click', function () {
            menu_open();
        });
    }


    //header scroll
    function initHeaderScrollEffect(header) {
        if (window.scrollY > 50) {
            header.classList.add('header_scrolled');
            header.classList.remove('header_transparent');
        } else {
            header.classList.add('header_transparent');
            header.classList.remove('header_scrolled');
        }

        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header_scrolled');
                header.classList.remove('header_transparent');
            } else {
                header.classList.add('header_transparent');
                header.classList.remove('header_scrolled');
            }
        });
    }

    if (header) {
        initHeaderScrollEffect(header);
    }

    //submenu
    let header_nav_section = document.querySelectorAll('.main-nav__section');

    for (let i = 0; i < header_nav_section.length; i++) {
        let header_nav_subtitle = header_nav_section[i].querySelector('.main-nav__subtitle');

        header_nav_subtitle.addEventListener('click', function () {
            header_nav_section[i].classList.toggle('active');
        });
    }

    //languages
    let languages = document.querySelector('.languages');

    if (languages) {
        languages.addEventListener('click', function () {
            languages.classList.toggle('open');
        });
    }

    //search
    let news_form = document.querySelector('.top-news__form');
    let faq_form = document.querySelector('.faq-head__form');

    function open_form(form) {
        if (form) {
            form.addEventListener('focus', e => form.classList.add('active'), true)
            form.addEventListener('blur', e => form.classList.remove('active'), true)
        }
    }

    open_form(news_form);
    open_form(faq_form);

    //contact us
    let phone_items = document.querySelectorAll('.support-phones__country');
    let country_items = document.querySelectorAll('.support-countries__item');

    if (phone_items) {
        for (let i = 0; i < country_items.length; i++) {
            country_items[i].addEventListener('click', function (e) {
                e.preventDefault();

                for (let j = 0; j < country_items.length; j++) {
                    phone_items[j].classList.remove('active');
                    country_items[j].classList.remove('active');
                }

                phone_items[i].classList.add('active');
                country_items[i].classList.add('active');
            });
        }
    }

    //webinars
    let webinars__buttons = document.querySelectorAll('.webinars__button');
    let webinars_sections = document.querySelectorAll('.webinars__section');

    if (webinars__buttons) {
        for (let i = 0; i < webinars__buttons.length; i++) {
            webinars__buttons[i].addEventListener('click', function (e) {
                e.preventDefault();

                for (let j = 0; j < webinars__buttons.length; j++) {
                    webinars__buttons[j].classList.remove('active');
                    webinars_sections[j].classList.remove('active');
                }

                webinars__buttons[i].classList.add('active');
                webinars_sections[i].classList.add('active');
            });
        }
    }

    //account types
    const container = document.querySelector('.acc-types__list');

    if (container) {
        const cards = container.querySelectorAll('.acc-types__item');

        if (cards.length > 0) {
            function removeActiveClasses() {
                cards.forEach(card => {
                    card.classList.remove('active');
                });
            }

            function makeActive(card) {
                removeActiveClasses();
                card.classList.add('active');
            }

            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    makeActive(card);
                });
            });

            container.addEventListener('mouseleave', () => {
                makeActive(cards[0]);
            });
        }
    }

    //sliders
    function updateMask(swiper) {
        const container = document.querySelector('.news-slider__container');

        if (swiper.isEnd) {
            container.classList.add('mask-left');
            container.classList.remove('mask-right');
        } else {
            container.classList.remove('mask-left');
            container.classList.add('mask-right');
        }
    }

    const news_slider = new Swiper('.news-slider__container', {
        direction: 'horizontal',
        slidesPerView: 1.14,
        spaceBetween: 16,

        navigation: {
            nextEl: '.news-slider__slider-button-next',
            prevEl: '.news-slider__slider-button-prev'
        },

        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 1.5,
                spaceBetween: 32,
            },

            1023: {
                direction: 'horizontal',
                slidesPerView: 2.4,
                spaceBetween: 24,
            }
        },

        on: {
            init: function () {
                updateMask(this);
            },
            slideChange: function () {
                updateMask(this);
            },
        },
    });

    const our_people_swiper = new Swiper('.our-people__container', {
        direction: 'horizontal',
        slidesPerView: 1.46,
        spaceBetween: 16,
        loop: true,

        navigation: {
            nextEl: '.our-people__slider-button-next',
            prevEl: '.our-people__slider-button-prev'
        },

        pagination: {
            el: '.our-people__pagination',
            clickable: true
        },

        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 16,
                centeredSlides: true,
            },

            1023: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 16,
                centeredSlides: true,
            }
        }
    });

    const stocks_swiper = new Swiper('.stocks__container', {
        direction: 'horizontal',
        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: true,
        centeredSlides: false,

        navigation: {
            nextEl: '.stocks__slider-button-next',
            prevEl: '.stocks__slider-button-prev',
        },

        pagination: {
            el: '.stocks__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },

        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 1.9,
                spaceBetween: 24,
                centeredSlides: true
            },

            1023: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 24,
                centeredSlides: false
            }
        }
    });

    const invest_swiper = new Swiper('.invest-slider__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        loop: true,
        speed: 0,
        effect: 'fade',
        autoHeight: true,
        fadeEffect: {
            crossFade: true,
        },

        navigation: {
            nextEl: '.invest-slider__slider-button-next',
            prevEl: '.invest-slider__slider-button-prev',
        },

        pagination: {
            el: '.invest-slider__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
    });

    //animations
    const ticker = document.querySelector('.ticker');
    const rows = document.querySelectorAll('.ticker__row');

    ticker.addEventListener('animationend', () => {
        rows.forEach(row => {
            row.style.animationPlayState = 'running';
        });
    });

    const elements = document.querySelectorAll(".ticker");
    const wowInstance = new WOW();
    wowInstance.init();

    const updateAnimationClasses = () => {
        const screenWidth = window.innerWidth;

        elements.forEach((element) => {
            element.classList.remove("slideInRight", "fadeInFromUpMargin");

            if (screenWidth > 768) {
                element.classList.add("slideInRight");
            } else {
                element.classList.add("fadeInFromUpMargin");
            }
        });

        wowInstance.sync();
    };

    updateAnimationClasses();
    window.addEventListener("resize", updateAnimationClasses);
});