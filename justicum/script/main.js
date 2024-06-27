//Map
function initMap() {
    // The location of Uluru
    const uluru = {lat: 50.438549, lng: 30.416071};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        fullscreenControl: false,
        center: uluru,
    });

    const icon = {
        url: "img/map-marker.svg", // url
        scaledSize: new google.maps.Size(80, 80), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(40, 40) // anchor
    };

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: icon
    });
}

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

    //Banking
    let overview__buttons = document.querySelectorAll('.overview__nav');
    let overview__blocks = document.querySelectorAll('.overview__item')

    if (overview__buttons !== null) {
        for (let i = 0; i < overview__buttons.length; i++) {
            overview__buttons[i].addEventListener('click', function (event) {

                for (let j = 0; j < overview__buttons.length; j++) {
                    overview__buttons[j].classList.remove('active');
                    overview__blocks[j].classList.remove('active');
                }

                overview__buttons[i].classList.add('active');
                overview__blocks[i].classList.add('active');
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

    const reviews_swiper = new Swiper('.reviews__container', {
        direction: 'horizontal',
        slidesPerView: 1.13,
        spaceBetween: 8,
        loop: true,

        navigation: {
            nextEl: '.reviews__slider-button-next',
            prevEl: '.reviews__slider-button-prev',
        },

        breakpoints: {
            1123: {
                slidesPerView: 2,
                spaceBetween: 16
            },

            767: {
                slidesPerView: 1.25,
                spaceBetween: 16,
            }
        }
    });

    const history_swiper = new Swiper('.history__container', {
        direction: 'horizontal',
        slidesPerView: 1.13,
        spaceBetween: 8,
        loop: false,

        navigation: {
            nextEl: '.history__slider-button-next',
            prevEl: '.history__slider-button-prev',
        },

        breakpoints: {
            1123: {
                slidesPerView: 2.4,
                spaceBetween: 16,
            },

            767: {
                slidesPerView: 1.5,
                spaceBetween: 16,
            }
        }
    });

    //Languages
    let languages = document.querySelector('.languages');

    languages.addEventListener('click', function () {
        languages.classList.toggle('open');
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
            if (languages.classList.contains('open')) {
                languages.classList.remove('open');
            }
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
