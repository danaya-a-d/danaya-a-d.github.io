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


    // Tariffs slider

    let init = false;

    function swiperCard() {
        if (window.innerWidth <= 778) {
            if (!init) {
                init = true;
                swiper = new Swiper(".tariffs__wrapper", {
                    direction: 'horizontal',
                    loop: false,
                    speed: 1000,
                    slidesPerView: 1,
                    spaceBetween: 0,
                });
            }
        } else if (init) {
            swiper.destroy();
            init = false;
        }
    }
    swiperCard();
    window.addEventListener("resize", swiperCard);


    // const tariffs__wrapper = new Swiper('.tariffs__wrapper', {
    //     direction: 'horizontal',
    //     loop: false,
    //     speed: 1000,
    //     slidesPerView: 1,
    //     spaceBetween: 0,
    // });

    // Modals
    let modal_overlay = document.querySelector('.modal-overlay');
    let modal_back = document.querySelector('.modal-back');
    let modals = document.querySelectorAll('.modal');

    function close_modal(modal) {
        modal.addEventListener('click', function (event) {
            const target = event.target;

            if (target.classList.contains('modal-close')) {
                modal.classList.add('hide');
                modal_overlay.classList.add('hide');
                modal_back.classList.add('hide');
            }
        });
    }

    function open_modal(modal, button) {
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function (event) {
                for (let i = 0; i < modals.length; i++) {
                    modals[i].classList.add('hide');
                    if (modal_overlay.classList.contains('hide') && modal_back.classList.contains('hide')) {
                        modal_overlay.classList.add('hide');
                        modal_back.classList.add('hide');
                    }
                }

                if (modal.classList.contains('hide')) {
                    modal.classList.remove('hide');
                    modal_overlay.classList.remove('hide');
                    modal_back.classList.remove('hide');
                }
            });

        }

        close_modal(modal);
    }


    let modal_subscription = document.querySelector('.modal-subscription');
    let btn_modal_subscription = document.querySelectorAll('.button-subscription');

    let modal_attention = document.querySelector('.modal-attention');
    let btn_modal_attention = document.querySelectorAll('.button-attention');

    let modal_videos = document.querySelector('.modal-videos');
    let btn_modal_videos = document.querySelectorAll('.button-videos');

    open_modal(modal_subscription, btn_modal_subscription);
    open_modal(modal_attention, btn_modal_attention);
    open_modal(modal_videos, btn_modal_videos);

    //FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== null) {
        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {
                this.classList.toggle('active');
            });
        }
    }

    // Mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');
    let header_overlay = document.querySelector('.header__overlay');


    function menu_open() {
        if (header_nav_menu.classList.contains('opened')) {
            header_nav_menu.classList.remove('opened');
            header_menu_btn.classList.remove('opened');
            header_overlay.classList.remove('opened');
        } else {
            header_nav_menu.classList.add('opened');
            header_menu_btn.classList.add('opened');
            header_overlay.classList.add('opened');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    header_overlay.addEventListener('click', function () {
        menu_open();
    });

    header_overlay.addEventListener('touchmove', function () {
        menu_open();
    });

});
