$(document).ready(function () {
    $('.navbar-button').click(function () {
        $('.navbar-nav').slideToggle(500);
    });
    $(window).resize(function () {
       if ($(window).width() > 768){
           $('.navbar-nav').removeAttr('style');
       }
    });
});