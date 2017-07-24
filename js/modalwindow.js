$(document).ready(function () {
    $('a.modal-window-moreinfo').click(function (event) {
        event.preventDefault();
        $('#pillow').fadeIn(400,
            function () {
            $('#modal-window')
                .css('display', 'block')
                .animate({opacity: 1, top: '50%'},200);
        });
    });
    $('#modal-window-close, #pillow').click(function () {
       $('#modal-window')
           .animate({opacity: 0, top: '45%'},200,
           function () {
              $(this).css('display', 'none');
              $('#pillow').fadeOut(400);
           });
    });
});
$(document).ready(function () {
   $('a.modal-window-moreinfo-vancouver').click(function (event) {
      event.preventDefault();
      $('#pillow-vancouver').fadeIn(400,
      function () {
         $('#modal-window-vancouver')
             .css('display', 'block')
             .animate({opacity: 1, top: '50%'},200);
      });
   });
   $('#modal-window-close-vancouver, #pillow-vancouver').click(function () {
      $('#modal-window-vancouver')
          .animate({opacity: 0, top: '45%'},200,
          function () {
             $(this).css('display', 'none');
             $('#pillow-vancouver').fadeOut(400);
          });
   });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-barcelona').click(function (event) {
        event.preventDefault();
        $('#pillow-barcelona').fadeIn(400,
            function () {
                $('#modal-window-barcelona')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-barcelona, #pillow-barcelona').click(function () {
        $('#modal-window-barcelona')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-barcelona').fadeOut(400);
                });
    });
});
