$(document).ready(function () {

    /////// ОТКРЫТИЕ ХЕДЕР МЕНЮ ///////
    let speed = 300,
        originalWidth = 100,
        hoverWidth = 330;

    $(".header").hover(function () {
        $(".header__container").removeClass('header__container--close');
        $(".header__container").stop().animate({width: hoverWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-big.svg');
    }, function () {
        $(".header__container").addClass('header__container--close');
        $(".header__container").stop().animate({width: originalWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-small.svg');
    });

    $('.header-mobile__toggle').on('click', function() {
        $(".header__container").removeClass('header__container--close');
        $(".header__container").stop().animate({width: hoverWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-big.svg');
        $(".header").removeClass('header--close');
    });

    $('.header__open-btn').on('click', function() {
        $(".header__container").addClass('header__container--close');
        $(".header__container").stop().animate({width: originalWidth}, speed);
        $(".header__logo img").attr('src', 'img/logo-small.svg');
        $(".header").addClass('header--close');
    });

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
});
