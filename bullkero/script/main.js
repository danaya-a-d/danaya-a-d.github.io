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

    //search
    let news_form = document.querySelector('.news__form');

    // news_form.onblur = function () {
    //     this.classList.remove('active');
    // };
    //
    // news_form.onfocus = function () {
    //     this.classList.add('active');
    // };
    //


    news_form.addEventListener('focus', e => news_form.classList.add('active'), true)
    news_form.addEventListener('blur', e => news_form.classList.remove('active'), true)
});
