// Гугл карта
// The location of Uluru
const uluru = {lat: 52.428834, lng: 13.323385};
const popupContent = '<p class="popup">94958 Senko Parks Scherian land,\n' +
    'MN 31814-2712</p>';

function initMap(center) {

    if (center == null) {
        center = uluru;
    }

    // The map, centered at Uluru
    const mapOptions = {
        zoom: 12,
        fullscreenControl: false,
        center: center,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "saturation": "2"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [
                    {
                        "saturation": "-28"
                    },
                    {
                        "lightness": "-10"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#444444"
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
                        "saturation": "-1"
                    },
                    {
                        "lightness": "-12"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "lightness": "-31"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-74"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "lightness": "65"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "-15"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "0"
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
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "-9"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "lightness": "-14"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": "-35"
                    },
                    {
                        "gamma": "1"
                    },
                    {
                        "weight": "1.39"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-19"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "lightness": "46"
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
                "featureType": "road.highway",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "lightness": "-13"
                    },
                    {
                        "weight": "1.23"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
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
                        "color": "#adadad"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            }
        ]
    };

    const mapCanvas = document.getElementById("google-map");

    const map = new google.maps.Map(mapCanvas, mapOptions);

    const icon = {
        url: "img/map-marker.svg", // url
        scaledSize: new google.maps.Size(66, 81), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: icon,
    });

    const infowindow = new google.maps.InfoWindow({
        content: popupContent,
        pixelOffset: new google.maps.Size(200, 90)
    });

    infowindow.open(map, marker);
}


window.addEventListener('DOMContentLoaded', function (event) {
    //слайдеры
    const first_screen_swiper = new Swiper('.first-screen__sliders', {
        direction: 'horizontal',
        slidesPerView: 1,
        effect: 'fade',

        navigation: {
            nextEl: '.first-screen__slider-button-next',
            prevEl: '.first-screen__slider-button-prev',
        }
    });

    const advantages_swiper = new Swiper('.advantages__container', {
        direction: 'horizontal',
        slidesPerView: 1.3,
        spaceBetween: 16,

        breakpoints: {
            767: {
                slidesPerView: 'auto',
                allowSlideNext: false,
                allowSlidePrev: false,
                spaceBetween: 'auto',
            },
        }
    });

    const why_us_swiper = new Swiper('.why-us__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 16,

        navigation: {
            nextEl: '.why-us__slider-button-next',
            prevEl: '.why-us__slider-button-prev',
        },

        breakpoints: {
            767: {
                direction: 'horizontal',
                slidesPerView: 1,
                spaceBetween: 16,
            },

            1023: {
                direction: 'horizontal',
                slidesPerView: 2,
                spaceBetween: 16,
            },

            1260: {
                direction: 'horizontal',
                slidesPerView: 3,
                spaceBetween: 48,
            },
        }
    });

    const reviews_swiper = new Swiper('.reviews__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 29,
        allowSlideNext: false,
        allowSlidePrev: false,

        navigation: {
            nextEl: '.reviews__slider-button-next',
            prevEl: '.reviews__slider-button-prev',
        },

        breakpoints: {
            767: {
                allowSlideNext: true,
                allowSlidePrev: true,
                slidesPerView: 1,
            },

            1260: {
                slidesPerView: 2,
                allowSlideNext: true,
                allowSlidePrev: true,
            },
        }
    });

    const all_reviews_swiper = new Swiper('.all-reviews__container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 24,
        autoHeight: true,

        navigation: {
            nextEl: '.all-reviews__slider-button-next',
            prevEl: '.all-reviews__slider-button-prev',
        },

        pagination: {
            el: '.all-reviews__pagination'
        },

        breakpoints: {
            1260: {
                slidesPerView: 2,
                spaceBetween: 24,
                autoHeight: false
            },
        }
    });

    //workers
    let flip_block = document.querySelectorAll('.flip-block');

    //переворот блока
    if (flip_block !== null) {
        for (let i = 0; i < flip_block.length; i++) {
            let btn = flip_block[i].querySelector('.flip-block__front');
            let back = flip_block[i].querySelector('.flip-block__back');

            btn.addEventListener('click', function (event) {
                flip_block[i].classList.toggle('active');
            });

            back.addEventListener('click', function (event) {
                if (flip_block[i].classList.contains('active')) {
                    flip_block[i].classList.toggle('active');
                }
            });

        }
    }

    //скролл по центру блока логотипы
    let scrollElement = document.querySelector('.logos__list');
    if (scrollElement !== null) {
        window.addEventListener('load', () => {
            scrollElement.scrollLeft = (scrollElement.scrollWidth - scrollElement.clientWidth) / 2;
        });
    }

    //masonry offer page
    const grid = document.querySelector('.recommendation__list');

    const masonry = new Masonry(grid, {
        itemSelector: '.recommendation__item',
        horizontalOrder: true
    });
});
