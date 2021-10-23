$(document).ready(function () {

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
            $(this).parent().prev().text('');
            $(this).parent().prev().append($(this).html());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
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
            'max': 10
        },

        tooltips: true,
        connect: [true, false],
        // Show a scale with the slider
        pips: {
            mode: 'steps',
            stepped: true,
            density: 4
        }
    }

    let ranges = document.querySelectorAll('.range-js');

    for (let i = 0; i < ranges.length; i++) {
        noUiSlider.create(ranges[i], setting_range);
    }


    //Открытие FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== undefined) {

        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {

                if (!this.classList.contains('active')) {
                    for (let j = 0; j < faq_item.length; j++) {
                        faq_item[j].classList.remove('active');
                    }
                }

                faq_item[i].classList.toggle('active');
            });
        }
    }

    /////// ОТКРЫТИЕ ТАБОВ ///////
    let tabs_item_program = document.querySelectorAll('.banners__block');
    let tabs_btn_program = document.querySelectorAll('.banners__item');

    if (tabs_btn_program !== undefined) {
        for (let i = 0; i < tabs_btn_program.length; i++) {

            tabs_btn_program[i].addEventListener('click', function () {

                for (let j = 0; j < tabs_item_program.length; j++) {
                    tabs_btn_program[j].classList.remove('active');
                    tabs_item_program[j].classList.remove('active');
                }
                tabs_btn_program[i].classList.add('active');
                tabs_item_program[i].classList.add('active');
            });
        }
    }

    // копировать в буфер обмена
    $('.js-copy').on('click', function () {
        copyToClipboard($(this).text());
        ui_copyDone(this);
        // this → объект, в контексте которого вызвана функция (здесь: кликнутый HTML элемент
        // $(this) → оно же, завернутое в jQuery-объект.
    });

    $('.js-copy-btn').each(function (index) {
        $(this).on('click', function () {
            copyToClipboard($('.js-copy-target').eq(index).text());
            ui_copyDone(this);
        });
        // this → очередной элемент, который перебираем
        // index → его номер, который совпадает с номером блока, откуда нужно копировать
    });

    /***/

    function copyToClipboard(str) {
        let area = document.createElement('textarea');

        document.body.appendChild(area);
        area.value = str;
        area.select();
        document.execCommand("copy");
        document.body.removeChild(area);
    }

    function ui_copyDone(btn) {
        let contentSaved = btn.innerHTML;

        btn.classList.add('copied');

        setTimeout(function () {
            btn.innerHTML = contentSaved;
            btn.classList.remove('copied');
        }, 1500);
    }
});