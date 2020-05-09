window.addEventListener('DOMContentLoaded', function (event) {

    let header = document.querySelectorAll('.main-header');
    let pop_block = document.querySelectorAll('.main-header__menu-wrap');

    let stick_nav = document.querySelector('.stick-nav');
    let stick_btn = document.querySelector('.header-stick__menu-button');


    for (let i = 0; i < pop_block.length; i++) {
        let pop_menu = pop_block[i].querySelector('.main-header__menu-list');
        let pop_button_menu = pop_block[i].querySelector('.main-header__nav-title');

        /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ ///////
        if (window.matchMedia('(max-width: 770px)').matches) {

            pop_button_menu.addEventListener('click', function (event) {

                if (pop_menu.classList.contains('visually-hidden')) {
                    for (let j = 0; j < pop_block.length; j++) {
                        let pop_menu = pop_block[j].querySelector('.main-header__menu-list');
                        let pop_button_menu = pop_block[j].querySelector('.main-header__nav-title');
                        pop_menu.classList.add('visually-hidden');
                        pop_button_menu.classList.remove('main-header__nav-title--active');
                    }
                }

                pop_menu.classList.toggle('visually-hidden');
                pop_button_menu.classList.toggle('main-header__nav-title--active');
            });


        } else {
            pop_button_menu.addEventListener('mouseover', function (event) {
                if (pop_menu.classList.contains('visually-hidden')) {
                    pop_menu.classList.remove('visually-hidden');
                    pop_button_menu.classList.add('main-header__nav-title--active');
                }
            });

            pop_menu.addEventListener('mousemove', function () {
                pop_menu.classList.remove('visually-hidden');
                pop_button_menu.classList.add('main-header__nav-title--active');

                pop_button_menu.addEventListener('mouseout', function (event) {
                    pop_menu.classList.add('visually-hidden');
                    pop_button_menu.classList.remove('main-header__nav-title--active');
                });
            });

            pop_menu.addEventListener('mouseout', function (event) {
                pop_menu.classList.add('visually-hidden');
                pop_button_menu.classList.remove('main-header__nav-title--active');
            });
            pop_button_menu.addEventListener('mouseout', function (event) {
                pop_menu.classList.add('visually-hidden');
                pop_button_menu.classList.remove('main-header__nav-title--active');
            });
        }
    }


    let header_menu = document.querySelector('.main-header');
    let menu = document.querySelector('.main-header__menu');
    let main_page = document.querySelector('.main-page');

    let scroll_header = document.querySelector('.header-stick');
    ///////SCROLL HEADER ///////


    let a = function () {
        if (!window.matchMedia('(max-width: 700px)').matches) {

            if (pageYOffset > 0) {
                scroll_header.style.display = 'block';
                header_menu.classList.add('visually-hidden');
                menu.classList.add('visually-hidden');
            } else {
                scroll_header.style.display = 'none';
                header_menu.classList.remove('visually-hidden');
                menu.classList.remove('visually-hidden');
            }

            let height = document.querySelector('.main-header').clientHeight;

            window.onresize = function () {
                height = document.querySelector('.main-header').clientHeight;
            };

            window.addEventListener('scroll', function () {

                if (pageYOffset > 0) {
                    scroll_header.style.display = 'block';
                    header_menu.classList.add('visually-hidden');
                    menu.classList.add('visually-hidden');
                    main_page.style.marginTop = height + 'px';
                } else {
                    scroll_header.style.display = 'none';
                    header_menu.classList.remove('visually-hidden');
                    menu.classList.remove('visually-hidden');
                    main_page.style.marginTop = 0 + 'px';
                }

            });
        }
    };



    a();
    window.onresize = function () {
        a()
    };


    /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ SCROLL///////
    stick_btn.addEventListener('click', function (event) {
        stick_nav.classList.toggle('visually-hidden');
    });



    /////// ОТКРЫТИЕ ХОТИМ ВСЁ ЗНАТЬ ///////
    let knowledge_item = document.querySelectorAll('.knowledge__item');

    if (knowledge_item !== undefined) {

        for (let i = 0; i < knowledge_item.length; i++) {
            let knowledge_text = knowledge_item[i].querySelector('.knowledge__text');

            knowledge_item[i].addEventListener('click', function (event) {

                if (knowledge_text.classList.contains('visually-hidden')) {

                    for (let j = 0; j < knowledge_item.length; j++) {

                        let knowledge_text = knowledge_item[j].querySelector('.knowledge__text');
                        knowledge_text.classList.add('visually-hidden');
                        knowledge_item[j].classList.remove('knowledge__item--active');
                    }

                }

                knowledge_text.classList.toggle('visually-hidden');
                knowledge_item[i].classList.toggle('knowledge__item--active');
            });


        }

    }
});


