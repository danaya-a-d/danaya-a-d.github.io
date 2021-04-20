window.addEventListener('DOMContentLoaded', function () {
    let navMain = document.querySelector('.main-nav'),
        navToggle = document.querySelector('.main-nav__toggle'),
        header = document.querySelector('.page-header'),
        cakes_item = document.querySelectorAll('.our-cakes__item'),
        cake_photo = document.querySelector('.individual__filling-container'),
        cakes_switch = document.querySelector('.individual__filling-toggles'),

        reviews_toggles = document.querySelectorAll('.individual__size-toggle'),
        reviews = document.querySelectorAll('.individual__size-item'),
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
    // console.log(cake_photo);
    // console.log(cakes_switch);

    // let a = (cake_photo.offsetHeight) + 'px';
    // console.log(a);
    // cakes_switch.style.bottom = a;
    // cakes_switch.style.backgroundColor = 'blue';

    let cnt = 0;
    for (let i = 0; i < cakes_item.length + 1; i++) {
        if (((i) % 6) === 0 && i !== 0) {
            cakes_item[i - 1].style.gridRowStart = 3 + cnt;
            cnt += 4;
        }
    }

//////////////// ПЕРЕКЛЮЧЕНИЕ КОММЕНТАРИЕВ ////////////////
//     if (reviews_toggles !== null) {
//         for (let i = 0; i < reviews_toggles.length; i++) {
//             reviews_toggles[i].addEventListener('click', function () {
//                 // alert(i);
//                 // В цикле проходимся по всем элементам, видимые скрываем
//                 for (let i = 0; i < reviews.length; i++) {
//                     reviews[i].classList.add('individual__size-item--nonactive');
//                     reviews[i].classList.remove('animate-show');
//                     reviews_toggles[i].classList.remove('toggle__button--active')
//                 }
//                 // Показываем тот, который соответствует нажатой кнопке переключателя
//                 if (reviews[i].classList.contains('individual__size-item--nonactive')) {
//                     reviews[i].classList.remove('individual__size-item--nonactive');
//                     reviews[i].classList.add('animate-show');
//                     reviews_toggles[i].classList.add('toggle__button--active')
//                 }
//             });
//         }
//     }

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


$('.feedbacks__list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.switch__button--right'),
    nextArrow: $('.switch__button--left '),
    // variableWidth: true
});

$('.individual__filling-list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.individual__filling-switch-r'),
    nextArrow: $('.individual__filling-switch-l'),
    // variableWidth: true
});


$('.individual__design-list').slick({
    dots: false,
    dotsClass: "my-dots",
    arrows: true,
    adaptiveHeight: true,
    prevArrow: $('.individual__design-switch-r'),
    nextArrow: $('.individual__design-switch-l'),
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: false
            }
        },
    ]
    // variableWidth: true
});


if (window.matchMedia("(max-width: 768px)").matches) {
    $('.individual__size-list').slick(
        {
            breakpoint: 768,
            dots: false,
            dotsClass: "my-dots",
            arrows: false,
            adaptiveHeight: true,
        }
    );
}


let filling_input = document.querySelector('#filling'),
    size_input = document.querySelector('#size'),
    design_input = document.querySelector('#design');