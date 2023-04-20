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

    const services__list = new Swiper('.services__list-container', {
        slidesPerView: 1.05,
        spaceBetween: 10,

        navigation: {
            nextEl: '.services__slider-button-next',
            prevEl: '.services__slider-button-prev',
        },

        breakpoints: {

            768: {
                slidesPerView: 2.5,
            },

            992: {
                slidesPerView: 4.1,
            }
        }
    });

    document.querySelectorAll('.floors__usage').forEach(n => {
        const slider = new Swiper(n.querySelector('.floors__usage-container'), {
            slidesPerView: 1.35,
            spaceBetween: -1,

            navigation: {
                nextEl: n.querySelector('.floors__slider-button-next'),
                prevEl: n.querySelector('.floors__slider-button-prev'),
            },

            breakpoints: {
                481: {
                    slidesPerView: 2.2,
                },

                768: {
                    slidesPerView: 3.2,
                },

                992: {
                    slidesPerView: 4.25,
                },

                1121: {
                    slidesPerView: 5.25,
                }
            }
        });
    });

    // floors
    let tech_lists = document.querySelectorAll('.floors__item');
    let tech_toggles = document.querySelectorAll('.floors__toggle');

    for (let i = 0; i < tech_toggles.length; i++) {
        tech_toggles[i].onclick = function() {

            for (let j = 0; j < tech_toggles.length; j++) {
                tech_toggles[j].classList.remove('active');
                tech_toggles[i].classList.add('active');

                tech_lists[j].classList.remove('active');
                tech_lists[i].classList.add('active');
            }

            if (tech_toggles[i].classList.contains('active')) {
                if (window.matchMedia('(max-width: 767px)').matches) {
                    $('html, body').animate({
                        scrollTop: $(this).offset().top - 10
                    }, 300);
                }
            }
        };
    }

    //Phone mask
    $(".phone_mask").mask("+38 ( 999 ) 999-99-99");
});
