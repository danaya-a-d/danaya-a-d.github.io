window.addEventListener('DOMContentLoaded', function (event) {

    // Sliders
    const upper_block_swiper = new Swiper('.upper-block__sliders-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.38,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.upper-block__slider-btn',
        },
    });


    // Custom select
    function CustomSelect(options) {
        if (elem) {
            var elem = options.elem;

            elem.onclick = function (event) {
                if (event.target.className == 'customselect__title') {
                    toggle();
                } else if (event.target.tagName == 'LI') {
                    setValue(event.target.innerHTML, event.target.dataset.value);
                    close();
                }
            }

            var isOpen = false;

            // ------ обработчики ------

            // закрыть селект, если клик вне его
            function onDocumentClick(event) {
                if (!elem.contains(event.target)) close();
            }

            // ------------------------

            function setValue(title, value) {
                elem.querySelector('.customselect__title').value = title;

                var widgetEvent = new CustomEvent('select', {
                    bubbles: true,
                    detail: {
                        title: title,
                        value: value
                    }
                });

                elem.dispatchEvent(widgetEvent);

            }

            function toggle() {
                if (isOpen) close()
                else open();
            }

            function open() {
                elem.classList.add('open');
                document.addEventListener('click', onDocumentClick);
                isOpen = true;
            }

            function close() {
                elem.classList.remove('open');
                document.removeEventListener('click', onDocumentClick);
                isOpen = false;
            }
        }
    }


    var categoriesSelect = new CustomSelect({
        elem: document.getElementById('categories-select')
    });

    var gamesSelect = new CustomSelect({
        elem: document.getElementById('games-select')
    });

    var gamesSelect = new CustomSelect({
        elem: document.getElementById('sort-select')
    });

    // Выпадающие меню

    let user_btn = document.querySelector('.header__user-button')
    let user_menu = document.querySelector('.header__user-menu')


});