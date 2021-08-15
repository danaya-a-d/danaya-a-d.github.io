$(document).ready(function () {

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
        $('.header__nav').addClass('open');
        $('.header__open-menu').addClass('close');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
        $('.header__nav').removeClass('open');
        $('.header__open-menu').removeClass('close');
    }

    $('.header__open-menu').on('click', function () {
        if ($(".header__nav").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    //Плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {
        menu_close();
        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top + -100
        }, 1000);
        e.preventDefault();
    })
});