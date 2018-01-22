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
  });

  $(".jumbotron-display, .section-display, .subhead, .dropdown-item").html(function(){
	  var text= $(this).text().split(" ");
	  var last = text.pop();
	  return text.join(" ") + (text.length > 0 ? "&nbsp;" + last : last);
	});

	$(".story-action").click(function () {
		var collapse = $(this).prev();

		$(collapse).slideToggle(350);
			event.preventDefault();
			event.stopPropagation();

			$($(this)).toggleClass('open');

				if ($(".story-action").hasClass('open')) {
					$($(this)).text('Read Less');
			} else {
				$($(this)).text('Read More');
			};
	});

	$(".dropdown-toggle").click(function () {
		$($(".dropdown-toggle")).toggleClass('open');
	});

	$(".back-to-top").click(function () {
	  $("html, body").animate({scrollTop: 0}, 500);
	});


});
