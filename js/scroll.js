$(document).ready(function(){
    $('.scroll-aboutus').click(function(){
        $(this).addClass('active');
        $('html body').animate({scrollTop:$('#why-us-width').position().top - 0}, 2200);
    });
    $('.scroll-season-summer').click(function () {
       $(this).addClass('active');
       $('html body').animate({scrollTop:$('#summer-content').position().top - 0}, 1200);
    });
    $('.scroll-season-autumn').click(function () {
       $(this).addClass('active');
       $('html body').animate({scrollTop:$('#autumn-content').position().top - 0},1500);
    });
    $('.scroll-season-winter').click(function () {
        $(this).addClass('active');
        $('html, body').animate({scrollTop:$('#winter-content').position().top - 0},1900)
    });
    $('.scroll-season-spring').click(function () {
       $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#spring-content').position().top - 0},2200);
    });
    $('.scroll-moreinfo').click(function () {
        $(this).addClass('active');
        $('html body').animate({scrollTop:$('#background-image-exploer').position().top - 0}, 2200);
    });
    $('.scroll-contacts').click(function () {
       $(this).addClass('active');
       $('html body').animate({scrollTop:$('#form-contact').position().top - 0}, 3200);
    });
    $('.back-home-link').click(function () {
       $(this).addClass('active');
       $('html body').animate({scrollTop:$('#home-scroll').position().top - 0}, 2000);
    });
    $('.season-selection').click(function () {
       $(this).addClass('active');
       $('html, body').animate({scrollTop:$('.seasons-content').position().top - 0},500);
    });
});