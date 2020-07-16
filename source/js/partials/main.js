(function onload() {
    'use strict';

    function searchFocus(ev) {
        ev.currentTarget.parentNode.classList.add('active');
    }

    function searchBlur(ev) {
        ev.currentTarget.parentNode.classList.remove('active');
    };

    const input = document.querySelector('#formGroupSearchInput');
    input.addEventListener('focus', searchFocus);
    input.addEventListener('blur', searchBlur);

})
// To use a non-global context should call a new object, but not a null value. 
// A null value is discarded and it returns a global object instead
.call({});
