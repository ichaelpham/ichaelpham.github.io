$(document).ready(function(){

	$(window).on("scroll",function(){
  	var ws = $(window).scrollTop();
      if(ws > 0 || $(".navbar").hasClass('open')) {
        $(".navbar").removeAttr('id', 'home-navbar');
    } else if ($(".navbar").hasClass('home-navbar')) {
        $(".navbar").attr('id', 'home-navbar');
    }
    else {
    }
  });

  $(".navbar-toggler").on("click",function(){
      $(".navbar").removeAttr('id', 'home-navbar');
      $(".navbar").toggleClass('open');
      $(".hamburger-icon").toggleClass('open');
  })

  $(".section-display, .subhead, .dropdown-item").html(function(){

  var text= $(this).text().split(" ");
  var last = text.pop();

  return text.join(" ") + (text.length > 0 ? "&nbsp;" + last : last);

});
});
