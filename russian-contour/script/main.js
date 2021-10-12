document.addEventListener('DOMContentLoaded', () => {
    let month_nav_item = document.querySelectorAll('.calendar__months-item');
    let month_item = document.querySelectorAll('.calendar__main-months-item');
    let calendar_data_active = document.querySelectorAll('.calendar__data-item.active');
    let calendar = document.querySelector('.events__calendar');
    let calendar_button = document.querySelector('.events__button');

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
    });


    for (let i = 0; i < calendar_data_active.length; i++) {
        calendar_data_active[i].addEventListener('click', function () {
            calendar.classList.add('hide');
            let month = calendar_data_active[i].closest('.calendar__main-months-item');
            let month_name = month.querySelector('.calendar__name').innerHTML;
            calendar_button.innerText = calendar_data_active[i].innerText + " " + month_name;
        });
    }

});
