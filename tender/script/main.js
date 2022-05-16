window.addEventListener('DOMContentLoaded', function (event) {


    let filter_slider = document.getElementById('filter-slider-js');
    let filter_reset = document.getElementById('filter-reset-js');
    let filter_form = document.getElementById('filter-form-js');

    let card_text_block = document.querySelectorAll('.card__text-block');
    let footer_collapse_btn = document.querySelectorAll('.footer-collapse-btn');
    let checkout_collapse_btn = document.querySelectorAll('.checkout-collapse-btn');

    let menu_open_btn = document.querySelector('.header__menu-open-btn');
    let menu_close_btn = document.querySelector('.header__menu-close-btn');
    let menu_overlay = document.querySelector('.header__mobile-menu-overlay');
    let menu_mobile = document.querySelector('.header__mobile-menu ');

    const lightbox = GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });

    if (filter_slider !== null) {
        noUiSlider.create(filter_slider, {
            start: [1, 1000],
            connect: false,
            tooltips: true,

            format: {
                to: (v) => parseFloat(v).toFixed(0),
                from: (v) => parseFloat(v).toFixed(0)
            },


            range: {
                'min': 0,
                'max': 1000
            }
        });
    }


    // сброс формы
    if (filter_form !== null) {
        filter_reset.addEventListener('click', function () {
            filter_form.reset();
            filter_slider.noUiSlider.reset()
        });
    }


    // слайдеры
    const product_swiper = new Swiper('.card__big-photo-block', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.card__slider-button-next',
            prevEl: '.card__slider-button-prev',
        }
    });


    // открытие блоков описания товара
    if (card_text_block !== null) {
        for (let i = 0; i < card_text_block.length; i++) {
            let card_text = card_text_block[i].querySelector('.card__text');

            card_text_block[i].addEventListener('click', function () {
                card_text_block[i].classList.toggle('active');
                card_text.classList.toggle('active');
            });
        }
    }


    // открытие блоков футера
    if (footer_collapse_btn !== null) {
        for (let i = 0; i < footer_collapse_btn.length; i++) {
            footer_collapse_btn[i].addEventListener('click', function () {
                footer_collapse_btn[i].classList.toggle('active');
            });
        }
    }

    // открытие блоков чекаут
    if (checkout_collapse_btn !== null) {
        for (let i = 0; i < checkout_collapse_btn.length; i++) {
            checkout_collapse_btn[i].addEventListener('click', function () {
                checkout_collapse_btn[i].classList.toggle('active');
            });
        }
    }


    // открытие истоии заказов
    let history_item_content = document.querySelectorAll('.history__item-content');

    if (history_item_content !== null) {
        for (let i = 0; i < history_item_content.length; i++) {

            let show_btn = history_item_content[i].querySelector('.history-show');
            let hide_btn = history_item_content[i].querySelector('.history__item-btn-close');
            let history_nav = history_item_content[i].querySelector('.history__nav');

            history_nav.addEventListener('click', function (event) {
                if (!history_item_content[i].classList.contains('active')) {
                    history_item_content[i].classList.add('active');
                } else if (history_item_content[i].classList.contains('active')) {
                    history_item_content[i].classList.remove('active');
                }
            });

            hide_btn.addEventListener('click', function (event) {
                if (history_item_content[i].classList.contains('active')) {
                    history_item_content[i].classList.remove('active');
                }
            });
        }
    }


    // фильтр категорий
    document.querySelector('body').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('filters-btn-js')) {
            filter_form.classList.toggle('open');
        }
    });


    // открытие/закрытие мобильного меню
    menu_open_btn.addEventListener('click', function (event) {
        menu_mobile.classList.remove('close');
    });

    menu_overlay.addEventListener('click', function (event) {
        menu_mobile.classList.add('close');
    });

    menu_overlay.addEventListener('touchmove', function (event) {
        menu_mobile.classList.add('close');
    });

    menu_close_btn.addEventListener('click', function (event) {
        menu_mobile.classList.add('close');
    });


    // открытие подменю
    let drop_downs = document.querySelectorAll('.drop-down')

    let drop_down_languages = document.querySelectorAll('.drop-down-languages')
    let drop_down_languages_btn = document.querySelectorAll('.drop-down-languages-btn')

    let drop_down_login = document.querySelectorAll('.drop-down-login')
    let drop_down_login_btn = document.querySelectorAll('.drop-down-login-btn')

    let drop_down_registration = document.querySelectorAll('.drop-down-registration')
    let drop_down_registration_btn = document.querySelectorAll('.drop-down-registration-btn')

    let desktop_search = document.querySelectorAll('.desktop-search')
    let desktop_search_btn = document.querySelectorAll('.desktop-search-btn')

    let modal_cart = document.querySelectorAll('.modal-back')
    let modal_cart_btn = document.querySelectorAll('.modal-cart-btn')

    drop_down(drop_down_languages, drop_down_languages_btn);
    drop_down(drop_down_login, drop_down_login_btn);
    drop_down(drop_down_registration, drop_down_registration_btn);
    drop_down(desktop_search, desktop_search_btn);
    drop_down(modal_cart, modal_cart_btn);

    document.querySelector('body').addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('drop-down-close-btn')) {

            menu_mobile.classList.add('close');

            for (let i = 0; i < drop_downs.length; i++) {
                drop_downs[i].classList.add('close');
            }
        }
    });

    function drop_down(block, button) {
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function () {
                for (let i = 0; i < drop_downs.length; i++) {
                    if (drop_downs[i] !== block[0] )
                        drop_downs[i].classList.add('close');
                }

                for (let i = 0; i < block.length; i++) {
                    block[i].classList.toggle('close');
                }
            });
        }
    }
});