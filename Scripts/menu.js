$(function() {
   $('.menu a').css({'marginBottom':'-5px'});


    $('.menu').hover(
    function () {
        $('a',$(this)).stop().animate({
            'marginBottom':'0px'
        },200);
    },
    function () {
        $('a',$(this)).stop().animate({
            'marginBottom':'5px'
        },200);
    })
});