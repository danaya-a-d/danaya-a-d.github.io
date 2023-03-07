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

    //FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== null) {
        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {
                this.classList.toggle('active');
            });
        }
    }

    //Mobile menu
    let header = document.querySelector('.header');
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');


    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    //Modals
    function modal_show(modal, button_open) {

        function show() {
            modal.removeClass('hide');
            modal.addClass('show');
            $('.modal-overlay').removeClass('hide');
            $('.modal-back').removeClass('hide');
        }

        function hide() {
            modal.addClass('hide');
            $('.modal-overlay').addClass('hide');
            $('.modal-back').addClass('hide');
        }

        button_open.on('click', function (e) {
            show();
        });
        $('.modal-close').on('click', function (e) {
            hide();
        });
        $('.modal-overlay').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });
        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide();
            }
        });
    }

    modal_show($('.modal'), $('.button-modal'));

    //Input number
    $('.counter .counter__button').on('click', function () {
        let input = $(this).closest('.counter').find('input'); // инпут
        let value = parseInt(input.val()) || 0; // получаем значение инпута или 0
        if ($(this).hasClass('minus')) {
            if (value - 1 >= 0)
                value = value - 1; // вычитаем из значения 1
        }
        if ($(this).hasClass('plus')) {
            value = value + 1; // прибавляем к значению 1
        }
        input.val(value).change(); // выводим полученное значение в инпут
    });

    //Phone mask
    $(".phone_mask").mask("+7(999)999-99-99");
});
