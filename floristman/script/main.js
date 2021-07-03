$(document).ready(function () {

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

    function menu_open() {
        $(".menu").removeClass('menu--close');
    }

    function menu_close() {
        $(".menu").addClass('menu--close');
    }

    $('.header__open-btn').on('click', function () {
        if ($(".menu").hasClass('menu--close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    $(".phone_mask").mask("+7(999)999-99-99");

    $('.products__list--scroll').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    //чекбокс, выделенный лейбл
    function bold_label() {
        $('.filter input[type="checkbox"]:checked:not(:disabled)')
            .closest('label')
            .find('.filter__indicator-title')
            .css("color", '#FD4F79');

        $('.filter input[type="checkbox"]:not(:checked):not(:disabled)')
            .closest('label')
            .find('.filter__indicator-title')
            .css("color", 'black');
    }

    bold_label();
    $('.filter__item input').on('change', function () {
        bold_label()
    });

});
