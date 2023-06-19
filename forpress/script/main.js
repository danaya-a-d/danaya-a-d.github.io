window.addEventListener('DOMContentLoaded', function (event) {

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

    // Mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');

    let nav__items = header_nav_menu.querySelectorAll('.nav__item--big');
    let nav__subitems = header_nav_menu.querySelectorAll('.nav__subitem');

    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
        }

        for (let i = 0; i < nav__subitems.length; i++) {
            if (nav__subitems[i].classList.contains('open')) {
                nav__subitems[i].classList.remove('open');
            }
        }

        for (let i = 0; i < nav__subitems.length; i++) {
            if (nav__items[i].classList.contains('open')) {
                nav__items[i].classList.remove('open');
            }
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });


    for (let i = 0; i < nav__items.length; i++) {
        let link = nav__items[i].querySelector('a');

        link.addEventListener('click', function (e) {
            e.preventDefault();

            for (let j = 0; j < nav__items.length; j++) {
                if (i !== j) {
                    nav__items[j].classList.remove('open');
                }
            }

            for (let n = 0; n < nav__subitems.length; n++) {
                if (nav__subitems[n].querySelector('.nav__sub-sublist-container')) {
                    if (nav__subitems[n].classList.contains('open')) {
                        nav__subitems[n].classList.remove('open');
                    }
                }
            }

            if (nav__items[i].classList.contains('open')) {
                nav__items[i].classList.remove('open');
            } else {
                nav__items[i].classList.add('open');
            }
        });
    }

    for (let i = 0; i < nav__subitems.length; i++) {
        let link = nav__subitems[i].querySelector('a');
        if (nav__subitems[i].querySelector('.nav__sub-sublist-container')) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                if (nav__subitems[i].classList.contains('open')) {
                    nav__subitems[i].classList.remove('open');
                } else {
                    nav__subitems[i].classList.add('open');
                }
            });
        }
    }

});