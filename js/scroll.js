$(document).ready(function(){
    $('.scroll-aboutus').click(function(){
        $(this).addClass('active');
        $('html body').animate({scrollTop:$('#why-us-width').position().top - 0}, 2200);
    });
    $('.scroll-season').click(function () {
       $(this).addClass('active');
       $('html body').animate({scrollTop:$('#summer-content').position().top - 0}, 1200);
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
});