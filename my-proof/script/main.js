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
            992: {
                slidesPerView: 3,
            },

            // when window width is <= 992px
            769: {
                slidesPerView: 2,
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
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 40,
    });

    const product_swiper = new Swiper('.product__big-photo-block', {
        direction: 'horizontal',
        loop: true,
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


    let mySwiper = undefined;

    function initSwiper() {
        let screenWidth = window.outerWidth;
        if ((screenWidth < (769)) && (mySwiper == undefined)) {
            mySwiper = new Swiper('.categories--mob-swiper', {
                direction: 'horizontal',
                loop: true,
                speed: 1000,
                slidesPerView: 1,
                spaceBetween: 30,

                // Navigation arrows
                navigation: {
                    nextEl: '.categories__slider-button-next',
                    prevEl: '.categories__slider-button-prev',
                }
            });
        } else if ((screenWidth > 768) && (mySwiper != undefined)) {
            mySwiper.destroy();
            mySwiper = undefined;
            // $('.swiper-wrapper').removeAttr('style');
            // $('.swiper-slide').removeAttr('style');
        }
    }

    initSwiper();
    window.addEventListener('resize', () => {
        initSwiper();
    });


    /////// ОТКРЫТИЕ ИСТОРИИ ЗАКАЗОВ ///////
    let history_item_content = document.querySelectorAll('.history__item-content');

    if (history_item_content !== null) {
        for (let i = 0; i < history_item_content.length; i++) {

            history_item_content[i].addEventListener('click', function (event) {

                if (this.classList.contains('inactive')) {
                    this.classList.remove('inactive');
                    this.classList.add('active');
                } else if (this.classList.contains('active')) {
                    this.classList.add('inactive');
                    this.classList.remove('active');
                }
            });
        }
    }


    /////// ОТКРЫТИЕ СПИСКА ТОВАРОВ В ЗАКАЗЕ ///////
    let order_products_title = document.querySelector('.order-products__title');
    let order_products_list = document.querySelector('.order-products__container');

    if (order_products_title !== null && order_products_list !== null) {

        order_products_title.addEventListener('click', function (event) {

            if (order_products_list.classList.contains('close')) {
                order_products_list.classList.remove('close');
                order_products_title.classList.add('active');
            } else {
                order_products_list.classList.add('close');
                order_products_title.classList.remove('active');
            }
        });

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


    let account_nav_item_active = document.querySelector('.account__nav-item.active');
    let account_nav_item_all = document.querySelectorAll('.account__nav-item:not(.active)');

    console.log(account_nav_item_active);

    account_nav_item_active.addEventListener('click', function (event) {
        for (let i = 0; i < account_nav_item_all.length; i++) {
            account_nav_item_all[i].classList.toggle('hide');
        }
    });



    // $(function() {
    //     $(".account__nav-item.active").click(function(){
    //         var $menu_popup = $(this).next();
    //         $menu_popup.slideToggle(200, function(){
    //             $('.selectlink ul').not($menu_popup).slideUp(200);
    //             if ($menu_popup.is(':hidden')) {
    //                 $('body').removeClass('body_pointer');
    //             } else {
    //                 $('body').addClass('body_pointer');
    //             }
    //         });
    //         return false;
    //     });
    //
    //     $(document).on('click', function(e){
    //         if (!$(e.target).closest('.selectlink').length){
    //             $('body').removeClass('body_pointer');
    //             $('.selectlink ul').slideUp(200);
    //         }
    //     });
    // });

});