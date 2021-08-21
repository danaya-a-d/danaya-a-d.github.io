window.addEventListener('DOMContentLoaded', function (event) {

    const swiper1 = new Swiper('.upper-block__swiper', {
        // Optional parameters
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

    const swiper2 = new Swiper('.browse__list', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        slidesPerView: 3,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.categories__slider-button-next',
            prevEl: '.categories__slider-button-prev',
        },
    });

    const thumbsSwiper = new Swiper('.product__thumbs-block', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
    });

    const swiper3 = new Swiper('.product__big-photo-block', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: thumbsSwiper
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

});

