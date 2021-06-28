// Гугл карта
function initMap() {
    // The location of Uluru
    const uluru = {lat: 50.438549, lng: 30.416071};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        fullscreenControl: false,
        center: uluru,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8b9198"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#323336"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#414954"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2e2f31"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#7a7c80"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#242427"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393a3f"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#202022"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#202124"
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
}


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
            $(this).parent().prev().text($(this).text());
            $(this).parent().prev().prev().val($(this).text());
        });

        $(document).click(function (e) {
            if (!$(e.target).closest('.select').length) {
                $('.select__head').removeClass('open');
                $('.select__list').fadeOut();
            }
        });
    });

    //Слайдер верхнего блока
    $('.upper-block__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: false,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    //Слайдер видео
    $('.product__video-list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: $('.slider-left'),
        nextArrow: $('.slider-right'),
    });

    //слайдер ассортимента
    $('.assortment__sliders').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        infinite: false,
        prevArrow: $('.assortment__slider-left'),
        nextArrow: $('.assortment__slider-right'),
    });


    //маска телефона
    $(".phone_mask").mask("+380(99)999-99-99");

    //модальные окна
    function modal_show(modal, button_open) {

        function show() {
            modal.removeClass('hide');
            modal.addClass('show');
            $('.modal__overlay').removeClass('hide');
            $('.modal__back').removeClass('hide');
            $('.page-main').addClass('blur');
            $('.header').addClass('blur');
            $('.footer').addClass('blur');
        }

        function hide() {
            modal.addClass('hide');
            $('.modal__overlay').addClass('hide');
            $('.modal__back').addClass('hide');
            $('.page-main').removeClass('blur');
            $('.header').removeClass('blur');
            $('.footer').removeClass('blur');
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

    modal_show($('.modal--contacts'), $('.contacts__button'));
    modal_show($('.modal--cart'), $('.cart-button'));


    //корзина
    // (function () {
    //     const cart = JSON.parse(localStorage.getItem('cart')) || {};
    //     const cartListDOMElement = document.querySelector('.js-cart-list');
    //
    //     const saveCart = () => {
    //         localStorage.setItem('cart', JSON.stringify(cart));
    //     };
    //
    //     const updateCart = () => {
    //         saveCart()
    //     };
    //
    //     const getProductData = (productDOMElement) => {
    //         const id = productDOMElement.getAttribute('data-product-name');
    //         const name = productDOMElement.getAttribute('data-product-name');
    //         const price = productDOMElement.getAttribute('data-price');
    //         const src = productDOMElement.getAttribute('data-product-src');
    //         const quantity = 1;
    //
    //         return {id, name, price, src, quantity};
    //     };
    //
    //     const renderCart = () => {
    //         const ids = Object.keys(cart);
    //         ids.forEach((id) => renderCartItem(cart[id]));
    //
    //         console.log(cart);
    //     };
    //
    //     const renderCartItem = ({id, name, price, src, quantity}) => {
    //         const cartItemDOMElement = document.createElement('div');
    //
    //         const cartItemTemplate = `
    //         <div class="cart__item">
    //                 <img class="cart__item-photo" src="${src}" alt="Колбаса">
    //                 <p class="cart__item-name">${name}</p>
    //                 <p class="cart__item-price">${price}</p>
    //
    //                 <input type="hidden" name="товар" value="${name}">
    //                 <input type="hidden" name="количество" value="${quantity}">
    //                 <input type="hidden" name="цена" value="${price}">
    //
    //                 <span class="cart__counter counter">
    //                 <button class="counter__button minus">-</button><label class="counter__label">
    //                     <input class="counter__input" type="text" value="${quantity}" data-price="${price}"
    //                            onkeyup="this.value = this.value.replace(/^0{1}|[^\\d]|[^\\-]]/g,'');">
    //                 </label><button class="counter__button plus">+</button>
    //             </span>
    //         </div>`;
    //
    //         cartItemDOMElement.innerHTML = cartItemTemplate;
    //         cartItemDOMElement.setAttribute('data-product-id', id);
    //         cartListDOMElement.appendChild(cartItemDOMElement);
    //     };
    //
    //     const addCartItem = (data) => {
    //         const {id} = data;
    //
    //         if (cart[id]) {
    //             return;
    //         }
    //
    //         cart[id] = data;
    //         renderCartItem(data);
    //         updateCart();
    //     };
    //
    //     const addToCart = () => {
    //         renderCart();
    //
    //         document.querySelector('body').addEventListener('click', (e) => {
    //
    //             const target = e.target;
    //             if (target.classList.contains('js-btn-add-to-cart')) {
    //                 e.preventDefault();
    //                 const productDOMElement = target.closest('.js-product');
    //                 const data = getProductData(productDOMElement);
    //
    //                 addCartItem(data);
    //             }
    //         });
    //     };
    //
    //     const increaseCounter = () => {
    //         document.querySelector('body').addEventListener('click', (e) => {
    //             const target = e.target;
    //             // if (target.classList.contains('counter__button')) {
    //             //     const countInputDOMElement = target.closest('.counter').find('input');
    //             //     let value = parseInt(countInputDOMElement.val()) || 0;
    //             //
    //             //     if (target.hasClass('minus')) {
    //             //         if (value - 1 > 0)
    //             //             value = value - 1; // вычитаем из value 1
    //             //     }
    //             //     if (target.hasClass('plus')) {
    //             //         value = value + 1; // прибавляем к value 1
    //             //     }
    //             //
    //             //     countInputDOMElement.val(value).change();
    //             // }
    //         });
    //     };
    //
    //     increaseCounter();
    //     addToCart();
    // })();
    //

    //калькулятор корзины
    // const initCart = () => {
    //     let total_cost = 0;
    //     let basket = document.querySelector('#basket');
    //     [...document.querySelectorAll('.cart__item')].forEach((cart_item) => {
    //         total_cost +=
    //             Number(cart_item.querySelector('.counter__input').value) *
    //             cart_item.querySelector('.counter__input').dataset.price;
    //
    //         let item_cost =
    //             Number(cart_item.querySelector('.counter__input').value) *
    //             cart_item.querySelector('.counter__input').dataset.price;
    //
    //         cart_item.querySelector('.cart__item-price').textContent = item_cost + ' ₴';
    //     });
    //
    //
    //     if (basket !== null) {
    //         let cart_total_price = basket.querySelector('.cart__total-price');
    //         cart_total_price.textContent = total_cost + ' ₴';
    //     }
    // };

    // initCart();

    //кастомный input number
    $('.counter .counter__button').on('click', function () {
        var input = $(this).closest('.counter').find('input'); // инпут
        var value = parseInt(input.val()) || 0; // получаем value инпута или 0
        if ($(this).hasClass('minus')) {
            if (value - 1 > 0)
                value = value - 1; // вычитаем из value 1
        }
        if ($(this).hasClass('plus')) {
            value = value + 1; // прибавляем к value 1
        }
        input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
        // initCart();
    });

    $('.counter .counter__input').on('keyup', function () {
        if (!$(this).val().length) {
            $(this).val(1);
        }
        // initCart();
    });

    //перемещение элементов на моб
    function moving_header_elements() {
        const mediaQuery = window.matchMedia('(max-width: 991px)');
        if (mediaQuery.matches) {
            if(!$('.header__nav-mobile').children('.header__list').length > 0) {
                $('.header__nav-mobile').prepend($('.header__languages'));
                $('.header__nav-mobile').prepend($('.header__tel'));
                $('.header__nav-mobile').prepend($('.header__list--first'));
                $('.header__nav-mobile').prepend($('.header__list--last'));

                $('.product__about').prepend($('.product__title'));
            }
        }
        else {
            $('.header__nav').prepend($('.header__languages'));
            $('.header__nav').prepend($('.header__tel'));
            $('.header__nav').prepend($('.header__list--last'));
            $('.header__nav').prepend($('.header__list--first'));

            $('.page-main--product').prepend($('.product__title'));
        }
    }

    // перемещение элементов в хедере
    moving_header_elements();
    window.addEventListener('resize', function (event) {
        moving_header_elements();
    }, true);

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

    // Открытие и закрытие мобильлного меню
    function menu_open() {
        $('.header__nav-mobile').removeClass('close');
        $('.header__open-menu').addClass('open');
        $('.header').addClass('fixed');
        $(".header__logo img").attr('src', 'img/LOGO.svg');
    }

    function menu_close() {
        $('.header__nav-mobile').addClass('close');
        $('.header__open-menu').removeClass('open');
        $('.header').removeClass('fixed');
        $(".header__logo img").attr('src', 'img/LOGO-small.svg');
    }

    $('.header__open-menu').on('click', function () {
        if ($(".header__nav-mobile").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });
});