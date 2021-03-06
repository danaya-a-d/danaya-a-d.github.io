window.addEventListener('DOMContentLoaded', function () {
    let navMain = document.querySelector('.main-nav'),
        navToggle = document.querySelector('.main-nav__toggle'),
        header = document.querySelector('.page-header'),

        reviews_toggles = document.querySelectorAll('.reviews-btn'),
        reviews = document.querySelectorAll('.reviews__item'),

        switch_btn_left = document.querySelector('.reviews__switch-btn--left'),
        switch_btn_right = document.querySelector('.reviews__switch-btn--right'),

        table_toggles = document.querySelectorAll('.packages-btn'),
        table = document.querySelector('.packages__table'),

        range_contrast = document.querySelector(".upload__range-item--contrast"),
        range_fill = document.querySelector(".upload__range-item--fill"),
        range_crop = document.querySelector(".upload__range-item--crop"),
        btn_contrast = document.querySelector(".upload__btn--contrast"),
        btn_fill = document.querySelector(".upload__btn--fill"),
        btn_crop = document.querySelector(".upload__btn--crop");

    navMain.classList.remove('main-nav--nojs');

//////////////// МОБИЛЬНОЕ МЕНЮ ////////////////
    navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
            header.style.position = "static";
            header.style.backgroundColor = "#283645";
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
            header.style.position = "absolute";
            header.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        }
    });

//////////////// ПЕРЕКЛЮЧЕНИЕ КОММЕНТАРИЕВ ////////////////
    if (reviews_toggles !== null) {
        for (let i = 0; i < reviews_toggles.length; i++) {
            reviews_toggles[i].addEventListener('click', function () {
                // В цикле проходимся по всем элементам, видимые скрываем
                for (let i = 0; i < reviews.length; i++) {
                    reviews[i].classList.add('visually-hidden');
                    reviews[i].classList.remove('animate-left');
                    reviews[i].classList.remove('animate-right');
                    reviews_toggles[i].classList.remove('slider-toggle__btn--active')
                }
                // Показываем тот, который соответствует нажатой кнопке переключателя
                if (reviews[i].classList.contains('visually-hidden')) {
                    reviews[i].classList.remove('visually-hidden');
                    reviews[i].classList.add('animate-left');
                    reviews_toggles[i].classList.add('slider-toggle__btn--active')
                }
            });
        }
    }
//////////////// ЛИСТАНИЕ КОММЕНТАРИЕВ ////////////////
    if (switch_btn_right !== null) {
        switch_btn_right.addEventListener('click', function () {
            for (let i = 0; i < reviews.length; i++) {
                if (!reviews[i].classList.contains('visually-hidden') && reviews[i + 1] !== undefined) {
                    reviews[i].classList.add('visually-hidden');
                    reviews[i + 1].classList.remove('visually-hidden');
                    reviews_toggles[i].classList.remove('slider-toggle__btn--active');
                    reviews_toggles[i + 1].classList.add('slider-toggle__btn--active');

                    reviews[i].classList.remove('animate-right');
                    reviews[i].classList.remove('animate-left');
                    reviews[i + 1].classList.add('animate-left');
                    break;
                }
            }
        });
    }

    if (switch_btn_left !== null) {
        switch_btn_left.addEventListener('click', function () {
            for (let i = 0; i < reviews.length; i++) {
                if (!reviews[i].classList.contains('visually-hidden') && reviews[i - 1] !== undefined) {
                    reviews[i].classList.add('visually-hidden');
                    reviews[i - 1].classList.remove('visually-hidden');

                    reviews[i].classList.remove('animate-right');
                    reviews[i].classList.remove('animate-left');
                    reviews[i - 1].classList.add('animate-right');

                    reviews_toggles[i].classList.remove('slider-toggle__btn--active');
                    reviews_toggles[i - 1].classList.add('slider-toggle__btn--active');
                    break;
                }
            }
        });
    }

//////////////// ЛИСТАНИЕ ТАБЛИЦЫ ////////////////
    if (table_toggles !== null) {
        for (let i = 0; i < table_toggles.length; i++) {
            table_toggles[i].addEventListener('click', function () {
                // Находим преключатель с классом активности у убираем у него этот класс
                for (let i = 0; i < table_toggles.length; i++) {
                    table_toggles[i].classList.remove('slider-toggle__btn--active')
                }
                // Добавляем класс актиности нажатому переключателю и показываем соответствующую часть таблицы
                if (i === 0) {
                    table.classList.add("table-left");
                    table.classList.remove("table-center");
                    table.classList.remove("table-right");
                    table_toggles[i].classList.add('slider-toggle__btn--active');
                }
                if (i === 1) {
                    table.classList.remove("table-left");
                    table.classList.add("table-center");
                    table.classList.remove("table-right");
                    table_toggles[i].classList.add('slider-toggle__btn--active');
                }
                if (i === 2) {
                    table.classList.remove("table-left");
                    table.classList.remove("table-center");
                    table.classList.add("table-right");
                    table_toggles[i].classList.add('slider-toggle__btn--active');
                }
            });
        }
    }
//////////////// ПЕРЕКЛЮЧАТЕЛЬ РЕДАКТОРА ////////////////
    if (btn_crop !== null) {
        btn_crop.addEventListener('click', function () {
            range_crop.classList.add('upload__range-item--active');
            range_contrast.classList.remove('upload__range-item--active');
            range_fill.classList.remove('upload__range-item--active');

            range_crop.classList.remove('upload__range-item--nonactive');
            range_contrast.classList.add('upload__range-item--nonactive');
            range_fill.classList.add('upload__range-item--nonactive');

            btn_crop.classList.add('upload__btn--active');
            btn_fill.classList.remove('upload__btn--active');
            btn_contrast.classList.remove('upload__btn--active');
        });
        btn_fill.addEventListener('click', function () {
            range_crop.classList.remove('upload__range-item--active');
            range_contrast.classList.remove('upload__range-item--active');
            range_fill.classList.add('upload__range-item--active');

            range_crop.classList.add('upload__range-item--nonactive');
            range_contrast.classList.add('upload__range-item--nonactive');
            range_fill.classList.remove('upload__range-item--nonactive');

            btn_crop.classList.remove('upload__btn--active');
            btn_fill.classList.add('upload__btn--active');
            btn_contrast.classList.remove('upload__btn--active');

        });
        btn_contrast.addEventListener('click', function () {
            range_crop.classList.remove('upload__range-item--active');
            range_contrast.classList.add('upload__range-item--active');
            range_fill.classList.remove('upload__range-item--active');

            range_crop.classList.add('upload__range-item--nonactive');
            range_contrast.classList.remove('upload__range-item--nonactive');
            range_fill.classList.add('upload__range-item--nonactive');

            btn_crop.classList.remove('upload__btn--active');
            btn_fill.classList.remove('upload__btn--active');
            btn_contrast.classList.add('upload__btn--active');
        });
    }
});