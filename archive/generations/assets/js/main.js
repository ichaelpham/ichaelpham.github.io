$(document).ready(function() {

   $(function(){
      $('#top').eraser({
         progressFunction: function(p) {
            $('#progress').html(Math.round(p*100)+'%');
         }
      });

      $('#resetBtn').click(function(event) {
         $('#top').eraser('reset');
         $('#progress').html('0%');
            event.preventDefault();
      });
   });

   $('#infoBtn').on('click', function (event) {
      event.preventDefault();
      $('#info').toggleClass('show');
      $('#bg').toggleClass('show');
      $('.header').toggleClass('show');
      $('.box').toggleClass('show');
   }, function(event) {
      event.preventDefault();
      $('#info').toggleClass('show');
      $('#bg').toggleClass('show');
      $('.header').toggleClass('show');
      $('.box').toggleClass('show');
   });

   // infoBtn change HTML to X
   $('#infoBtn').on('click', function (event) {
      event.preventDefault();
      $('#infoBtn').html($('#infoBtn').text() == '[ X ]' ? 'INFO' : '[ X ]');
    });

   $("#saveBtn").click(function () {
      $(".buttons").hide();
      //Hide all other elements other than printarea.
      $("#container").show();
         window.print();
   });

   $(".container").mouseover(function(event) {
      $(".buttons").show();
   });

   $(window).resize(function(){
      location.reload();
   });

});
