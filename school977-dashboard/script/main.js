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

    // Слайдер новостей дашбоард
    $('.news-sec__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
    });

    // Сворачивание расписания дашбоард
    $('.schedule-list__item').on('click', function () {
        $(this).toggleClass('active');
    });

    // Сворачивание активных заданий
    $('.task').on('click', function () {
        $(this).toggleClass('active');
    });

    // Открытие/закрытие меню
    $('.header__menu-btn').on('click', function () {
        $(this).toggleClass('close');
        $('.menu').toggleClass('close');
    });

    $('.menu__overlay').on('click', function () {
        $('.header__menu-btn').toggleClass('close');
        $('.menu').toggleClass('close');
    });

    $('.menu__overlay').on('touchmove', function () {
        $('.header__menu-btn').toggleClass('close');
        $('.menu').toggleClass('close');
    });

    // диаграммы

    let progress_data = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    let progress_statistic = $('.statistic')

    for (let i = 0; i < progress_data.length; i++) {
        $('.statistic__list').append(
            '<div class="statistic__item">\n' +
            '<div class="statistic__value-block">\n' +
            '<div class="statistic__value-color"></div>\n' +
            '<span class="statistic__value-name">Алгебра</span>\n' +
            '</div>\n' +
            '<div class="statistic__value-number">100%</div>\n' +
            '</div>');
    }

    // var divs = body.selectAll("div")
    //     .data(data)
    //     .enter().append("div");
    //
    // divs.style("width", function(d) { return d + "px"; })
    //     .attr("class", "divchart")
    //     .text(function(d) { return d; });
});