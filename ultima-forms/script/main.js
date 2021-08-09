document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.steps') !== null) {
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

        let step1_inputs = document.querySelector('#step1').querySelectorAll('.input'),
            step2_inputs = document.querySelector('#step2').querySelectorAll('.input'),
            step1 = document.querySelector('#step1'),
            step2 = document.querySelector('#step2'),
            step1_btn = document.querySelector('#step2 .modal__step.first'),
            step2_btn = document.querySelector('#step1 .modal__step.second');

        let modal_steps = document.querySelector('.steps'),
            modal_pix = document.querySelector('.process--pix'),
            modal_boleto = document.querySelector('.process--boleto'),
            modal_card = document.querySelector('.process--card');

        let btn_send = document.querySelector('#btn-send'),
            payment_fieldset = document.querySelector('#payment-fieldset').querySelectorAll('input');


        window.location.hash = 'step1';
        step1_btn.classList.add('pointer');

        //отправка формы
        btn_send.addEventListener('click', function (e) {
            if (validate_form(step2_inputs)) {
                e.preventDefault();
                window.location.hash = '';
                modal_steps.classList.add('visually-hidden');
                if (pagamente_credito.checked === true) {
                    modal_card.classList.remove('visually-hidden')
                }
                if (pagamente_boleto.checked === true) {
                    modal_boleto.classList.remove('visually-hidden')
                }
                if (pagamente_pix.checked === true) {
                    modal_pix.classList.remove('visually-hidden')
                }

                /*
                let form_data = $(this).serialize(); // Собираем все данные из формы
                $.ajax({
                    type: "POST", // Метод отправки
                    url: "action.php", // Путь до php файла отправителя
                    data: form_data,
                    success: function () {
                        // Код в этом блоке выполняется при успешной отправке сообщения
                        alert("Ваше сообщение отправлено!");
                        window.location.href = '/thanks.html';
                    },
                    error: function () {
                        // Код в этом блоке выполняется при неуспешной отправке сообщения
                        alert("Сообщение не отправлено!");
                        window.location.href = '/error.html';
                    }
                });
                */

            }
        });

        steps_change(step1, step2, '#step1', '#step2');
        window.addEventListener('hashchange', function (e) {
            steps_change(step1, step2, '#step1', '#step2');
        });

        //маска телефона
        $(".phone_mask").mask("+55(99)99999-9999");
        $(".data_mask").mask("99/9999");

        // помещение исходного значения в итоговое окно
        total.innerText = price;
        subtotal.innerText = price_cnt;

        // блокировка input radio и помещение значения в итоговое окно
        function disable_radio(value_one, value_two, input_one, input_two, inputs) {
            if (value_one !== value_two) {
                input_one.disabled = true;
                input_two.disabled = true;

                input_one.checked = false;
                input_two.checked = false;

                if (inputs !== null) {
                    inputs.forEach((item) => {
                        item.disabled = true;
                        item.value = '';
                    });
                }
            } else {
                input_one.disabled = false;
                input_two.disabled = false;
                if (inputs !== null) {
                    inputs.forEach((item) => {
                        item.disabled = false;
                    });
                }
            }
        }

        disable_radio(price, price_one.value, pagamente_boleto, pagamente_pix, null);
        disable_radio(pagamente, pagamente_credito.value, price_three, price_six, payment_fieldset);

        price_all.forEach((item) => {
            item.addEventListener('change', function () {
                const {value} = this;
                const count = this.dataset.count;

                total.innerText = value;
                subtotal.innerText = count;

                disable_radio(value, price_one.value, pagamente_boleto, pagamente_pix, null);
            });
        });

        pagamente_all.forEach((item) => {
            item.addEventListener('change', function () {
                const {value} = this;

                disable_radio(value, pagamente_credito.value, price_three, price_six, payment_fieldset);
            });
        });

        // возвращается ли пользователь на следующий шаг
        let back = false;

        // переход к предыдущему шагу
        step1_btn.addEventListener('click', function () {
            step1.classList.remove('visually-hidden');
            step2.classList.add('visually-hidden');
            window.location.hash = 'step1';

            back = true;
            step2_btn.classList.add('pointer');
        });

        // переход к следующему шагу после предыдущего
        step2_btn.addEventListener('click', function () {
            if (back && validate_form(step1_inputs)) {
                step1.classList.add('visually-hidden');
                step2.classList.remove('visually-hidden');
                window.location.hash = 'step2';
            }
        });

        // валидация шага
        function validate_form(inputs) {
            let valid = true;
            inputs.forEach((item) => {
                let value;
                if (item.value != '' || item.disabled === true) {
                    value = 1;
                } else value = 0;
                valid *= value;
            });

            if (valid) {
                step2_btn.classList.add('pointer');
            } else step2_btn.classList.remove('pointer');

            return valid;
        }

        // изменения хеша адресной строки
        function steps_change(step1, step2, hash1, hash2) {
            if (window.location.hash === hash2 && validate_form(step1_inputs)) {
                step2.classList.remove('visually-hidden');
                step1.classList.add('visually-hidden');
            }

            if (window.location.hash === hash1) {
                step1.classList.remove('visually-hidden');
                step2.classList.add('visually-hidden');
            }

        }

        // переход к следующему шагу
        let button = document.querySelector('.form__button--big');
        button.addEventListener('click', function (e) {
            if (validate_form(step1_inputs) && validate_form(step2_inputs)) {
                e.preventDefault()
            }

            if (validate_form(step1_inputs)) {
                step1.classList.add('visually-hidden');
                step2.classList.remove('visually-hidden');
                window.location.hash = 'step2';
            }
        });

        // запуск пятиминутного таймера
        let fiveMinutes = 60 * 5,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    }
});

// маска даты карты
// function addSlashes(element) {
//     let ele = document.getElementById(element.id);
//     ele = ele.value.split('/').join('');    // Remove slash (/) if mistakenly entered.
//     if (ele.length < 4 && ele.length > 0) {
//         let finalVal = ele.match(/.{1,2}/g).join('/');
//         document.getElementById(element.id).value = finalVal;
//     }
// }

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

