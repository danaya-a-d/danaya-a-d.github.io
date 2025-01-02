$(window).on('load', function () {

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

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

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

    initHeaderScrollEffect(header);

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

    languages.addEventListener('click', function () {
        languages.classList.toggle('open');
    });

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
});