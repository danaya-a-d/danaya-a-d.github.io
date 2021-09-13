new WOW().init();

// Гугл карта
// The location of Uluru
const uluru = {lat: 50.438549, lng: 30.416071};

function initMap(center) {

    if (center == null) {
        center = uluru;
    }

    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 14,
        fullscreenControl: false,
        center: center,
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

    const icon = {
        url: "img/map-marker.svg", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: icon,
    });
}


$(document).ready(function () {

    // переключение адресов гугл карты
    $('.coordinates__item').on('click', function (e) {

        $('.coordinates__item').removeClass('active');
        $(this).addClass('active');

        initMap($(this).data('coords'));
    });

    //Маска телефона
    $(".phone_mask").mask("+7(999)999-99-99");


    // слайдеры
    $('.why-us__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.facilities__list').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    $('.visual__sliders').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true
    });

    $('.reasons__list').slick({
        centerMode: true,
        slidesToShow: 3,
        variableWidth: true,
        dots: true,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.reviews__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.professionals__list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });


    // закрытие видео в нижнем левом углу
    $('.fixed-video__close').on('click', function (e) {
        $('.fixed-video').hide();
    });

    // модальные окна
    function show(modal) {
        modal.removeClass('hide');
        modal.addClass('show');
        $('.modal__overlay').removeClass('hide');
        $('.modal-back').removeClass('hide');
    }

    function hide(modal) {
        modal.addClass('hide');
        $('.modal__overlay').addClass('hide');
        $('.modal-back').addClass('hide');
    }

    function modal_show(modal, button_open) {

        if (button_open !== null) {
            button_open.on('click', function (e) {
                show(modal);
            });
        }

        $('.modal-close').on('click', function (e) {
            hide(modal);
        });

        $('.modal__overlay').on('click', function (e) {
            modal.addClass('hide');
            hide(modal);
        });

        $(document).keydown(function (e) {
            if (e.which === 27) {
                hide(modal);
            }
        });
    }

    modal_show($('.modal--recall'), $('.recall-js'));
    modal_show($('.modal--calc'), $('.calc-js'));
    modal_show($('.modal--table'), $('.table-js'));
    modal_show($('.modal--step-1'), $('.request-js'));

    $('.modal--step-1 .button').on('click', function (e) {
        e.preventDefault();
        hide($('.modal--step-1'));
        show($('.modal--step-2'));
        modal_show($('.modal--step-2'), null)
    });

    $('.modal--step-2 .button').on('click', function (e) {
        e.preventDefault();
        hide($('.modal--step-2'));
        show($('.modal--step-3'));
        modal_show($('.modal--step-3'), null)
    });

    $('.modal--step-3 .button').on('click', function (e) {
        e.preventDefault();
        hide($('.modal--step-3'));
        show($('.modal--step-4'));
        modal_show($('.modal--step-4'), null)
    });


    $('.recall-close').on('click', function (e) {
        hide($('.modal--table'));
        show($('.modal--recall'));
        modal_show($('.modal--recall'), null)
    });


    // модалка при попытке покинуть сайт
    let first = true;
    $(document).mouseleave(function () {
        if (first && $('.modal-back').hasClass('hide')) {
            show($('.modal--wait'));
            modal_show($('.modal--wait'), null)
            first = false;
        }
    });

    // переключение вкладок блока старт, качество, контроль
    function fast_toggle(select) {
        $('.fast__nav-button' + select).on('click', function (e) {
            $('.fast__nav-button').addClass('button--empty');
            $('.fast__nav-item').addClass('inactive');

            $('.fast__nav-button').removeClass('button--noborder');
            $('.fast__nav-item').removeClass('active');
            $('.fast__nav-item').removeClass('show');


            if ($('.fast__nav-button' + select).hasClass('button--empty')) {

                $('.fast__nav-button' + select).removeClass('button--empty');
                $('.fast__nav-item' + select).removeClass('inactive');

                $('.fast__nav-button' + select).addClass('button--noborder');
                $('.fast__nav-item' + select).addClass('active');
                $('.fast__nav-item' + select).addClass('show');
            }
        });
    }

    fast_toggle('.control');
    fast_toggle('.quality');
    fast_toggle('.start');


    // переключение вкладок со слайдерамим видео
    function visual_toggle(select) {
        $('.visual__nav-item' + select).on('click', function (e) {

            $('.visual__nav-item').removeClass('active');
            $('.visual__item').addClass('hidden');

            $('.visual__nav-item' + select).addClass('active');
            $('.visual__item' + select).removeClass('hidden');
        });
    }

    visual_toggle('.unloading');
    visual_toggle('.review');
    visual_toggle('.full');


    // кастомный input range
    let range_auto = document.getElementById('range-auto');
    let range_check = document.getElementById('range-check');
    let range_chem = document.getElementById('range-chem');
    let range_rent = document.getElementById('range-rent');
    let range_water = document.getElementById('range-water');

    const setting_range = {
        start: 850,
        step: 1,

        format: {
            to: (v) => parseFloat(v).toFixed(0),
            from: (v) => parseFloat(v).toFixed(0)
        },

        range: {
            'min': 500,
            'max': 3500
        },

        tooltips: true,
        connect: [true, false],
        // Show a scale with the slider
        pips: {
            mode: 'steps',
            stepped: true,
            density: 4
        },

    }

    noUiSlider.create(range_auto, setting_range);
    noUiSlider.create(range_check, setting_range);
    noUiSlider.create(range_chem, setting_range);
    noUiSlider.create(range_rent, setting_range);
    noUiSlider.create(range_water, setting_range);


    // всплывающие видео fancybox
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


    // переключение квиза
    $('.quiz__label').on('click', function (e) {
        if ($(this).closest(".quiz__fieldset").nextAll(".quiz__fieldset").length !== 0) {
            $(this).closest(".quiz__fieldset").addClass('hide');
            $(this).closest(".quiz__fieldset").next(".quiz__fieldset").removeClass('hide');
        }
    });

});