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

    new WOW().init();

    //слайдеры
    let main_swiper = new Swiper(".first-screen__container", {
        direction: 'horizontal',
        init: false,
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },

        pagination: {
            el: ".first-screen__swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
            }
        },
    });

    main_swiper.on("slideChange afterInit init", function () {
        let currentSlide = this.activeIndex + 1;
        document.querySelector('.counter').innerHTML = `
    <span class="counter__current">
    ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
    </span> 
    <span class="counter__line"></span>
    <span class="counter__total">
      ${this.slides.length < 10 ? '0' + this.slides.length : this.slides.length}
    </span>`;
    });

    main_swiper.init();

    const path_swiper = new Swiper('.path__list-wrapper', {
        slidesPerView: 1.25,
        spaceBetween: 20,

        navigation: {
            nextEl: '.path__slider-button-next',
            prevEl: '.path__slider-button-prev',
        },

        breakpoints: {

            460: {
                slidesPerView: 2.5
            },

            768: {
                slidesPerView: 3.09,
                allowSlideNext: false,
                allowSlidePrev: false,
            },

            1124: {
                slidesPerView: 5.09,
                allowSlideNext: false,
                allowSlidePrev: false,
            },
        }
    });
    const path_swiper_tree = new Swiper('.path__list-wrapper--tree', {
        slidesPerView: 1.25,
        spaceBetween: 20,

        navigation: {
            nextEl: '.path__slider-button-next',
            prevEl: '.path__slider-button-prev',
        },

        breakpoints: {

            460: {
                slidesPerView: 2.5
            },

            768: {
                slidesPerView: 3.09,
                allowSlideNext: false,
                allowSlidePrev: false,
            }
        }
    });

    //mobile menu
    let header = document.querySelector('.header');
    let header_menu_btn = document.querySelector('.header__menu-btn');

    let header_nav_items = document.querySelectorAll('.main-nav__item');


    function menu_open() {
        if (header.classList.contains('open')) {
            header.classList.remove('open');
            header_menu_btn.classList.remove('open');
        } else {
            header.classList.add('open');
            header.classList.add('open');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    for (let i = 0; i < header_nav_items.length; i++) {
        header_nav_items[i].addEventListener('click', function () {
            this.classList.toggle('focus');
        });
    }

    // скрытый текст
    $('.about__more').click(function() {
        let hideText = $('.more');
        hideText.slideToggle(350);
        $('.about__content--scroll').removeClass('hidden');
    });

    //комманда
    let slider_blocks = document.querySelectorAll('.team-slider__item');

    for (let i = 0; i < slider_blocks.length; i++) {
        let toggles = slider_blocks[i].querySelectorAll('.team-slider__toggle');
        for (let j = 0; j < toggles.length; j++) {

            let slider_content = slider_blocks[j].querySelector('.team-slider__content');
            let slider_image = slider_blocks[j].querySelector('.team-slider__image');

            toggles[j].onclick = function() {
                slider_blocks[i].classList.add('visually-hidden');
                slider_blocks[i].querySelector('.team-slider__content').classList.remove('animRight');
                slider_blocks[i].querySelector('.team-slider__image').classList.remove('animLeft');

                slider_blocks[i].querySelector('.team-slider__content').classList.remove('wow');
                slider_blocks[i].querySelector('.team-slider__image').classList.remove('wow');

                slider_blocks[i].querySelector('.team-slider__content').style.removeProperty("visibility");
                slider_blocks[i].querySelector('.team-slider__content').style.removeProperty("animation-name");

                slider_blocks[i].querySelector('.team-slider__image').style.removeProperty("visibility");
                slider_blocks[i].querySelector('.team-slider__image').style.removeProperty("animation-name");

                slider_blocks[j].classList.remove('visually-hidden');

                slider_image.classList.add('animLeft');
                slider_content.classList.add('animRight');
            };
        }
    }

    // технологии

    let tech_lists = document.querySelectorAll('.using-tech__list');
    let tech_toggles = document.querySelectorAll('.using-tech__nav-item');

    for (let i = 0; i < tech_toggles.length; i++) {
        tech_toggles[i].onclick = function() {

            for (let j = 0; j < tech_toggles.length; j++) {
                tech_toggles[j].classList.remove('active');
                tech_toggles[i].classList.add('active');

                tech_lists[j].classList.remove('active');
                tech_lists[i].classList.add('active');
            }
        };
    }
});
