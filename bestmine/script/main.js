$(document).ready(function () {

    // слайдер баланса валют
    $('.mining__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        // variableWidth: true,
        responsive: [
            {
                // breakpoint: 1200,
                // settings: {
                //     slidesToShow: 3
                // }
            }
        ]
    });

    // кастомный input range
    const setting_range = {
        start: 0,
        step: 1,

        format: {
            to: (v) => parseFloat(v).toFixed(0),
            from: (v) => parseFloat(v).toFixed(0)
        },

        range: {
            'min': 0,
            'max': 100
        },

        tooltips: true,
        connect: [true, false],
    }

    let ranges = document.querySelectorAll('.ranges__range');

    for (let i = 0; i < ranges.length; i++) {
        noUiSlider.create(ranges[i], setting_range);
    }

    // текст по кругу
    let circles = document.querySelectorAll('.stats__about')

    for (let i = 0; i < circles.length; i++) {
        new CircleType(circles[i]);
    }

    // показать / скрыть пароль
    $('body').on('click', '.password-control', function () {
        if ($('.password-input').attr('type') == 'password') {
            $(this).addClass('view');
            $('.password-input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $('.password-input').attr('type', 'password');
        }
        return false;
    });


});