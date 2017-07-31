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
$(document).ready(function () {
    $('a.modal-window-moreinfo-alps').click(function (event) {
        event.preventDefault();
        $('#pillow-alps').slideDown(400,
            function () {
                $('#modal-window-alps')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-alps, #pillow-alps').click(function () {
        $('#modal-window-alps')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-alps').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-iceland').click(function (event) {
        event.preventDefault();
        $('#pillow-iceland').slideDown(400,
            function () {
                $('#modal-window-iceland')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-iceland, #pillow-iceland').click(function () {
        $('#modal-window-iceland')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-iceland').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-bukovel').click(function (event) {
        event.preventDefault();
        $('#pillow-bukovel').slideDown(400,
            function () {
                $('#modal-window-bukovel')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-bukovel, #pillow-bukovel').click(function () {
        $('#modal-window-bukovel')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-bukovel').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-munich').click(function (event) {
        event.preventDefault();
        $('#pillow-munich').slideDown(400,
            function () {
                $('#modal-window-munich')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-munich, #pillow-munich').click(function () {
        $('#modal-window-munich')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-munich').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-amsterdam').click(function (event) {
        event.preventDefault();
        $('#pillow-amsterdam').slideDown(400,
            function () {
                $('#modal-window-amsterdam')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-amsterdam, #pillow-amsterdam').click(function () {
        $('#modal-window-amsterdam')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-amsterdam').slideUp(600);
                });
    });
});
$(document).ready(function () {
    $('a.modal-window-moreinfo-madrid').click(function (event) {
        event.preventDefault();
        $('#pillow-madrid').slideDown(400,
            function () {
                $('#modal-window-madrid')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'},200);
            });
    });
    $('#modal-window-close-madrid, #pillow-madrid').click(function () {
        $('#modal-window-madrid')
            .animate({opacity: 0, top: '45%'},200,
                function () {
                    $(this).css('display', 'none');
                    $('#pillow-madrid').slideUp(600);
                });
    });
});