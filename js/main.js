$(document).ready(function () {

    $("article .dinnerHover").mouseover(function () {
       $(this).children('.din-w').hide;
       $(this).children('.din').show;
                
        /* $('.din-w').hide();
        $('.din').show();
        */
    });
    $("article .dinnerHover").mouseleave(function () {
        $(this).children('.din-w').show;
       $(this).children('.din').hide;
    });







});