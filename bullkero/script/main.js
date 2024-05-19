window.addEventListener('DOMContentLoaded', function (event) {
    //mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header = document.querySelector('.header');
    let header_nav_menu = document.querySelector('.header__nav');

    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
            header.classList.remove('open');

            if (languages.classList.contains('open')) {
                languages.classList.remove('open');
            }

            for (let i = 0; i < header_nav_section.length; i++) {
                header_nav_section[i].classList.remove('active');
            }

        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
            header.classList.add('open');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });


    //submenu
    let header_nav_section = document.querySelectorAll('.main-nav__section');

    for (let i = 0; i < header_nav_section.length; i++) {
        let header_nav_subtitle = header_nav_section[i].querySelector('.main-nav__subtitle');

        header_nav_subtitle.addEventListener('click', function () {
            header_nav_section[i].classList.toggle('active');
        });
    }

    //languages
    let languages = document.querySelector('.languages');

    languages.addEventListener('click', function () {
        languages.classList.toggle('open');
    });
});
