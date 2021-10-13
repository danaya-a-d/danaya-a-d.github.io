document.addEventListener('DOMContentLoaded', () => {

    //100vh на мобильных устройствах
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


    // Календарь
    let month_nav_item = document.querySelectorAll('.calendar__months-item');
    let month_item = document.querySelectorAll('.calendar__main-months-item');
    let calendar_data_active = document.querySelectorAll('.calendar__data-item.active');
    let calendar = document.querySelector('.events__calendar');
    let calendar_button = document.querySelector('.events__button');
    let calendar_close_btn = document.querySelector('.calendar__close-btn');

    let body = document.querySelector('body');

    for (let i = 0; i < month_nav_item.length; i++) {
        month_nav_item[i].addEventListener('click', function () {
            for (let j = 0; j < month_nav_item.length; j++) {
                month_nav_item[j].classList.remove('active');
                month_item[j].classList.remove('active');
            }
            month_nav_item[i].classList.add('active');
            month_item[i].classList.add('active');
        });
    }

    calendar_button.addEventListener('click', function () {
        calendar.classList.toggle('hide');
        body.classList.toggle('no-scroll');
    });

    calendar_close_btn.addEventListener('click', function () {
        calendar.classList.add('hide');
        body.classList.remove('no-scroll');
    });


    for (let i = 0; i < calendar_data_active.length; i++) {
        calendar_data_active[i].addEventListener('click', function () {
            calendar.classList.add('hide');
            body.classList.remove('no-scroll');
            let month = calendar_data_active[i].closest('.calendar__main-months-item');
            let month_name = month.querySelector('.calendar__name').innerHTML;
            calendar_button.innerText = calendar_data_active[i].innerText + " " + month_name;
        });
    }

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
        body.classList.add('no-scroll');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
        body.classList.remove('no-scroll');
    }

    $('.header__menu-btn').on('click', function () {
        menu_open();
    });

    $('.header__close-btn').on('click', function () {
        menu_close();
    });

});
