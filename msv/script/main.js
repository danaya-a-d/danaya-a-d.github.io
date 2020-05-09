// window.addEventListener('DOMContentLoaded', function (event) {
//
//     let header = document.querySelectorAll('.main-header');
//     let pop_block = document.querySelectorAll('.main-header__menu-wrap');
//
//     let stick_nav = document.querySelector('.stick-nav');
//     let stick_btn = document.querySelector('.header-stick__menu-button');
//
//
//     for (let i = 0; i < pop_block.length; i++) {
//         let pop_menu = pop_block[i].querySelector('.main-header__menu-list');
//         let pop_button_menu = pop_block[i].querySelector('.main-header__nav-title');
//
//         /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ ///////
//         if (window.matchMedia('(max-width: 770px)').matches) {
//
//             pop_button_menu.addEventListener('click', function (event) {
//
//                 if (pop_menu.classList.contains('visually-hidden')) {
//                     for (let j = 0; j < pop_block.length; j++) {
//                         let pop_menu = pop_block[j].querySelector('.main-header__menu-list');
//                         let pop_button_menu = pop_block[j].querySelector('.main-header__nav-title');
//                         pop_menu.classList.add('visually-hidden');
//                         pop_button_menu.classList.remove('main-header__nav-title--active');
//                     }
//                 }
//
//                 pop_menu.classList.toggle('visually-hidden');
//                 pop_button_menu.classList.toggle('main-header__nav-title--active');
//             });
//
//
//         } else {
//             pop_button_menu.addEventListener('mouseover', function (event) {
//                 if (pop_menu.classList.contains('visually-hidden')) {
//                     pop_menu.classList.remove('visually-hidden');
//                     pop_button_menu.classList.add('main-header__nav-title--active');
//                 }
//             });
//
//             pop_menu.addEventListener('mousemove', function () {
//                 pop_menu.classList.remove('visually-hidden');
//                 pop_button_menu.classList.add('main-header__nav-title--active');
//
//                 pop_button_menu.addEventListener('mouseout', function (event) {
//                     pop_menu.classList.add('visually-hidden');
//                     pop_button_menu.classList.remove('main-header__nav-title--active');
//                 });
//             });
//
//             pop_menu.addEventListener('mouseout', function (event) {
//                 pop_menu.classList.add('visually-hidden');
//                 pop_button_menu.classList.remove('main-header__nav-title--active');
//             });
//             pop_button_menu.addEventListener('mouseout', function (event) {
//                 pop_menu.classList.add('visually-hidden');
//                 pop_button_menu.classList.remove('main-header__nav-title--active');
//             });
//         }
//     }
//
//
//     let header_menu = document.querySelector('.main-header');
//     let menu = document.querySelector('.main-header__menu');
//     let main_page = document.querySelector('.main-page');
//
//     let button_upp = document.querySelector('.button-upp');
//     let scroll_header = document.querySelector('.header-stick');
//     ///////SCROLL HEADER ///////
//
//
//     let a = function () {
//         if (!window.matchMedia('(max-width: 700px)').matches) {
//
//             if (pageYOffset > 0) {
//                 scroll_header.style.display = 'block';
//                 header_menu.classList.add('visually-hidden');
//                 menu.classList.add('visually-hidden');
//                 // button_upp.style.display = 'block';
//             } else {
//                 scroll_header.style.display = 'none';
//                 header_menu.classList.remove('visually-hidden');
//                 menu.classList.remove('visually-hidden');
//                 // button_upp.style.display = 'none';
//             }
//
//
//             let height = document.querySelector('.main-header').clientHeight;
//
//             window.onresize = function () {
//                 height = document.querySelector('.main-header').clientHeight;
//             };
//
//             window.addEventListener('scroll', function () {
//
//                 if (pageYOffset > 0) {
//                     scroll_header.style.display = 'block';
//                     header_menu.classList.add('visually-hidden');
//                     menu.classList.add('visually-hidden');
//                     main_page.style.marginTop = height + 'px';
//                     // button_upp.style.display = 'block';
//                 } else {
//                     scroll_header.style.display = 'none';
//                     header_menu.classList.remove('visually-hidden');
//                     menu.classList.remove('visually-hidden');
//                     main_page.style.marginTop = 0 + 'px';
//                     // button_upp.style.display = 'none';
//                 }
//                 if (pageYOffset > 600) {
//                     button_upp.style.display = 'block';
//                 } else {
//                     button_upp.style.display = 'none';
//                 }
//
//             });
//         }
//         if (pageYOffset > 700) {
//             button_upp.style.display = 'block';
//         } else {
//             button_upp.style.display = 'none';
//         }
//         window.addEventListener('scroll', function () {
//             if (pageYOffset > 600) {
//                 button_upp.style.display = 'block';
//             } else {
//                 button_upp.style.display = 'none';
//             }
//
//         });
//
//     };
//
//
//
//     a();
//     window.onresize = function () {
//         a()
//     };
//
//
//     /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ SCROLL///////
//     stick_btn.addEventListener('click', function (event) {
//         stick_nav.classList.toggle('visually-hidden');
//     });
//
//
//
//     /////// ОТКРЫТИЕ ХОТИМ ВСЁ ЗНАТЬ ///////
//     let knowledge_item = document.querySelectorAll('.knowledge__item');
//
//     if (knowledge_item !== undefined) {
//
//         for (let i = 0; i < knowledge_item.length; i++) {
//             let knowledge_text = knowledge_item[i].querySelector('.knowledge__text');
//
//             knowledge_item[i].addEventListener('click', function (event) {
//
//                 if (knowledge_text.classList.contains('visually-hidden')) {
//
//                     for (let j = 0; j < knowledge_item.length; j++) {
//
//                         let knowledge_text = knowledge_item[j].querySelector('.knowledge__text');
//                         knowledge_text.classList.add('visually-hidden');
//                         knowledge_item[j].classList.remove('knowledge__item--active');
//                     }
//
//                 }
//
//                 knowledge_text.classList.toggle('visually-hidden');
//                 knowledge_item[i].classList.toggle('knowledge__item--active');
//             });
//
//
//         }
//
//     }
// });
//
//
//

"use strict";

window.addEventListener('DOMContentLoaded', function (event) {
    var header = document.querySelectorAll('.main-header');
    var pop_block = document.querySelectorAll('.main-header__menu-wrap');
    var stick_nav = document.querySelector('.stick-nav');
    var stick_btn = document.querySelector('.header-stick__menu-button');

    var _loop = function _loop(i) {
        var pop_menu = pop_block[i].querySelector('.main-header__menu-list');
        var pop_button_menu = pop_block[i].querySelector('.main-header__nav-title'); /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ ///////

        if (window.matchMedia('(max-width: 770px)').matches) {
            pop_button_menu.addEventListener('click', function (event) {
                if (pop_menu.classList.contains('visually-hidden')) {
                    for (var j = 0; j < pop_block.length; j++) {
                        var _pop_menu = pop_block[j].querySelector('.main-header__menu-list');

                        var _pop_button_menu = pop_block[j].querySelector('.main-header__nav-title');

                        _pop_menu.classList.add('visually-hidden');

                        _pop_button_menu.classList.remove('main-header__nav-title--active');
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
    };

    for (var i = 0; i < pop_block.length; i++) {
        _loop(i);
    }

    var header_menu = document.querySelector('.main-header');
    var menu = document.querySelector('.main-header__menu');
    var main_page = document.querySelector('.main-page');
    var button_upp = document.querySelector('.button-upp');
    var scroll_header = document.querySelector('.header-stick'); ///////SCROLL HEADER ///////

    var a = function a() {
        if (!window.matchMedia('(max-width: 700px)').matches) {
            if (pageYOffset > 0) {
                scroll_header.style.display = 'block';
                header_menu.classList.add('visually-hidden');
                menu.classList.add('visually-hidden'); // button_upp.style.display = 'block';
            } else {
                scroll_header.style.display = 'none';
                header_menu.classList.remove('visually-hidden');
                menu.classList.remove('visually-hidden'); // button_upp.style.display = 'none';
            }

            var height = document.querySelector('.main-header').clientHeight;

            window.onresize = function () {
                height = document.querySelector('.main-header').clientHeight;
            };

            window.addEventListener('scroll', function () {
                if (pageYOffset > 0) {
                    scroll_header.style.display = 'block';
                    header_menu.classList.add('visually-hidden');
                    menu.classList.add('visually-hidden');
                    main_page.style.marginTop = height + 'px'; // button_upp.style.display = 'block';
                } else {
                    scroll_header.style.display = 'none';
                    header_menu.classList.remove('visually-hidden');
                    menu.classList.remove('visually-hidden');
                    main_page.style.marginTop = 0 + 'px'; // button_upp.style.display = 'none';
                }

                if (pageYOffset > 600) {
                    button_upp.style.display = 'block';
                } else {
                    button_upp.style.display = 'none';
                }
            });
        }

        if (pageYOffset > 700) {
            button_upp.style.display = 'block';
        } else {
            button_upp.style.display = 'none';
        }

        window.addEventListener('scroll', function () {
            if (pageYOffset > 600) {
                button_upp.style.display = 'block';
            } else {
                button_upp.style.display = 'none';
            }
        });
    };

    a();

    window.onresize = function () {
        a();
    }; /////// ОТКРЫТИЕ ВЫПАДАЮЩЕГО МЕНЮ SCROLL///////


    stick_btn.addEventListener('click', function (event) {
        stick_nav.classList.toggle('visually-hidden');
    }); /////// ОТКРЫТИЕ ХОТИМ ВСЁ ЗНАТЬ ///////

    var knowledge_item = document.querySelectorAll('.knowledge__item');

    if (knowledge_item !== undefined) {
        var _loop2 = function _loop2(_i) {
            var knowledge_text = knowledge_item[_i].querySelector('.knowledge__text');

            knowledge_item[_i].addEventListener('click', function (event) {
                if (knowledge_text.classList.contains('visually-hidden')) {
                    for (var j = 0; j < knowledge_item.length; j++) {
                        var _knowledge_text = knowledge_item[j].querySelector('.knowledge__text');

                        _knowledge_text.classList.add('visually-hidden');

                        knowledge_item[j].classList.remove('knowledge__item--active');
                    }
                }

                knowledge_text.classList.toggle('visually-hidden');

                knowledge_item[_i].classList.toggle('knowledge__item--active');
            });
        };

        for (var _i = 0; _i < knowledge_item.length; _i++) {
            _loop2(_i);
        }
    }
});