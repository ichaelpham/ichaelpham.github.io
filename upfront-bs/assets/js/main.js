$(document).ready(function(){
	$(window).on("scroll",function(){
  	var ws = $(window).scrollTop();
    var wh = $(window).height()
    if(ws > wh){
    	$("#home-navbar").css("box-shadow","0 1px 2px 0 rgba(225,225,225,1)");
      $("#home-navbar").css("background","white");
      $("#home-navbar-brand,#home-navbar .navbar-nav > li > a").css("color","rgb(75,75,75)");
    }
    else{
    	$("#home-navbar").css("box-shadow","0 1px 2px 0 rgba(225,225,225,0)");
      $("#home-navbar").css("background","transparent");
      $("#home-navbar-brand,#home-navbar .navbar-nav > li > a").css("color","white");
    }
  });

  $(".navbar-toggler").on("click",function(){
      $(".hamburger-icon").toggleClass('open');
      // REVIEW:
  })

  $("h1,h2,h3,h4,h5,h6").each(function(i,e) {
    var text = $(e).html();
    text = text.split(' ');
    var lastWord = text.pop();
    text = text.join(' ') + "&nbsp;" + lastWord;
    $(e).html(text);
  });

});
