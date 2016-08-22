$(document).ready(function () {

    $("article .dinnerHover").hover(function () {
        $('.din-w').hide();
        $('.din').show();
    });
    $("article .dinnerHover").mouseleave(function () {
        $('.din-w').show();
        $('.din').hide();
    });







});