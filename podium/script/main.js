$(document).ready(function () {
    //Слайдер верхнего блока
    $('.banner__list').slick({
        dots: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.goods__list--slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.slider-left'),
        nextArrow: $('.slider-right'),
    });

    //Маска телефона
    $(".call-me-input").mask("+38(999)999-99-99");
    $(".ordering__tel").mask("+38 999 999 99 99");

    //Кастомный input number
    $('.counter .counter__button').on('click', function () {
        var input = $(this).closest('.counter').find('input'); // инпут
        var value = parseInt(input.val()) || 0; // получаем value инпута или 0
        if ($(this).hasClass('minus')) {
            if (value - 1 > 0)
                value = value - 1; // вычитаем из value 1
        }
        if ($(this).hasClass('plus')) {
            value = value + 1; // прибавляем к value 1
        }
        input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
        // initCart();
    });

    $('.counter .counter__input').on('keyup', function () {
        if (!$(this).val().length) {
            $(this).val(1);
        }
    });

    //Показать / скрыть пароль

    $('body').on('click', '.password-control', function(){
        if ($('#password-input').attr('type') == 'password'){
            $(this).addClass('view');
            $('#password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('#password-input').attr('type', 'password');
        }
        return false;
    });
});