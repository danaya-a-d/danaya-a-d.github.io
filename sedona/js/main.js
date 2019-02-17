window.addEventListener('DOMContentLoaded', function () {
    let pop_window = document.getElementsByClassName('interested-window')[0],
        pop_button = document.getElementsByClassName('search-hotel')[0],
        pop_form = document.getElementsByClassName('interested-form')[0],
        map = document.querySelector('.google-map');

        if (pop_button != null) {
            pop_button.addEventListener('click', function () {
                if (pop_form.classList.contains('visually-hidden')) {
                    pop_form.classList.remove('visually-hidden');
                    pop_window.style.backgroundColor = 'white';
                    pop_window.style["boxShadow"] = '0 0 20px rgba(0, 0, 0, 0.2)';
                    pop_window.style.zIndex = 3;
                    map.style.zIndex = 2;
                }
                else {
                    pop_form.classList.add('visually-hidden');
                    pop_window.style.backgroundColor = 'transparent';
                    pop_window.style.boxShadow = 'none';
                    pop_window.style.zIndex = 0;
                    map.style.zIndex = 3;
                }
            });
        }
});


