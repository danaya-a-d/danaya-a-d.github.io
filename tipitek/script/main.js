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
    const news_swiper = new Swiper('.news__list-container', {
        direction: 'horizontal',
        slidesPerView: 1.12,
        spaceBetween: 12,

        navigation: {
            nextEl: '.news__slider-button-next',
            prevEl: '.news__slider-button-prev',
        },

        pagination: {
            el: '.news__pagination'
        },

        breakpoints: {
            621: {
                slidesPerView: 2.65,
            },

            1024: {
                slidesPerView: 3,
            },

            1281: {
                slidesPerView: 4,
            },
        }
    });

    const partners_swiper = new Swiper('.about-us__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        effect: 'fade',
        autoHeight: true,

        fadeEffect: {
            crossFade: true
        },

        pagination: {
            el: '.about-us__pagination'
        },

        navigation: {
            nextEl: '.about-us__slider-button-next',
            prevEl: '.about-us__slider-button-prev',
        }
    });

    const cards_swiper = new Swiper('.manager-benefits__list-container', {
        slidesPerView: 1.05,
        freeMode: true,
        spaceBetween: 8,

        scrollbar: {
            el: '.manager-benefits__scrollbar',
            hide: false,
            draggable: true,
            dragSize: 100,
            snapOnRelease: false,
        },

        breakpoints: {
            621: {
                slidesPerView: 2.43,
                spaceBetween: 24,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

            1281: {
                slidesPerView: 3,
                spaceBetween: 40,
                allowSlideNext: false,
                allowSlidePrev: false,
            },
        }
    });

    const profits_swiper = new Swiper('.profits__list-container', {
        slidesPerView: 1.05,
        freeMode: true,
        spaceBetween: 8,

        scrollbar: {
            el: '.profits__scrollbar',
            hide: false,
            draggable: true,
            dragSize: 100,
            snapOnRelease: false,
        },

        breakpoints: {
            621: {
                slidesPerView: 2.43,
                spaceBetween: 24,
            },

            1025: {
                slidesPerView: 3,
                spaceBetween: 40,
            },

            1281: {
                slidesPerView: 3,
                spaceBetween: 40,
                allowSlideNext: false,
                allowSlidePrev: false,
            },
        }
    });

    const app_swiper = new Swiper('.app__list-container', {
        slidesPerView: 1.3,
        freeMode: true,
        spaceBetween: 16,

        scrollbar: {
            el: '.app__scrollbar',
            hide: false,
            draggable: true,
            dragSize: 100,
            snapOnRelease: false,
        },

        breakpoints: {
            621: {
                slidesPerView: 3.15,
            },

            1024: {
                slidesPerView: 4.25,
            },

            1281: {
                slidesPerView: 5,
                allowSlideNext: false,
                allowSlidePrev: false,
            },
        }
    });

    const solution_swiper = new Swiper('.solution__list-container', {
        slidesPerView: 1.1,
        freeMode: true,
        spaceBetween: 12,

        scrollbar: {
            el: '.solution__scrollbar',
            hide: false,
            draggable: true,
            dragSize: 100,
            snapOnRelease: false,
        },

        breakpoints: {
            621: {
                slidesPerView: 2.5,
                spaceBetween: 28,
            },

            1024: {
                slidesPerView: 4.1,
                spaceBetween: 12,
                allowSlideNext: false,
                allowSlidePrev: false,
            },

            1281: {
                slidesPerView: 4.1,
                spaceBetween: 28,
                allowSlideNext: false,
                allowSlidePrev: false,
            },
        }
    });

    const coin_swiper = new Swiper('.coin__list-container', {
        slidesPerView: 1.1,
        freeMode: true,
        spaceBetween: 12,

        scrollbar: {
            el: '.coin__scrollbar',
            hide: false,
            draggable: true,
            dragSize: 100,
            snapOnRelease: false,
        },

        breakpoints: {
            621: {
                slidesPerView: 2.5,
                spaceBetween: 28,
            },

            1024: {
                slidesPerView: 4.05,
                spaceBetween: 10,
                allowSlideNext: false,
                allowSlidePrev: false,
            },

            1281: {
                slidesPerView: 4.1,
                spaceBetween: 28,
                allowSlideNext: false,
                allowSlidePrev: false,
            },
        }
    });

    const roadmap_swiper_bottom = new Swiper('.roadmap__bottom-slider-container', {
        direction: 'horizontal',
        slidesPerView: 3.2,
        speed: 500,

        breakpoints: {
            370: {
                slidesPerView: 3,
            },

            621: {
                allowSlideNext: false,
                allowSlidePrev: false,
                slidesPerView: 'auto',
            },
        }
    });

    const roadmap_swiper_top = new Swiper('.roadmap__top-slider-container', {
        direction: 'horizontal',
        loop: false,
        speed: 500,
        slidesPerView: 1,
        effect: 'fade',
        init: false,
        fadeEffect: {
            crossFade: true
        },

        thumbs: {
            swiper: roadmap_swiper_bottom
        },

        navigation: {
            nextEl: '.roadmap__slider-button-next',
            prevEl: '.roadmap__slider-button-prev',
            renderBullet: function (index, className) {
                return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
            }
        }
    });

    roadmap_swiper_top.on("slideChange afterInit init", function () {
        let currentSlide = this.activeIndex + 1;
        document.querySelector('.counter').innerHTML = `
    <span class="counter__current">
    ${currentSlide}
    </span>
    /
    <span class="counter__total">
      ${this.slides.length}
    </span>`;
    });

    roadmap_swiper_top.controller.control = roadmap_swiper_bottom;

    roadmap_swiper_top.init();

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
    let header = document.querySelector('.header');
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header_nav_menu = document.querySelector('.header__nav');

    let header_nav_items = document.querySelectorAll('.main-nav__item');


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


    for (let i = 0; i < header_nav_items.length; i++) {
        header_nav_items[i].addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    //FAQ

    let faq_item = document.querySelectorAll('.faq__item');

    if (faq_item !== null) {
        for (let i = 0; i < faq_item.length; i++) {
            faq_item[i].addEventListener('click', function (event) {
                this.classList.toggle('active');
            });
        }
    }

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
});
