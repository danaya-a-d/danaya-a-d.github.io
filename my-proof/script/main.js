window.addEventListener('DOMContentLoaded', function (event) {

    const upper_block_swiper = new Swiper('.upper-block__swiper', {
        direction: 'horizontal',
        loop: true,
        effect: 'fade',
        speed: 1000,
        fadeEffect: {
            crossFade: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.upper-block__slider-button-next',
            prevEl: '.upper-block__slider-button-prev',
        },
    });

    const browse_list = new Swiper('.browse__list', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,

        breakpoints: {
            // when window width is <= 769px
            769: {
                slidesPerView: 3,
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.categories__slider-button-next',
            prevEl: '.categories__slider-button-prev',
        }
    });


    const product_thumbs_swiper = new Swiper('.product__thumbs-block', {
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
    });

    const product_swiper = new Swiper('.product__big-photo-block', {
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: product_thumbs_swiper
        },

        pagination: {
            el: '.product__swiper-pagination',
            type: 'bullets',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.product__slider-button-next',
            prevEl: '.product__slider-button-prev',
        }
    });


    /////// ОТКРЫТИЕ ИСТОРИИ ЗАКАЗОВ ///////
    let history_item_content = document.querySelectorAll('.history__item-content');

    if (history_item_content !== undefined) {
        for (let i = 0; i < history_item_content.length; i++) {

            history_item_content[i].addEventListener('click', function (event) {

                console.log(this);

                if (this.classList.contains('inactive')) {
                    this.classList.remove('inactive');
                    this.classList.add('active');
                }

                else if (this.classList.contains('active')) {
                    this.classList.add('inactive');
                    this.classList.remove('active');
                }
            });
        }
    }


    /////// ОТКРЫТИЕ МОБИЛЬНОГО МЕНЮ ///////
    let header_nav = document.querySelector('.header__nav');
    let open_menu = document.querySelector('.header__button-open-menu');
    let overlay = document.querySelector('.overlay');

    if (header_nav !== undefined) {
        open_menu.addEventListener('click', function (event) {
            if (header_nav.classList.contains('close')) {
                header_nav.classList.remove('close');
                open_menu.classList.remove('close');
                overlay.classList.remove('close');
            } else {
                header_nav.classList.add('close');
                open_menu.classList.add('close');
                overlay.classList.add('close');
            }
        });
    }

});