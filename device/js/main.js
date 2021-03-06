window.addEventListener('DOMContentLoaded', function (event) {
    let pop_menu = document.querySelector('.main-header-menu_hover'),
        pop_button_menu = document.querySelector('.main-header-catalog'),

        delivery_btn = document.querySelector(".delivery-btn"),
        warranty_btn = document.querySelector(".warranty-btn"),
        credit_btn = document.querySelector(".credit-btn"),

        delivery_terms = document.querySelector('.delivery-terms'),
        warranty_terms = document.querySelector('.warranty-terms'),
        credit_terms = document.querySelector('.credit-terms'),

        switch_btn = document.querySelectorAll('.slider-switch-btn'),
        sliders = document.querySelectorAll('.slider'),

        contacts_btn = document.querySelector('.contacts-btn'),
        contacts_map = document.querySelector('.contacts-map'),

        modal_write_us = document.querySelector('.modal-write_us'),
        modal_map = document.querySelector('.modal-map'),

        modal_write_us_close = document.querySelector('#modal-write_us-close'),
        modal_map_close = document.querySelector('#modal-map-close'),

        overlay = document.querySelector('.modal-overlay');

    /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ ///////
    pop_button_menu.addEventListener('mouseover', function (event) {
        pop_menu.classList.remove('visually-hidden');
    });
    pop_menu.addEventListener('mousemove', function () {
        pop_menu.classList.remove('visually-hidden');
        pop_button_menu.addEventListener('mouseout', function (event) {
            pop_menu.classList.add('visually-hidden');
        });
    });
    pop_menu.addEventListener('mouseout', function (event) {
        pop_menu.classList.add('visually-hidden');
    });


    /////// ПЕРЕКЛЮЧЕНИЕ СЕРВИСОВ КОМПАНИИ ///////
    delivery_btn.addEventListener('click', function (event) {
        delivery_terms.classList.remove('visually-hidden');
        warranty_terms.classList.add('visually-hidden');
        credit_terms.classList.add('visually-hidden');

        delivery_btn.classList.add('service-btn-active');
        warranty_btn.classList.remove('service-btn-active');
        credit_btn.classList.remove('service-btn-active');
    });

    warranty_btn.addEventListener('click', function (event) {
        delivery_terms.classList.add('visually-hidden');
        warranty_terms.classList.remove('visually-hidden');
        credit_terms.classList.add('visually-hidden');

        delivery_btn.classList.remove('service-btn-active');
        warranty_btn.classList.add('service-btn-active');
        credit_btn.classList.remove('service-btn-active');
    });

    credit_btn.addEventListener('click', function (event) {
        delivery_terms.classList.add('visually-hidden');
        warranty_terms.classList.add('visually-hidden');
        credit_terms.classList.remove('visually-hidden');

        delivery_btn.classList.remove('service-btn-active');
        warranty_btn.classList.remove('service-btn-active');
        credit_btn.classList.add('service-btn-active');
    });

    /////// ПЕРЕКЛЮЧЕНИЕ СЛАЙДЕРОВ ///////
    switch_btn[0].addEventListener('click', function (event) {
        sliders[0].classList.remove('visually-hidden');
        sliders[1].classList.add('visually-hidden');
        sliders[2].classList.add('visually-hidden');

        switch_btn[0].classList.add('btn-current');
        switch_btn[1].classList.remove('btn-current');
        switch_btn[2].classList.remove('btn-current');
    });
    switch_btn[1].addEventListener('click', function (event) {
        sliders[0].classList.add('visually-hidden');
        sliders[1].classList.remove('visually-hidden');
        sliders[2].classList.add('visually-hidden');

        switch_btn[0].classList.remove('btn-current');
        switch_btn[1].classList.add('btn-current');
        switch_btn[2].classList.remove('btn-current');
    });
    switch_btn[2].addEventListener('click', function (event) {
        sliders[0].classList.add('visually-hidden');
        sliders[1].classList.add('visually-hidden');
        sliders[2].classList.remove('visually-hidden');

        switch_btn[0].classList.remove('btn-current');
        switch_btn[1].classList.remove('btn-current');
        switch_btn[2].classList.add('btn-current');
    });


    /////// ОТКРЫТИЕ МОДАЛЬНЫХ ОКНОН ///////
    // Открытие окна обратной связи
    if (contacts_btn !== null) {
        contacts_btn.addEventListener('click', function (event) {
            //Отмена действия по умолчанию
            event.preventDefault();
            if (modal_write_us.classList.contains('modal-hidden')) {
                modal_write_us.classList.remove('modal-hidden');
                modal_write_us.classList.add('modal-show');
                overlay.classList.remove('modal-hidden');
            }
        });
    }

    // Открытие окна карты
    if (contacts_map !== null) {
        contacts_map.addEventListener('click', function (event) {
            //Отмена действия по умолчанию
            event.preventDefault();
            if (modal_map.classList.contains('modal-hidden')) {
                modal_map.classList.remove('modal-hidden');
                modal_map.classList.add('modal-show');
                overlay.classList.remove('modal-hidden');
            }
        });
    }

    /////// ЗАКРЫТИЕ МОДАЛЬНЫХ ОКНОН ///////
    //Закрытие окна обратной связи при клике на крестик
    modal_write_us_close.addEventListener('click', function (event) {
        if (!modal_write_us.classList.contains('modal-hidden')) {
            modal_write_us.classList.add('modal-hidden');
            overlay.classList.add('modal-hidden');
        }
    });

    //Закрытие окна карты при клике на крестик
    modal_map_close.addEventListener('click', function (event) {
        if (!modal_map.classList.contains('modal-hidden')) {
            modal_map.classList.add('modal-hidden');
            overlay.classList.add('modal-hidden');
        }
    });

    //Закрытие при клике на оверлей
    overlay.addEventListener('click', function (event) {
        if (modal_write_us !== null && !modal_write_us.classList.contains('modal-hidden')) {
            modal_write_us.classList.add('modal-hidden');
        }
        if (modal_map !== null && !modal_map.classList.contains('modal-hidden')) {
            modal_map.classList.add('modal-hidden');
        }
        overlay.classList.add('modal-hidden');
    });

    //Закрытие модального окна при нажатиии на клавишу ESCAPE
    window.addEventListener('keydown', function (event) {
        //Код клавиши ESCAPE равен 27, проверка на её нажатие
        if (event.keyCode === 27) {
            if (modal_write_us !== null && !modal_write_us.classList.contains('modal-hidden')) {
                //Отмена действия по умолчанию
                event.preventDefault();
                modal_write_us.classList.add('modal-hidden');
                overlay.classList.add('modal-hidden');
            }
            if (modal_map !== null && !modal_map.classList.contains('modal-hidden')) {
                //Отмена действия по умолчанию
                event.preventDefault();
                modal_map.classList.add('modal-hidden');
                overlay.classList.add('modal-hidden');
            }
        }
    })
});


