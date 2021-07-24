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


$(document).ready(function () {

//маска телефона
    $(".phone_mask").mask("+38(999)999-99-99");

//Слайдер верхнего блока
    $('.upper-block__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        // fade: true,
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
        infinite: false
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
        pauseOnHover: false
    });

    //Слайдеры производства
    $('.production__big-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.production__small-list'
    });

    $('.production__small-list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.production__big-list',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: false,
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
    $('.phones a').slice(2, 6).hide();
    $('.header__more-phones').on('click', function (e) {
        $('.phones a').slice(2, 6).toggle();
    });


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
});

