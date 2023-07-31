window.addEventListener('DOMContentLoaded', function (event) {

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

    //слайдеры
    const news_swiper = new Swiper('.news-sec__list-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,

        navigation: {
            nextEl: '.news-sec__slider-button-next',
            prevEl: '.news-sec__slider-button-prev',
        },

        pagination: {
            el: '.news-sec__pagination'
        },

        breakpoints: {
            768: {
                slidesPerView: 1.4,
                spaceBetween: 24,
            },

            1023: {
                slidesPerView: 1.84,
                spaceBetween: 32,
            },

            1440: {
                slidesPerView: 2,
                spaceBetween: 56,
                loop: false,
            }
        }
    });

    //слайдеры
    const press_swiper = new Swiper('.press__container', {
        slidesPerView: 1,
        slidesPerColumn: 3,
        spaceBetween: 16,

        pagination: {
            el: '.press__pagination'
        },

        breakpoints: {
            767: {
                slidesPerView: 2.15,
                spaceBetween: 40,
                slidesPerColumn: 1,
                allowSlideNext: false,
                allowSlidePrev: false,
            },

            1023: {
                slidesPerView: 3.15,
                slidesPerColumn: 1,
                spaceBetween: 40,
            },

            1440: {
                slidesPerView: 4.15,
                slidesPerColumn: 1,
                spaceBetween: 40,
            }
        }
    });

    const platform_swiper = new Swiper('.platform-adv__container', {
        direction: 'horizontal',
        slidesPerView: 1.25,
        spaceBetween: 16,

        pagination: {
            el: '.platform-adv__pagination'
        },

        breakpoints: {
            767: {
                slidesPerView: 'auto',
                allowSlideNext: false,
                allowSlidePrev: false,
                spaceBetween: 'auto',
            },
        }
    });

    const choosing_swiper = new Swiper('.choosing__container', {
        direction: 'horizontal',
        slidesPerView: 1.25,
        spaceBetween: 16,

        pagination: {
            el: '.choosing__pagination'
        },

        breakpoints: {
            767: {
                slidesPerView: 'auto',
                allowSlideNext: false,
                allowSlidePrev: false,
                spaceBetween: 'auto',
            },
        }
    });

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

    //mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');

    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    //смена языков
    let languages = document.querySelector('.languages');

    languages.addEventListener('click', function () {
        languages.classList.toggle('open');
    });

    //смена страниц новостей
    let news = document.querySelector('.news-section__buttons-container');

    news.addEventListener('click', function () {
        news.classList.toggle('open');
    });

    //плавная прокрутка к якорю
    const anchors = document.querySelectorAll('a[href*="#"]');

    if (anchors != null) {
        for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()

                const blockID = anchor.getAttribute('href').substr(1)

                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }

    //faq
    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== null) {
        for (i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {
                this.classList.toggle('active');
            });
        }
    }
});
