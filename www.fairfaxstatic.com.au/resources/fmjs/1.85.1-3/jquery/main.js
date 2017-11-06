$(document).ready(function() {
   $('.loader').fadeOut(500);

   /** Comment list **/
   var commentNumber = $('.comment__list ul li').length;
   var readerCommentNumber = $('.reader__comments__list').length;
   $('.comments h2 span').text(commentNumber);
   $('.reader__comments header .sub').text(commentNumber + " comments");

   /** Survey **/
   var maxQuestions = $('.question').length;
   var positionQuestion = 1;

   /** Reusables **/
   function getScrollbarWidth() {
      var outer = document.createElement("div");
      outer.style.visibility = "hidden";
      outer.style.width = "100px";
      document.body.appendChild(outer);

      var widthNoScroll = outer.offsetWidth;
      outer.style.overflow = "scroll";

      var inner = document.createElement("div");
      inner.style.width = "100%";
      outer.appendChild(inner);

      var widthWithScroll = inner.offsetWidth;
      outer.parentNode.removeChild(outer);

      return (widthNoScroll - widthWithScroll);
   }

   /** prevents outside hrefs **/
   $("a[href*='theage']").on('click', function(e) {
      e.preventDefault();
      return false;
   });
   $("a[href*='fairfax']").on('click', function(e) {
      e.preventDefault();
      return false;
   });

   /*
   function scrollProgress() {
      var winHeight = $('.progWindow').height(),
      docHeight = $('.reader__wrap.open').height(),
      footHeight = $('.topPage').height(),
      totalHeight = docHeight + footHeight,
      progressBar = $('progress'),
      max, value;

      max = totalHeight - winHeight;
      progressBar.attr('max', max);

      $('.reader__container').on('scroll', function() {
        value = $('.reader__container').scrollTop();
        console.log(value);
        progressBar.attr('value', value);
      });
   }
   */

   /** checknight **/
   function checkNight() {
      if ($('.reader__container').hasClass('nightowl') && $('.reader__container').hasClass('open')) {
         $('.settings__modal__nav').toggleClass('nightowl');
      }
   }

   function classSwitch() {
      positionQuestion = 1;
      $('.temp').toggleClass('open');
      $('.settings__modal__nav').toggleClass('open');
      $('.modal__wrapper').toggleClass('open');
      $('html body').toggleClass('noscroll');
   }

   function classSwitch__reader() {
      $('.settings__modal__nav').toggleClass('reader');
      $('.modal__wrapper').toggleClass('open');
      $('.reader__container').toggleClass('open');
      $('.topPage').toggleClass('open');
      $('.reader__wrap').toggleClass('open');
      checkNight();
      $('html body').toggleClass('noscroll');
      /* scrollProgress(); */
   }

   function posReset() {
      positionQuestion = 1;
      $('.question').hide();
      $('#q' + positionQuestion).css("display","flex").show();
   }

   function removeAll(){
      location.reload(true);
   }

   /** Check if statements */
   function checkScroll() {
      if ($('html body').hasClass('noscroll')) {
         $('html body.noscroll').css('marginLeft', '-' + getScrollbarWidth() + 'px');
      } else {
         $('html body').css('margin-left', "");
      }
   }

   /** Buttons **/
   /** Reset Reader **/
   $('.settings').click(function() {
      if ($('.modal__wrapper').hasClass('open') && $('.infoSection').hasClass('open')) {
         $('.infoSection').toggleClass('open');
         $('.settings__modal__nav').toggleClass('info');
   }  else if ($('.reader__container').hasClass('open')) {
         location.reload(true);
   }  else if ($('.infoSection').hasClass('open')) {
         $('.infoSection').toggleClass('open');
         $('.settings__modal__nav').toggleClass('info');
         $('.modal__wrapper').toggleClass('open')
   }  else {
         classSwitch();
         posReset()
         $('html body').toggleClass('noscroll');
   }
   });

   $('.about').click(function() {
      if ($('.modal__wrapper').hasClass('open') && $('.infoSection').hasClass('open')) {
         $('.infoSection').toggleClass('open');
         $('.settings__modal__nav').toggleClass('info');
   }  else if ($('.modal__wrapper').hasClass('open') | $('.reader__container').hasClass('open')) {
         $('.infoSection').toggleClass('open');
         $('.settings__modal__nav').toggleClass('info');
   }  else {
         $('.infoSection').toggleClass('open');
         $('.temp').toggleClass('open');
         $('.settings__modal__nav').toggleClass('open info');
         $('html body').toggleClass('noscroll');
   }
   });

   $('.logoNew').click(function() {
      removeAll();
   });

   /** onClick Label **/
   $('.question input').click(function() {
     if (positionQuestion < maxQuestions) {
       positionQuestion++;
       $('.question').hide();
       $('#q' + positionQuestion).css("display","flex").show();
     } else {
       classSwitch__reader();
     }
   });

   /** Cancel **/
   $('.back').click(function() {
      removeAll();
   });

   /** Skip **/
   $('.skip').click(function() {
    if (positionQuestion < maxQuestions) {
       positionQuestion++;
       $('.question').hide();
       $('#q' + positionQuestion).css("display","flex").show();
    } else {
       positionQuestion = 1;
       classSwitch__reader();
       checkScroll();
    }
   });

   /** radio input value becomes class name **/
   $(".question input").click(function() {
         var val = $('input[name=survey]:checked').val();
         var readerON = $('.reader__body').hasClass('open');
         var settingsON = $('.settings__modal').hasClass('open');

         /** this ads value tags at the end of reader **/
         $('.valList').append('<span>' + val + '</span>');

         if (val === "nightowl") {
            /** bg change **/
            $('.reader__container').toggleClass(val);
            $('.reader__comments').toggleClass(val);
            $('.topPage').toggleClass(val);
      }  else if (val === "mozart") {
            /** typeface change **/
            $('.reader__comments').toggleClass(val);
            $('.reader__wrap').toggleClass(val);
      }  else if (val === "upsize") {
            /** Review sizes **/
            $('.reader__body').toggleClass(val);
            $('.reader__comments').toggleClass(val);
      }  else if (val === "beautiful") {
            $('.reader__body header > h1').text("Turnbull government to push states to hand over all drivers' licences's: Whats the Worst That Could Happen?");
            $('.readerSubject').text('Security').addClass('security')
      }  else if (val === "power") {
            $('.reader__body .hack').text("Mr Turnbull dismissed concerns that such a vast identity database would be vulnerable to hacking. This is despite 2016 Census hacks that exposed numerous vulnerabilities.");
            $('.reader__body .hackQuote').after("<p class='readerQuote'>Mr Turnbull dismissed concerns that such a vast identity database would be vulnerable to hacking. This is despite 2016 Census hacks that exposed numerous vulnerabilities..</p>");
      }  else if (val === "interested") {
            /** Closes comments section **/
            $('.reader__comments header span:first-child').after('<span>The comments are now closed.</span>');
            $('.commentWrap form input').prop( "readonly", true );
            $('.commentWrap form input').toggleClass('closed');
            $('.commentForm').prop( "readonly", true );
            $('.commentForm').toggleClass('closed');
            $('.readerBtn').prop("disabled", true);
      }  else if (val === "realistic") {
            /** change all images **/
            $('.reader__body figure:nth-of-type(1) img').attr('src', 'www.fairfaxstatic.com.au/content/dam/images/swap/angola-prison-louisiana-article-header.jpg');
            $('.reader__body figure:nth-of-type(2) img').attr('src', 'www.fairfaxstatic.com.au/content/dam/images/swap/FacialRecLoop02-theintercept.gif');
            $('.reader__body figure:nth-of-type(2) figcaption').html("The CCTV-linked ‘privacy-invasive’ iOmniscient behavioural recognition software is ‘straight out of 1984’, civil libertarians say. <span class='credits'>Photo: Jason South</span>");
            $('.reader__body figure:nth-of-type(3) img').attr('src', 'www.fairfaxstatic.com.au/content/dam/images/swap/1020.png');
            $('.reader__body figure:nth-of-type(3) figcaption').html("CV Dazzle is designed to keep facial recognition systems from detecting your face at all. <span class='credits'>Photo: CV Dazzle</span>");
            $('.reader__body figure:nth-of-type(4) img').attr('src', 'www.fairfaxstatic.com.au/content/dam/images/swap/juvenile-jail1-article-header.jpg');
            $('.reader__body figure:nth-of-type(5) img').attr('src', 'www.fairfaxstatic.com.au/content/dam/images/swap/cam-photo-cameras-inside-police-4.jpg');
            $('.reader__body figure:nth-of-type(5) figcaption').html("CCTV analysis mostly relies on teams of specially trained officers watching thousands of hours of footage. <span class='credits'>Photo: Jack Taylor/AFP/Getty Images</span>");
            $('.reader__body figure:nth-of-type(6) img').attr('src', 'www.fairfaxstatic.com.au/content/dam/images/swap/facial-recognition-3-article-1000x663.jpg');
      }  else if (val === "vital") {
            
      }  else if (val === "subjective") {
            /** makes text editable **/
            $('.reader__wrap p').attr('contenteditable','true');
      }  else if (val === "less" || val === "more") {
            /** Changes mouse treatment **/

      }  else  {
         return false;
      }
   });

   /** Email validation for form **/
   function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
   }

   function validate() {

   var email = $(".readerForm").val();
   if (validateEmail(email)) {
      $(".readerForm").attr("placeholder", "You have been subscribed").val("").focus().blur();
      $(".readerForm").addClass("reUseRight");
   } else  {
      $(".readerForm").attr("placeholder", "This email is incorrect").val("").focus().blur();
      $(".readerForm").addClass("reUseWrong");
   }
   return false;
   };

   $("#emailBtn").click(function() {
      validate();
   });

   $(".readerForm").click(function() {
      $(this).attr("placeholder", "Email");
      $(this).removeClass("reUseRight reUseWrong");
   });


   $("#commentBtn").click(function() {
      var month = new Array();
            month[0] = "Jan";
            month[1] = "Feb";
            month[2] = "March";
            month[3] = "April";
            month[4] = "May";
            month[5] = "June";
            month[6] = "July";
            month[7] = "Aug";
            month[8] = "Sep";
            month[9] = "Oct";
            month[10] = "Nov";
            month[11] = "Dec";

            var d = new Date();

      var day = d.getDate();
      var month = month[d.getMonth()];
      var year = d.getFullYear();
      var minutes = d.getMinutes();
      var hour = d.getHours();

      var output =
         ((''+month).length<2 ? '0' : '') + month + ' ' +
         ((''+day).length<2 ? '0' : '') + day + ' ' +
         d.getFullYear() + ' ' + 'at ' +
         ((''+hour).length<2 ? '0' : '') + hour + ':' +
         ((''+minutes).length<2 ? '0' : '') + minutes;

      var nameVal = $('.nameForm').val();
      var commentVal = $('.commentForm').val();

      if (nameVal.length === 0) {
         $('.nameForm').removeClass('reUseRight reUseWrong').addClass('reUseWrong');
         $('.nameForm').attr("placeholder", "Name missing").val("").focus().blur();
      }
      else {
         $('.nameForm').removeClass('reUseRight reUseWrong');
      }
      if (commentVal.length === 0) {
         $('.commentForm').removeClass('reUseRightComment reUseWrongComment').addClass("reUseWrongComment");
         $('.commentForm').attr("placeholder", "Comment missing").val("").focus().blur();
      }
      else {
         $('.commentForm').removeClass('reUseRightComment reUseWrongComment');
      }
      if (nameVal && commentVal) {
         $(".nameForm").removeClass('reUseRight reUseWrong').addClass("reUseRight");
         $(".commentForm").removeClass('reUseRightComment reUseWrongComment').addClass("reUseRight");
         $('.commentForm').attr("placeholder", "Your comment has been posted").val("").focus().blur();
         $(".commentForm").removeClass('reUseRight reUseWrong').addClass("reUseRightComment");
         $(".reader__comments__list ul").append("<li><div class='author__details'><span class='name'>" + nameVal + "</span><span class='divider'></span><time>" + output + "</time></div><p>" + commentVal + "</p></li>");
      }
      return false;
      });


      $('.topPage').click(function(){
         $(".reader__container").animate(
            { scrollTop: 0 }, 500);
         return false;
      });

      /** timeout function **/
      var timeout = null;
      $(document).on('mousemove', function() {
         clearTimeout(timeout);
         timeout = setTimeout(function() {
            console.log('Mouse idle for 5 minutes');
            location.reload(true);
      }, 300000);
});

/** End of function **/
});
