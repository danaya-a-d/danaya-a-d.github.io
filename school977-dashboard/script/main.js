$(document).ready(function () {


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
});