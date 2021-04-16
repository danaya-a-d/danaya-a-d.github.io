window.addEventListener('DOMContentLoaded', function (event) {
/////// ОТКРЫТИЕ FAQ ///////
    let faq_item = document.querySelectorAll('.faq__item');

    console.log(faq_item);

    if (faq_item !== undefined) {

        for (let i = 0; i < faq_item.length; i++) {
            let faq_text = faq_item[i].querySelector('.faq__text');

            faq_item[i].addEventListener('click', function (event) {

                if (faq_text.classList.contains('visually-hidden')) {

                    for (let j = 0; j < faq_item.length; j++) {

                        let faq_text = faq_item[j].querySelector('.faq__text');
                        faq_text.classList.add('visually-hidden');
                        faq_item[j].classList.remove('faq__item--active');
                    }

                }

                faq_text.classList.toggle('visually-hidden');
                faq_item[i].classList.toggle('faq__item--active');
            });
        }
    }

    //////////////// МОБИЛЬНОЕ МЕНЮ ////////////////
    let navToggle = document.querySelector('.header__nav-toggle');
    let navMain = document.querySelector('.header__nav');

    navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
            navToggle.classList.add('header__nav-toggle--open');
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
            navToggle.classList.remove('header__nav-toggle--open');
        }
    });
});
