document.addEventListener('DOMContentLoaded', () => {



    setTimeout(preloader_hide,500);
    setTimeout(preloader,1500);

    function preloader_hide() {
        $('#preloader').addClass('hide');
    }

    function preloader() {
        $('#preloader').hide()
    }

    // Слайдер portfolio
    $('.portfolio__list').slick({
        dots: true,
        dotsClass: "my-dots",
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Фильтрация слайдера portfolio
    $(".portfolio__filter-item").on('click', function(){
        let filter = $(this).data('filter');
        $(".portfolio__list").slick('slickUnfilter');

        if(filter === 'frontend'){
            $(".portfolio__list").slick('slickFilter','.frontend');
        }
        else if(filter === 'backend'){
            $(".portfolio__list").slick('slickFilter','.backend');
        }
        else if(filter === 'design'){
            $(".portfolio__list").slick('slickFilter','.design');
        }
        else if(filter === 'all'){
            $(".portfolio__list").slick('slickUnfilter');
        }
    })

    // Поворот плашек portfolio
    $('.portfolio__link--color').on('click', function(e){
        e.preventDefault();
        $(this).closest('.portfolio__item').addClass('active');
    });

    $('.portfolio__close').on('click', function(e){
        e.preventDefault();
        $(this).closest('.portfolio__item').removeClass('active');
    });

    // Слайдер отзывов
    $('.feedbacks__list').slick({
        dots: true,
        dotsClass: "my-dots",
        arrows: true,
        prevArrow: $('.feedbacks__button--left'),
        nextArrow: $('.feedbacks__button--right'),
        infinite: false,
        adaptiveHeight: true
    });



    //100vh исправление на мобильных устройствах

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


    // Открытие и закрытие мобильного меню
    function menu_open() {
        $('.header__nav').removeClass('close');
        $('.header__nav').addClass('open');
        $('.header__open-menu').addClass('close');
    }

    function menu_close() {
        $('.header__nav').addClass('close');
        $('.header__nav').removeClass('open');
        $('.header__open-menu').removeClass('close');
    }

    $('.header__open-menu').on('click', function () {
        if ($(".header__nav").hasClass('close')) {
            menu_open();
        } else {
            menu_close();
        }
    });

    //Плавное пролистывание к якорю
    $('a[href*="#"]').click(function (e) {

        menu_close();

        $('html, body').stop().animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        e.preventDefault();
    })


    // Курсор и аура
    const body = document.querySelector('body')

    const cursor = document.querySelector('#cursor'),
        follower = document.querySelector('#aura'),
        links = document.querySelectorAll('a, button, .button');

    let mouseX, mouseY, posX, posY;
    mouseX = 0, mouseY = 0, posX = 0, posY = 0;

    body.addEventListener('mousemove', e => {
        mouseCoords(e)
        cursor.classList.remove('hidden')
        follower.classList.remove('hidden')
    })

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseover', () => {
            cursor.classList.add('active')
            follower.classList.add('active')
        })
    }

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseout', () => {
            cursor.classList.remove('active')
            follower.classList.remove('active')
        })
    }

    window.addEventListener('mouseout', e => {
        cursor.classList.add('hidden')
        follower.classList.add('hidden')
    })

    let mouseCoords = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // console.log(mouseX + ', ' + mouseY)
    }


    gsap.to({}, .01, {
        repeat: -1,

        onRepeat: () => {
            posX += (mouseX - posX) / 5
            posY += (mouseY - posY) / 5

            gsap.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY
                }
            })

            gsap.set(follower, {
                css: {
                    left: posX - 24,
                    top: posY - 24
                }
            })
        }
    })
});