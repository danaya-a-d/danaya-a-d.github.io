window.addEventListener('DOMContentLoaded', function () {
    let navMain = document.querySelector('.main-nav'),
        navToggle = document.querySelector('.main-nav__toggle'),
        header = document.querySelector('.page-header'),
        cakes_item = document.querySelectorAll('.our-cakes__item'),
        site_links = document.querySelectorAll('.site-list__link');


    navMain.classList.remove('main-nav--nojs');

    //////////////// МОБИЛЬНОЕ МЕНЮ ////////////////
    navToggle.addEventListener('click', function () {
        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
            navMain.classList.add('main-nav--opened');
            header.style.position = "static";
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
            header.style.position = "absolute";
        }
    });

    let cnt = 0;
    for (let i = 0; i < cakes_item.length + 1; i++) {
        if (((i) % 6) === 0 && i !== 0) {
            cakes_item[i - 1].style.gridRowStart = 3 + cnt;
            cnt += 4;
        }
    }


    //////////////// ПЛАВНАЯ ПРОКРУТКА ////////////////
    for (let link of site_links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const blockID = link.getAttribute('href');

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
});

//////////////// ВЫБОР СОСТАВЛЯЮЩИХ ТОРТА ////////////////

let filling_input = document.querySelector('#filling'),
    size_input = document.querySelector('#size'),
    design_input = document.querySelector('#design'),

    filling_list = document.querySelectorAll('.individual__filling-item'),
    size_list = document.querySelectorAll('.individual__size-item'),
    design_list = document.querySelectorAll('.individual__design-item');

cakeChoice(filling_list, filling_input, '.individual__filling-title');
cakeChoice(size_list, size_input, '.individual__size-item-diameter');
cakeChoice(design_list, design_input, '.individual__design-title');

function cakeChoice(list, input, title) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('click', function (e) {
            input.value = list[i].querySelector(title).textContent;
        })
    }
}

