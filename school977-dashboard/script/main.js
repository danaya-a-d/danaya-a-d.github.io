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

    // Сворачивание вкладок успеваимости
    $('.performance__item').on('click', function () {
        $(this).toggleClass('active');
    });

    // Открытие/закрытие меню
    $('.header__menu-btn').on('click', function () {
        $(this).toggleClass('close');
        $('.menu').toggleClass('close');
    });

    $('.menu__overlay').on('click', function () {
        $('.header__menu-btn').addClass('close');
        $('.menu').addClass('close');
    });

    $('.menu__overlay').on('touchmove', function () {
        $('.header__menu-btn').addClass('close');
        $('.menu').addClass('close');
    });

    // диаграммы

    let progress_data = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    let text_color = 'white';

    for (let i = 0; i < progress_data.length; i++) {

        if (progress_data[i] <= 29) {
            text_color = '#222529'
        }

        $('.statistic__list').append(
            '<div class="statistic__item">\n' +
            '<div class="statistic__value-block">\n' +
            '<div class="statistic__value-color" style="height: ' + progress_data[i] + '%"></div>\n' +
            '<span class="statistic__value-name" style="color: ' + text_color + '">Алгебра</span>\n' +
            '</div>\n' +
            '<div class="statistic__value-number">' + progress_data[i] + '%</div>\n' +
            '</div>');
    }

    $('.statistic__sort-button').on('click', function () {
        $('.statistic__list').toggleClass('reverse');
        $('.statistic__sort-button').toggleClass('reverse');
    });


    // переключение вкладок

    let toggles_items = document.querySelectorAll('.toggles__item');
    let diary_blocks = document.querySelectorAll('.diary__block');

    for (let i = 0; i < toggles_items.length; i++) {

        toggles_items[i].addEventListener('click', function () {

            for (let j = 0; j < toggles_items.length; j++) {
                toggles_items[j].classList.remove('active');
                diary_blocks[j].classList.remove('active');
            }

            toggles_items[i].classList.add('active');
            diary_blocks[i].classList.add('active');
        });
    }
});