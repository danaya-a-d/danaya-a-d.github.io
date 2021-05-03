//кастомный select
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

//маска телефона
$(".phone_mask").mask("+7(999)999-99-99");

//слайдеры
$('.story__list').slick({
    dots: true,
    dotsClass: "my-dots",
    arrows: false
});

if (window.matchMedia("(max-width: 600px)").matches) {
    $('.results__list').slick({
        dots: false,
        arrows: false
    });

    $('.packages__item-list').slick({
        dots: false,
        arrows: false
    });
}


//////////////// МОБИЛЬНОЕ МЕНЮ ////////////////
let navToggle = document.querySelector('.header__nav-toggle');
let navMain = document.querySelector('.header__nav');
let header = document.querySelector('.header');

navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        navToggle.classList.add('header__nav-toggle--open');
        header.style.backgroundColor = '#FFFBED';
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        navToggle.classList.remove('header__nav-toggle--open');
        header.style.backgroundColor = '#FFF';
    }
});


////показ пакетов обучения
function packet_show(){
    let packet_type = $('input[name="packet-type"]:checked').val();
    let packet_time = $('input[name="packet-time"]:checked').val();

    if (packet_type === "individual") {
        $(".packages__line--time").removeClass("visually-hidden");
        if (packet_time === "30min") {
            $(".packages__big-item").addClass("visually-hidden");
            $("#individual-30-list").removeClass("visually-hidden");
        }
        if (packet_time === "60min") {
            $(".packages__big-item").addClass("visually-hidden");
            $("#individual-60-list").removeClass("visually-hidden");
        }
    }
    else if (packet_type === "talking-club") {
        $(".packages__big-item").addClass("visually-hidden");
        $("#talking-club-list").removeClass("visually-hidden");
        $(".packages__line--time").addClass("visually-hidden");
    }
}

packet_show();
$('.packages__input').on('change', function (e) {
    packet_show();
});
