let menu_btn = document.querySelector('.main-header__menu-button'),
    menu = document.querySelector('.main-header__navigation'),
    close_btn = document.querySelector('.main-header__close-button'),
    main_header = document.querySelector('.main-header');

menu_btn.addEventListener('click', function () {
    menu.style.display = 'inline-block';
    menu_btn.style.display = 'none';
    close_btn.style.display = 'inline-block';
    main_header.style.backgroundColor = '#008073';
});

close_btn.addEventListener('click', function () {
    menu.style.display = 'none';
    menu_btn.style.display = 'inline-block';
    close_btn.style.display = 'none';
    main_header.style.backgroundColor = 'transparent';
});