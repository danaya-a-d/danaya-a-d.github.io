$(document).ready(function () {

    //маска телефона
    $(".phone_mask").mask("+7(999)999-99-99");

    //Слайдер "Кому может быть полезна остеопатия?"
    $('.useful__list').slick({
        dots: true,
        arrows: false
    });

    //Слайдер отзывов
    $('.reviews__list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    //Открытие FAQ
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== undefined) {

        for (let i = 0; i < faq_item.length; i++) {
            let faq_text = faq_item[i].querySelector('.faq__text');

            faq_item[i].addEventListener('click', function (event) {

                if (faq_text.classList.contains('visually-hidden')) {

                    for (let j = 0; j < faq_item.length; j++) {

                        let faq_text = faq_item[j].querySelector('.faq__text');
                        faq_text.classList.add('visually-hidden');
                        faq_item[j].classList.remove('faq__item--active');
                    }

                }

                faq_text.classList.toggle('visually-hidden');
                faq_item[i].classList.toggle('faq__item--active');
            });
        }
    }
});