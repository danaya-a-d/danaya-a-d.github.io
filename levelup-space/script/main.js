$(window).on('load', function () {

    new WOW().init();

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

    //mobile menu
    let header_menu_btn = document.querySelector('.header__menu-btn');
    let header = document.querySelector('.header');
    let header_nav_menu = document.querySelector('.header__nav');

    function menu_open() {
        if (header_nav_menu.classList.contains('open')) {
            header_nav_menu.classList.remove('open');
            header_menu_btn.classList.remove('open');
            header.classList.remove('open');

        } else {
            header_nav_menu.classList.add('open');
            header_menu_btn.classList.add('open');
            header.classList.add('open');
        }
    }

    header_menu_btn.addEventListener('click', function () {
        menu_open();
    });

    //header scroll
    function initHeaderScrollEffect(header) {
        if (window.scrollY > 50) {
            header.classList.add('header_scrolled');
            header.classList.remove('header_transparent');
        } else {
            header.classList.add('header_transparent');
            header.classList.remove('header_scrolled');
        }

        document.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header_scrolled');
                header.classList.remove('header_transparent');
            } else {
                header.classList.add('header_transparent');
                header.classList.remove('header_scrolled');
            }
        });
    }

    if (header) {
        initHeaderScrollEffect(header);
    }
});

//scroll
let scrollbarInstance;

function toggleScrollbar() {
    const scroll_container = document.querySelector("#scroll-container");
    const scroll_content = document.querySelector("#scroll-content");

    if (!scroll_container) return;

    if (window.innerWidth <= 1123 && window.innerWidth >= 767) {
        if (!scrollbarInstance) {
            scrollbarInstance = Scrollbar.init(scroll_container, {
                damping: 0.1,
                alwaysShowTracks: true,
                continuousScrolling: true
            });
        }
    } else {
        if (scrollbarInstance) {
            scrollbarInstance.destroy();
            scrollbarInstance = null;

            scroll_container.classList.remove("scrollbar-scroll_container", "scrollbar-horizontal", "scrollbar-vertical");

            scroll_container.style.overflow = "";
            scroll_container.style.overflowX = "";
            scroll_container.style.transform = "";
            scroll_content.style.display = ""

            const wrapper = scroll_container.querySelector(".scroll-content-wrapper");
            if (wrapper) {
                scroll_container.innerHTML = wrapper.innerHTML;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", toggleScrollbar);
window.addEventListener("resize", toggleScrollbar);