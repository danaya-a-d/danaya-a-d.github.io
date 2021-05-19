$(document).ready(function () {

    $('.banner__close').click(function () {
        $('.banner').hide();
    });

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    /////// ТАБЛИЦА ///////

    let table_name = document.querySelectorAll('.packets__table--name');
    let table_check = document.querySelectorAll('.packets__table--check');

    function resize_table() {
        for (let j = 0; j < table_name.length; j++) {
            let tr_name = table_name[j].querySelectorAll('tr');
            let tr_check = table_check[j].querySelectorAll('tr');

            for (let i = 0; i < tr_name.length; i++) {

                if(tr_name[i].offsetHeight > tr_check[i].offsetHeight) {
                    tr_check[i].style.height = tr_name[i].offsetHeight + 'px';
                } tr_name[i].style.height = tr_check[i].offsetHeight + 'px';
            }
        }
    }

    resize_table();

    window.addEventListener('resize', function(event) {
        resize_table();
    }, true);

    /////// ОТКРЫТИЕ ХЕДЕР МЕНЮ ///////

    function on_overlay_close() {
        $('.overlay').hide();
        $(".header__container").addClass('header__container--close');
        $(".header__container").stop().animate({width: originalWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-small.png');
        $(".header").addClass('header--close');
    }

    let speed = 300,
        originalWidth = 100,
        hoverWidth = 330;

    if (window.matchMedia('(min-width: 1400px)').matches) {
        $(".header").hover(function () {
            $('.overlay').show();
            $(".header__container").removeClass('header__container--close');
            $(".header__container").stop().animate({width: hoverWidth}, speed);
            $(".header__logo img").attr('src', 'img/logo-big.png');
        }, function () {
            $('.overlay').hide();
            $(".header__container").addClass('header__container--close');
            $(".header__container").stop().animate({width: originalWidth}, speed);
            $(".header__logo img").attr('src', 'img/logo-small.png');
        });
    }

    $('.header-mobile__toggle').on('click', function () {
        $('.overlay').show();
        $(".header__container").removeClass('header__container--close');
        $(".header__container").stop().animate({width: hoverWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-big.png');
        $(".header").removeClass('header--close');
    });

    $('.header__open-btn').on('click', function () {
        $('.overlay').hide();
        $(".header__container").addClass('header__container--close');
        $(".header__container").stop().animate({width: originalWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-small.png');
        $(".header").addClass('header--close');
    });

    $('.overlay').on('click', function () {
        on_overlay_close();
    });

    $(".overlay").on("touchmove", function () {
        on_overlay_close();
    });

    /////// СЛАЙДЕРЫ ///////
    if (window.matchMedia("(max-width: 768px)").matches) {
        $('.content--scroll .content__list').slick({
            dots: false,
            arrows: false
        });

        // $('.variants__list').slick({
        //     dots: false,
        //     arrows: false
        // });
    }

    /////// ОТКРЫТИЕ FAQ ///////
    let faq_item = document.querySelectorAll('.faq__item');
    if (faq_item !== undefined) {
        for (let i = 0; i < faq_item.length; i++) {
            let faq_text = faq_item[i].querySelector('.faq__text');
            let faq_img = faq_item[i].querySelector('.faq__img');
            faq_item[i].addEventListener('click', function (event) {
                if (faq_text.classList.contains('visually-hidden')) {

                    for (let j = 0; j < faq_item.length; j++) {

                        let faq_text = faq_item[j].querySelector('.faq__text');
                        faq_text.classList.add('visually-hidden');

                        let faq_img = faq_item[j].querySelector('.faq__img');
                        faq_img.classList.add('visually-hidden');

                        faq_item[j].classList.remove('faq__item--active');
                    }
                }
                faq_text.classList.toggle('visually-hidden');
                faq_img.classList.toggle('visually-hidden');
                faq_item[i].classList.toggle('faq__item--active');
            });
        }
    }


    /////// ОТКРЫТИЕ ТАБОВ ///////
    let tabs_item = document.querySelectorAll('.tabs__item');
    let tabs_btn = document.querySelectorAll('.tabs__btn');

    if (tabs_btn !== undefined) {
        for (let i = 0; i < tabs_btn.length; i++) {
            tabs_btn[i].addEventListener('click', function () {
                for (let j = 0; j < tabs_item.length; j++) {
                    tabs_item[j].classList.add('visually-hidden');
                    tabs_btn[j].classList.remove('tabs__btn--active');
                }
                tabs_item[i].classList.remove('visually-hidden');
                tabs_btn[i].classList.add('tabs__btn--active');
            });
        }
    }

    /////// ОТКРЫТИЕ ВАРИАНТОВ ///////
    let vars_list = document.querySelectorAll('.variants__list');
    let vars_btn = document.querySelectorAll('.variants__btn-item');

    function show_vars_slick(i) {
        if (!(vars_list[i].classList.contains('visually-hidden'))) {
            {
                if (window.matchMedia("(max-width: 768px)").matches) {
                    $('.variants__list').eq(i).slick({
                        dots: true,
                        arrows: false
                    });
                }
            }
        }
    }

    if (vars_btn !== undefined) {
        for (let i = 0; i < vars_btn.length; i++) {
            // show_vars_slick(i);
            vars_btn[i].addEventListener('click', function () {
                for (let j = 0; j < vars_list.length; j++) {
                    vars_list[j].classList.add('visually-hidden');
                    vars_btn[j].classList.remove('variants__btn-item--active');
                }
                vars_list[i].classList.remove('visually-hidden');
                vars_btn[i].classList.add('variants__btn-item--active');
                // show_vars_slick(i);
            });
        }
    }


    // $.each($('.variants__btn-item'), function (i, value) {
    //     $(this).click(function () {
    //         $.each($('.variants__list'), function (j, value) {
    //             console.log($(this));
    //             $('.variants__list')[j].addClass('visually-hidden');
    //             $('.variants__btn-item')[j].removeClass('variants__btn-item--active');
    //         });
    //         $('.variants__list')[i].removeClass('visually-hidden');
    //         $('.variants__btn-item')[i].addClass('variants__btn-item--active');
    //     });
    // });


    /////// ОТКРЫТИЕ ЭЛЕМЕНТОВ ПОДВАЛА ///////
    let footer_block = document.querySelectorAll('.footer__block');

    if (footer_block !== undefined) {
        for (let i = 0; i < footer_block.length; i++) {
            footer_block[i].addEventListener('click', function () {
                footer_block[i].classList.toggle('footer__block--close');
            });
        }
    }

    /////// КНОПКА ВВЕРХ ///////
    let button_upp = document.querySelector('.button-upp');
    if (pageYOffset > 1200) {
        button_upp.style.display = 'block';
    } else {
        button_upp.style.display = 'none';
    }

    window.addEventListener('scroll', function () {
        if (pageYOffset > 1100) {
            button_upp.style.display = 'block';
        } else {
            button_upp.style.display = 'none';
        }
    });

    (function ($) {
        $(function () {

            $('.button-upp').click(function () {
                $('html, body').animate({scrollTop: 0}, 500);
                return false;
            })
        })
    })(jQuery);

});
