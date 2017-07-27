$(document).ready(function () {
    $('a.modal-window-moreinfo').click(function (event) {
        event.preventDefault();
        $('#pillow').slideDown(600,
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
              $('#pillow').slideUp(600);
           });
    });
});
$(document).ready(function () {
   $('a.modal-window-moreinfo-vancouver').click(function (event) {
      event.preventDefault();
      $('#pillow-vancouver').slideDown(400,
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
             $('#pillow-vancouver').slideUp(600);
          });
   });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-barcelona').click(function (event) {
        event.preventDefault();
        $('#pillow-barcelona').slideDown(400,
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
                    $('#pillow-barcelona').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-wicklow').click(function (event) {
       event.preventDefault();
       $('#pillow-wicklow').slideDown(400,
       function () {
          $('#modal-window-wicklow')
              .css('display', 'block')
              .animate({opacity: 1, top: '50%'},200);
       });
    });
   $('#modal-window-close-wicklow, #pillow-wicklow').click(function () {
        $('#modal-window-wicklow')
            .animate({opacity: 0, top: '45%'},200,
            function () {
                $(this).css('display', 'none');
                $('#pillow-wicklow').slideUp(600);
            });
   });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-bruges').click(function (event) {
        event.preventDefault();
        $('#pillow-bruges').slideDown(400,
            function () {
                $('#modal-window-bruges')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-bruges, #pillow-bruges').click(function () {
        $('#modal-window-bruges')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-bruges').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-prague').click(function (event) {
        event.preventDefault();
        $('#pillow-prague').slideDown(400,
            function () {
                $('#modal-window-prague')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-prague, #pillow-prague').click(function () {
        $('#modal-window-prague')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-prague').slideUp(600);
                });
    });
});