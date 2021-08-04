document.addEventListener('DOMContentLoaded', () => {
    let price = document.querySelector('input[name="price"]:checked').value,
        pagamente = document.querySelector('input[name="pagamente"]:checked').value,
        price_cnt = document.querySelector('input[name="price"]:checked').dataset.count;

    let total = document.querySelector('.form__total strong'),
        subtotal = document.querySelector('.form__total small');

    let price_all = document.querySelectorAll('input[name="price"]'),
        price_one = document.getElementById('one'),
        price_three = document.getElementById('three'),
        price_six = document.getElementById('six');

    let pagamente_all = document.querySelectorAll('input[name="pagamente"]'),
        pagamente_credito = document.getElementById('credito'),
        pagamente_boleto = document.getElementById('boleto'),
        pagamente_pix = document.getElementById('pix');

    let step1_inputs = document.querySelector('#step1-inputs').querySelectorAll('input'),
        step1 = document.querySelector('#step1'),
        step2 = document.querySelector('#step2'),
        step1_btn = document.querySelector('#step2 .modal__step.first');

    // помещение исходного значения в итоговое окно
    total.innerText = price;
    subtotal.innerText = price_cnt;

    // блокировка input radio и помещение значения в итоговое окно
    function disable_radio(value_one, value_two, input_one, input_two) {
        if (value_one !== value_two) {
            input_one.disabled = true;
            input_two.disabled = true;

            input_one.checked = false;
            input_two.checked = false;
        } else {
            input_one.disabled = false;
            input_two.disabled = false;
        }
    }

    disable_radio(price, price_one.value, pagamente_boleto, pagamente_pix);
    disable_radio(pagamente, pagamente_credito.value, price_three, price_six);

    price_all.forEach((item) => {
        item.addEventListener('change', function () {
            const {value} = this;
            const count = this.dataset.count;

            total.innerText = value;
            subtotal.innerText = count;

            disable_radio(value, price_one.value, pagamente_boleto, pagamente_pix);
        });
    });

    pagamente_all.forEach((item) => {
        item.addEventListener('change', function () {
            const {value} = this;
            disable_radio(value, pagamente_credito.value, price_three, price_six);
        });
    });


    // переход к предыдущему шагу
    step1_btn.addEventListener('click', function () {
        step1.classList.remove('visually-hidden');
        step2.classList.add('visually-hidden');
    });

    // валидация первого шага
    function validate_form() {
        let valid = true;
        step1_inputs.forEach((item) => {
            let value;
            if (item.value != '') {
                value = 1;
            } else value = 0;
            valid *= value;
        });
        return valid;
    }

    // переход к следующему шагу
    let button = document.querySelector('.form__button--big');
    button.addEventListener('click', function () {
        if (validate_form()) {
            step1.classList.add('visually-hidden');
            step2.classList.remove('visually-hidden');
        }
    });


    // запуск пятиминутного таймера
    let fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
});

// маска даты карты
function addSlashes(element) {
    let ele = document.getElementById(element.id);
    ele = ele.value.split('/').join('');    // Remove slash (/) if mistakenly entered.
    if (ele.length < 4 && ele.length > 0) {
        let finalVal = ele.match(/.{1,2}/g).join('/');
        document.getElementById(element.id).value = finalVal;
    }
}

// таймер для отсчета минут
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}