window.addEventListener('DOMContentLoaded', function (event) {

    // Sliders
    const upper_block_swiper = new Swiper('.upper-block__sliders-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1.08,
        spaceBetween: 15,

        // Navigation arrows
        navigation: {
            nextEl: '.upper-block__slider-btn',
        },

        breakpoints: {
            // when window width is <= 767
            767: {
                slidesPerView: 1.38,
                spaceBetween: 30,
            },
        }
    });


    // Custom select
    function CustomSelect(options) {

        var elem = options.elem;
        if (elem) {
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


    // Модальные окна

    let modal_overlay = document.querySelector('.modal__overlay');
    let modal_back = document.querySelector('.modal-back');
    let modals = document.querySelectorAll('.modal');

    function close_modal(modal) {
        modal.addEventListener('click', function (event) {
            const target = event.target;

            if (target.classList.contains('modal-close')) {
                modal.classList.add('hide');
                modal_overlay.classList.add('hide');
                modal_back.classList.add('hide');
            }
        });
    }

    function open_modal(modal, button) {
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function (event) {
                for (let i = 0; i < modals.length; i++) {
                    modals[i].classList.add('hide');
                    if (modal_overlay.classList.contains('hide') && modal_back.classList.contains('hide')) {
                        modal_overlay.classList.add('hide');
                        modal_back.classList.add('hide');
                    }
                }

                if (modal.classList.contains('hide')) {
                    modal.classList.remove('hide');
                    modal_overlay.classList.remove('hide');
                    modal_back.classList.remove('hide');
                }
            });

        }

        close_modal(modal);
    }

    let modal_login = document.querySelector('.modal-login');
    let btn_modal_login = document.querySelectorAll('.button-login');

    let modal_register = document.querySelector('.modal-register');
    let btn_modal_register = document.querySelectorAll('.button-register');

    let modal_forgot = document.querySelector('.modal-forgot');
    let btn_modal_forgot = document.querySelectorAll('.button-forgot');

    let modal_recovery = document.querySelector('.modal-recovery');
    let btn_modal_recovery = document.querySelectorAll('.button-recovery');

    let modal_verification = document.querySelector('.modal-verification');
    let btn_modal_verification = document.querySelectorAll('.button-verification');

    let modal_profile = document.querySelector('.modal-profile');
    let btn_modal_profile = document.querySelectorAll('.button-profile');

    let modal_notification = document.querySelector('.modal-notification');
    let btn_modal_notification = document.querySelectorAll('.button-notification');

    let modal_pay = document.querySelector('.modal-pay');
    let btn_modal_pay = document.querySelectorAll('.button-pay');

    let modal_orders = document.querySelector('.modal-orders');
    let btn_modal_orders = document.querySelectorAll('.button-orders');


    open_modal(modal_login, btn_modal_login);
    open_modal(modal_register, btn_modal_register);
    open_modal(modal_forgot, btn_modal_forgot);
    open_modal(modal_recovery, btn_modal_recovery);
    open_modal(modal_verification, btn_modal_verification);
    open_modal(modal_profile, btn_modal_profile);
    open_modal(modal_notification, btn_modal_notification);
    open_modal(modal_pay, btn_modal_pay);
    open_modal(modal_orders, btn_modal_orders);

    //  Переключение email / телефон в модалках с формами
    let label_login = document.querySelectorAll('.label-login');

    for (let i = 0; i < label_login.length; i++) {

        label_login[i].addEventListener('click', function (event) {
            let login_type = this.querySelector('input[name="login-type"]:checked').value;
            let login_email = this.querySelector('.email');
            let login_mobile = this.querySelector('.mobile');


            if (login_type === 'mobile') {
                login_email.classList.add('hide');
                login_email.classList.required = false;
                login_mobile.classList.remove('hide');
                login_mobile.classList.required = true;
            } else if (login_type === 'email') {
                login_email.classList.remove('hide');
                login_email.classList.required = true;
                login_mobile.classList.add('hide');
                login_mobile.classList.required = false;
            }
        });
    }

});


// Скролл нажатием мышкой на блок с прокруткой

!function (e, n) {
    "function" == typeof define && define.amd ? define(["exports"], n) : n("undefined" != typeof exports ? exports : e.dragscroll = {})
}(this, function (e) {
    var n, t, o = window, l = document, c = "mousemove", r = "mouseup", i = "mousedown", m = "EventListener",
        d = "add" + m, s = "remove" + m, f = [], u = function (e, m) {
            for (e = 0; e < f.length;) m = f[e++], m = m.container || m, m[s](i, m.md, 0), o[s](r, m.mu, 0), o[s](c, m.mm, 0);
            for (f = [].slice.call(l.getElementsByClassName("dragscroll")), e = 0; e < f.length;) !function (e, m, s, f, u, a) {
                (a = e.container || e)[d](i, a.md = function (n) {
                    e.hasAttribute("nochilddrag") && l.elementFromPoint(n.pageX, n.pageY) != a || (f = 1, m = n.clientX, s = n.clientY, n.preventDefault())
                }, 0), o[d](r, a.mu = function () {
                    f = 0
                }, 0), o[d](c, a.mm = function (o) {
                    f && ((u = e.scroller || e).scrollLeft -= n = -m + (m = o.clientX), u.scrollTop -= t = -s + (s = o.clientY), e == l.body && ((u = l.documentElement).scrollLeft -= n, u.scrollTop -= t))
                }, 0)
            }(f[e++])
        };
    "complete" == l.readyState ? u() : o[d]("load", u, 0), e.reset = u
});