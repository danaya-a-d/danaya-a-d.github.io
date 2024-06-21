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

    //Bank
    let bank_item = document.querySelectorAll('.browse__item');

    if (bank_item !== null) {
        for (let i = 0; i < bank_item.length; i++) {
            bank_item[i].addEventListener('click', function (event) {
                this.classList.toggle('active');
            });
        }
    }

    //FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== null) {
        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {
                this.classList.toggle('active');
            });
        }
    }

    //Sliders
    const related_swiper = new Swiper('.related__container', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 16,
        loop: true,

        navigation: {
            nextEl: '.related__slider-button-next',
            prevEl: '.related__slider-button-prev',
        },

        on: {
            resize: function enableOnlyDesctop(swiper) {
                if (1123 > window.innerWidth) {
                    swiper.disable()
                    swiper.el.classList.add('-non-slider')
                } else {
                    swiper.enable()
                    swiper.el.classList.remove('-non-slider')
                }
            },
        }
    });


    //Mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header = document.querySelector('.header');
    let header_nav_menu = document.querySelector('.header__nav');

    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
            header.classList.remove('open');

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


    //Submenu
    let header_nav_section = document.querySelectorAll('.main-nav__item');

    for (let i = 0; i < header_nav_section.length; i++) {
        let header_nav_link = header_nav_section[i].querySelector('.main-nav__link');

        header_nav_link.addEventListener('click', function () {
            header_nav_section[i].classList.toggle('active');
        });
    }

});
