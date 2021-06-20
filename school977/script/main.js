$(document).ready(function () {


    $('.banner__close').click(function () {
        $('.banner__container').hide();
    });


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


    /////// ТАБЛИЦА ///////
    let table_name = document.querySelectorAll('.packets__table--name');
    let table_check = document.querySelectorAll('.packets__table--check');

    function resize_table() {
        for (let j = 0; j < table_name.length; j++) {
            let tr_name = table_name[j].querySelectorAll('tr');
            let tr_check = table_check[j].querySelectorAll('tr');

            for (let i = 1; i < tr_name.length; i++) {

                if (tr_name[i].offsetHeight > tr_check[i].offsetHeight) {
                    tr_check[i].style.height = tr_name[i].offsetHeight + 'px';
                }
                tr_name[i].style.height = tr_check[i].offsetHeight + 'px';
            }
        }
    }

    resize_table();
    window.addEventListener('resize', function (event) {
        resize_table();
    }, true);

    /////// ОТКРЫТИЕ ХЕДЕР МЕНЮ ///////

    let speed = 200,
        originalWidth = 100,
        hoverWidth = 330;

    function menu_open() {
        $('.overlay').show();
        $(".header__container").removeClass('header__container--close');
        $(".header__container").stop().animate({width: hoverWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-big.svg');
        $(".header").removeClass('header--close');
    }

    function menu_close() {
        $('.overlay').hide();
        $(".header__container").addClass('header__container--close');
        $(".header__container").stop().animate({width: originalWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-small.svg');
        $(".header").addClass('header--close');
    }


    function header_activity() {

        // if (window.matchMedia('(min-width: 1250px)').matches) {
        if (window.matchMedia('(min-width: 1700px)').matches) {
            menu_open();
            $('.overlay').hide();
        }
        // else {
        $('.header-mobile__toggle').on('click', function () {
            menu_open();
        });

        $('.header__open-btn').on('click', function () {
            if ($(".header").hasClass('header--close')) {
                menu_open();
            } else {
                menu_close();
            }
        });

        $('.overlay').on('click', function () {
            menu_close();
        });

        $(".overlay").on("touchmove", function () {
            menu_close();
        });
    }

    // }

    header_activity();

/////// СЛАЙДЕРЫ ///////

    function slick_mobile(slider, settings) {
        // Подпишемся на ресайз и продиспатчим его для запуска
        $(window).on('resize', function (e) {
            // Переменная, по которой узнаем запущен слайдер или нет.
            // Храним её в data
            let init = slider.data('init-slider');
            // Если мобильный
            if (window.innerWidth < 769) {
                // Если слайдер не запущен
                if (init !== 1) {
                    // Запускаем слайдер и записываем в data init-slider = 1
                    slider.slick(settings).data({'init-slider': 1});
                }
            }
            // Если десктоп
            else {
                // Если слайдер запущен
                if (init === 1) {
                    // Разрушаем слайдер и записываем в data init-slider = 0
                    slider.slick('unslick').data({'init-slider': 0});
                }
            }
        }).trigger('resize');
    }

    const settings = {
        dots: true,
        arrows: false,
        mobileFirst: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 769,
            settings: 'unslick'
        }]
    };
    const settings_toggles = {
        dots: true,
        arrows: false,
        mobileFirst: true,
        adaptiveHeight: true,
        settings: 'slick',
        responsive: [{
            breakpoint: 769,
            settings: 'unslick'
        }]
    };

    slick_mobile($('.content--scroll .content__list'), settings);
    slick_mobile($('.courses__list'), settings_toggles);
    slick_mobile($('.checklist--slick'), settings);


/////// ОТКРЫТИЕ FAQ ///////


    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== undefined) {
        for (let i = 0; i < faq_item.length; i++) {
            let faq_text = faq_item[i].querySelector('.faq__text');
            let faq_img = faq_item[i].querySelector('.faq__img');
            let faq_title = faq_item[i].querySelector('.faq__item-title');
            faq_title.addEventListener('click', function (event) {
                if (faq_text.classList.contains('hidden')) {
                    for (let j = 0; j < faq_item.length; j++) {

                        let faq_text = faq_item[j].querySelector('.faq__text');
                        let faq_img = faq_item[j].querySelector('.faq__img');

                        if (!faq_text.classList.contains('hidden') && !faq_img.classList.add('hidden')) {

                            faq_text.classList.add('hidden');
                            faq_img.classList.add('hidden');
                            faq_item[j].classList.remove('faq__item--active');
                        }
                    }
                }

                faq_text.classList.toggle('hidden');
                faq_img.classList.toggle('hidden');
                faq_item[i].classList.toggle('faq__item--active');

                if (faq_item[i].classList.contains('faq__item--active')) {
                    if (window.matchMedia('(max-width: 1025px)').matches) {
                        $('html, body').animate({
                            scrollTop: $(this).offset().top - 20
                        }, 300);
                    }
                }


            });
        }
    }


/////// ОТКРЫТИЕ ТАБОВ ///////
    let tabs_item_program = document.querySelectorAll('.tabs__item--program');
    let tabs_btn_program = document.querySelectorAll('.tabs__btn--program');

    if (tabs_btn_program !== undefined) {
        for (let i = 0; i < tabs_btn_program.length; i++) {
            tabs_btn_program[i].addEventListener('click', function () {
                for (let j = 0; j < tabs_item_program.length; j++) {
                    tabs_item_program[j].classList.add('visually-hidden');
                    tabs_btn_program[j].classList.remove('tabs__btn--active');
                }
                tabs_item_program[i].classList.remove('visually-hidden');
                tabs_btn_program[i].classList.add('tabs__btn--active');
            });
        }
    }


    let tabs_item_class = document.querySelectorAll('.tabs__item--class');
    let tabs_btn_class = document.querySelectorAll('.tabs__btn--class');

    if (tabs_btn_class !== undefined) {
        for (let i = 0; i < tabs_btn_class.length; i++) {
            tabs_btn_class[i].addEventListener('click', function () {
                for (let j = 0; j < tabs_item_class.length; j++) {
                    tabs_item_class[j].classList.add('visually-hidden');
                    tabs_btn_class[j].classList.remove('tabs__btn--active');
                }
                tabs_item_class[i].classList.remove('visually-hidden');
                tabs_btn_class[i].classList.add('tabs__btn--active');
            });
        }
    }

/////// ОТКРЫТИЕ ВАРИАНТОВ ///////
    let vars_list = document.querySelectorAll('.variants__list');
    let vars_btn = document.querySelectorAll('.variants__btn-item');

    if (vars_btn !== undefined) {
        for (let i = 0; i < vars_btn.length; i++) {
            slick_mobile($('.variants__list').eq(i), settings_toggles);
            vars_btn[i].addEventListener('click', function () {
                for (let j = 0; j < vars_list.length; j++) {
                    vars_list[j].classList.add('variants__list--hidden');
                    vars_btn[j].classList.remove('variants__btn-item--active');
                }
                vars_list[i].classList.remove('variants__list--hidden');
                vars_btn[i].classList.add('variants__btn-item--active');
            });
        }
    }


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

    $('.button-upp').click(function () {
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });



    /////// ОТКРЫТИЕ ПОДМЕНЮ ///////
    $('.header__offer-item').on('click', function () {
        if ($(this).children('.header__offer-sublist').length > 0) {
            $(this).children('.header__offer-sublist').toggle();
        }
    });
});


//маска телефона
$(".phone_mask").mask("+380(99)999-99-99");

//скролл для меню
$(".header__scroll").mCustomScrollbar({
    axis: "y"
});