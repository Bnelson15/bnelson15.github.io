
$(document).ready(function(){
    $(".btn1").click(function(){
      $("table").slideUp();
    });
    $(".btn2").click(function(){
      $("table").slideDown();
    });
  });

type="text/javascript"
  var submitted=false;
 type="text/javascript"
  $('#gform').on('submit', function(e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('Your submission has been processed...');
    });