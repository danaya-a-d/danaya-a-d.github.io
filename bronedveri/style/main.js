// Гугл карта
function initMap() {
    // The location of Uluru
    const uluru = {lat: 50.438549, lng: 30.416071};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 12,
        fullscreenControl: false,
        center: uluru,
        styles: [
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "2.00"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#9c9c9c"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#F6F6F4"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#F6F6F4"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 45
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#FEFEFE"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7b7b7b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#46bcec"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#CAD2D3"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#070707"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ]
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
        icon: 'img/map-marker.svg'
    });
    console.log(document.getElementById("google-map"));
}

// Фикс 100vh на мобильных устройствах
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

$(document).ready(function () {

//маска телефона
    $(".phone_mask").mask("+38(999)999-99-99");

//Слайдер верхнего блока
    $('.upper-block__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        speed: 1000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        touchThreshold: 100,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    //Слайдер карточек товаров
    $('.doors--slick').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //Слайдер фото домов
    $('.big-slider').slick({
        centerMode: true,
        centerPadding: '0px',
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    //Слайдеры производства
    $('.production__big-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.production__small-list',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                }
            }
        ]
    });

    $('.production__small-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.production__big-list',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false
    });

    //Слайдеры карточки товара
    $('.product__big-photo-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.product__small-photo-list'
    });

    $('.product__small-photo-list').slick({
        slidesToShow:
            $(this).find(".product__small-photo-item").length === 1 ? 1 :
                $(this).find(".product__small-photo-item").length === 2 ? 2 :
                    $(this).find(".product__small-photo-item").length === 3 ? 3 :
                        $(this).find(".product__small-photo-item").length === 4 ? 4 :
                            $(this).find(".product__small-photo-item").length === 5 ? 5 : 6,
        slidesToScroll: 1,
        asNavFor: '.product__big-photo-list',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });


    //модальные окна
    function modal_show(modal, button_open) {

        function show() {
            modal.removeClass('hide');
            modal.addClass('show');
            $('.modal__overlay').removeClass('hide');
            $('.modal__back').removeClass('hide');
        }

        function hide() {
            modal.addClass('hide');
            $('.modal__overlay').addClass('hide');
            $('.modal__back').addClass('hide');
        }

        button_open.on('click', function (e) {
            show();
        });
        $('.modal-close').on('click', function (e) {
            hide();
        });
        $('.modal__overlay').on('click', function (e) {
            modal.addClass('hide');
            hide();
        });
        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide();
            }
        });
    }

    modal_show($('.modal'), $('.button-modal'));


    //показ доп.телефонов в шапке
    function toggle_phones() {
        if (mediaQuery.matches) {
            $('.phones a').slice(0, 6).show();
        } else {
            $('.phones a').slice(2, 6).hide();
            $('.header__more-phones').on('click', function (e) {
                $('.phones a').slice(2, 6).toggle();
            });
        }
    }

    //увеличение изображений
    if ($('[data-fancybox="gallery"]').length > 0) {
        $('[data-fancybox="gallery"]').fancybox({
            thumbs: {
                showOnStart: true
            },
            hash: true,
            hideOnOverlayClick: true,
            enableEscapeButton: true
        });
    }

    const mediaQuery = window.matchMedia('(max-width: 991px)');

    //перемещение элементов на моб
    function moving_header_elements() {

        if (mediaQuery.matches) {
            // if($('.header__mobile').children('.header__languages').length < 0) {
            $('.header__mobile').append($('.header__logo'));
            $('.header__mobile').append($('.header__languages'));

            $('.footer__block-last').append($('.footer__socials'));

            $('.product__wrapper').append($('.product__title'));
            $('.product__wrapper').append($('.product__about-block'));

            // }
        } else {
            $('.header__bottom .wrapper').append($('.header__languages'));
            $('.header__top .wrapper').prepend($('.header__logo'));

            $('.product__wrapper').prepend($('.product__title'));
            $('.product__cart').append($('.product__about-block'));
        }
    }

    // перемещение элементов в хедере
    toggle_phones();
    moving_header_elements();
    window.addEventListener('resize', function (event) {
        toggle_phones();
        moving_header_elements();
    }, true);

    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header').removeClass('close');
        $('.header').addClass('fixed');
        $('.header__open-menu').addClass('open');
    }

    function menu_close() {
        $('.header').addClass('close');
        $('.header').removeClass('fixed');
        $('.header__open-menu').removeClass('open');
    }

    $('.header__open-menu').on('click', function () {
        if ($(".header").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });
});

