window.addEventListener('DOMContentLoaded', function (event) {


    // кастомный input range
    let filter_slider = document.getElementById('filter-slider-js');
    let filter_reset = document.getElementById('filter-reset-js');
    let filter_form = document.getElementById('filter-form-js');
    let card_text_block = document.querySelectorAll('.card__text-block');


    if (filter_slider !== null) {
        noUiSlider.create(filter_slider, {
            start: [1, 1000],
            connect: false,
            tooltips: true,

            format: {
                to: (v) => parseFloat(v).toFixed(0),
                from: (v) => parseFloat(v).toFixed(0)
            },


            range: {
                'min': 0,
                'max': 1000
            }
        });
    }


    // сброс формы
    if (filter_form !== null) {
        filter_reset.addEventListener('click', function () {
            filter_form.reset();
            filter_slider.noUiSlider.reset()
        });
    }


    // слайдеры
    const product_swiper = new Swiper('.card__big-photo-block', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.card__slider-button-next',
            prevEl: '.card__slider-button-prev',
        }
    });


    // открытие блоков описания товара
    if (card_text_block !== null) {
        for (let i = 0; i < card_text_block.length; i++) {
            let card_text = card_text_block[i].querySelector('.card__text');

            card_text_block[i].addEventListener('click', function () {
                card_text_block[i].classList.toggle('active');
                card_text.classList.toggle('active');
            });
        }
    }


    // открытие истоии заказов
    let history_item_content = document.querySelectorAll('.history__item-content');

    if (history_item_content !== null) {
        for (let i = 0; i < history_item_content.length; i++) {

            let show_btn = history_item_content[i].querySelector('.history-show');
            let hide_btn = history_item_content[i].querySelector('.history-hide');

            show_btn.addEventListener('click', function (event) {
                if (!history_item_content[i].classList.contains('active')) {
                    history_item_content[i].classList.add('active');
                }
            });

            hide_btn.addEventListener('click', function (event) {
                if (history_item_content[i].classList.contains('active')) {
                    history_item_content[i].classList.remove('active');
                }
            });
        }
    }


    // горизонтальный скролл

    let scroll_items = document.querySelectorAll('.banners__item');

    let sliders_count = -3;
    let sliders_to_show = 3;

    for (let i = 0; i < scroll_items.length; i++) {
        sliders_count += 1;
    }

    let more = sliders_count / sliders_to_show;

    let controller = new ScrollMagic.Controller();

    let x = 100 * more;

    let duration = 300 * more;

    var horizontalSlide = new TimelineMax()
        .to("#js-slideContainer", 1, {x: "-" + x +"%"})


    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: duration + "%"
    })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller)


});