$(document).ready(function() {

    var searchFocus = function (e) {
            // var $btn = $(e.target.parentNode).find('button');
            // $btn.addClass('focus');
            // console.log(e.target.parentNode);
            $(e.target.parentNode).addClass('active');
        },
        searchBlur = function (e) {
            // var $btn = $(e.target.parentNode).find('button');
            // $btn.removeClass('focus');
            // console.log(e.target.parentNode);
            $(e.target.parentNode).removeClass('active');
        };

    // $('#formGroupSearchInput').trigger('focus').parent().addClass('active');

    $('#formGroupSearchInput')
        .focus(searchFocus)
        .blur(searchBlur)

});