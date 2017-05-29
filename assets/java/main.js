$(document).ready(function() {

/* email function on home page */
$(function () {
   $('.author').on('click', function (event) {
      event.preventDefault();
   var email = 'pham.mdh@gmail.com';
   var subject = 'Hello!';
   window.location = 'mailto:' + email + '?subject=' + subject + '&body=';
   });
});

$(function () {
   $('.suggest').on('click', function (event) {
      event.preventDefault();
   var email = 'pham.mdh@gmail.com';
   var subject = 'Hello!';
   window.location = 'mailto:' + email + '?subject=' + subject + '&body=';
   });
});

/* info button all*/
   $('.info').on('click', function (event) {
      event.preventDefault();
      $('.info_text').toggleClass('show_info');
   }, function(event) {
      event.preventDefault();
      $('.info_text').toggleClass('show_info');
   });

/* spec main images */
   $('.spec_1').hover(function() {
      $('.hi1').toggleClass('show_img');
   }, function() {
      $('.hi1').toggleClass('show_img');
   });

   $('.spec_2').hover(function() {
      $('.hi2').toggleClass('show_img');
   }, function() {
      $('.hi2').toggleClass('show_img');
   });

   $('.spec_3').hover(function() {
      $('.hi3').toggleClass('show_img');
   }, function() {
      $('.hi3').toggleClass('show_img');
   });

   $('.spec_4').hover(function() {
      $('.hi4').toggleClass('show_img');
   }, function() {
      $('.hi4').toggleClass('show_img');
   });

   $('.spec_5').hover(function() {
      $('.hi5').toggleClass('show_img');
   }, function() {
      $('.hi5').toggleClass('show_img');
   });

/* spec main footnotes */
   $('.spec_1').hover(function() {
      $('.f1').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f1').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

   $('.spec_2').hover(function() {
      $('.f2').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f2').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

   $('.spec_3').hover(function() {
      $('.f3').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f3').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

   $('.spec_4').hover(function() {
      $('.f4').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f4').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

   $('.spec_5').hover(function() {
      $('.f5').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   }, function() {
      $('.f5').toggleClass('show_foot');
      $('.f0').toggleClass('hide_foot');
   });

/* text real footnotes!!!!!!!!!!!!!!!!!!!!!!!!!! */
/* Rock */
   $('.foot_6').hover(function() {
      $('.f6').toggleClass('show_foot');
   }, function() {
      $('.f6').toggleClass('show_foot');
   });

   $('.foot_9').hover(function() {
      $('.f9').toggleClass('show_foot');
   }, function() {
      $('.f9').toggleClass('show_foot');
   });

   $('.foot_8').hover(function() {
      $('.f8').toggleClass('show_foot');
   }, function() {
      $('.f8').toggleClass('show_foot');
   });

   $('.foot_9').hover(function() {
      $('.f9').toggleClass('show_foot');
   }, function() {
      $('.f9').toggleClass('show_foot');
   });

   $('.foot_10').hover(function() {
      $('.f10').toggleClass('show_foot');
   }, function() {
      $('.f10').toggleClass('show_foot');
   });

   $('.foot_11').hover(function() {
      $('.f11').toggleClass('show_foot');
   }, function() {
      $('.f11').toggleClass('show_foot');
   });

   $('.foot_12').hover(function() {
      $('.f12').toggleClass('show_foot');
   }, function() {
      $('.f12').toggleClass('show_foot');
   });

   $('.foot_13').hover(function() {
      $('.f13').toggleClass('show_foot');
   }, function() {
      $('.f13').toggleClass('show_foot');
   });

   $('.foot_14').hover(function() {
      $('.f14').toggleClass('show_foot');
   }, function() {
      $('.f14').toggleClass('show_foot');
   });

   $('.foot_15').hover(function() {
      $('.f15').toggleClass('show_foot');
   }, function() {
      $('.f15').toggleClass('show_foot');
   });

   $('.foot_16').hover(function() {
      $('.f16').toggleClass('show_foot');
   }, function() {
      $('.f16').toggleClass('show_foot');
   });
/* auteur */
   $('.foot_19').hover(function() {
      $('.f19').toggleClass('show_foot');
   }, function() {
      $('.f19').toggleClass('show_foot');
   });

   $('.foot_18').hover(function() {
      $('.f18').toggleClass('show_foot');
   }, function() {
      $('.f18').toggleClass('show_foot');
   });

   $('.foot_19').hover(function() {
      $('.f19').toggleClass('show_foot');
   }, function() {
      $('.f19').toggleClass('show_foot');
   })

   $('.foot_20').hover(function() {
      $('.f20').toggleClass('show_foot');
   }, function() {
      $('.f20').toggleClass('show_foot');
   });

   $('.foot_21').hover(function() {
      $('.f21').toggleClass('show_foot');
   }, function() {
      $('.f21').toggleClass('show_foot');
   });

   $('.foot_22').hover(function() {
      $('.f22').toggleClass('show_foot');
   }, function() {
      $('.f22').toggleClass('show_foot');
   });

   $('.foot_23').hover(function() {
      $('.f23').toggleClass('show_foot');
   }, function() {
      $('.f23').toggleClass('show_foot');
   });

   $('.foot_24').hover(function() {
      $('.f24').toggleClass('show_foot');
   }, function() {
      $('.f24').toggleClass('show_foot');
   });

   $('.foot_25').hover(function() {
      $('.f25').toggleClass('show_foot');
   }, function() {
      $('.f25').toggleClass('show_foot');
   });

   $('.foot_26').hover(function() {
      $('.f26').toggleClass('show_foot');
   }, function() {
      $('.f26').toggleClass('show_foot');
   });

   $('.foot_29').hover(function() {
      $('.f29').toggleClass('show_foot');
   }, function() {
      $('.f29').toggleClass('show_foot');
   });

   $('.foot_28').hover(function() {
      $('.f28').toggleClass('show_foot');
   }, function() {
      $('.f28').toggleClass('show_foot');
   });

   $('.foot_29').hover(function() {
      $('.f29').toggleClass('show_foot');
   }, function() {
      $('.f29').toggleClass('show_foot');
   });

   $('.foot_30').hover(function() {
      $('.f30').toggleClass('show_foot');
   }, function() {
      $('.f30').toggleClass('show_foot');
   });

   $('.foot_31').hover(function() {
      $('.f31').toggleClass('show_foot');
   }, function() {
      $('.f31').toggleClass('show_foot');
   });

   $('.foot_32').hover(function() {
      $('.f32').toggleClass('show_foot');
   }, function() {
      $('.f32').toggleClass('show_foot');
   });

   $('.foot_33').hover(function() {
      $('.f33').toggleClass('show_foot');
   }, function() {
      $('.f33').toggleClass('show_foot');
   });

   $('.foot_34').hover(function() {
      $('.f34').toggleClass('show_foot');
   }, function() {
      $('.f34').toggleClass('show_foot');
   });

   $('.foot_35').hover(function() {
      $('.f35').toggleClass('show_foot');
   }, function() {
      $('.f35').toggleClass('show_foot');
   });

/* Metahaven */
   $('.foot_36').hover(function() {
      $('.f36').toggleClass('show_foot');
   }, function() {
      $('.f36').toggleClass('show_foot');
   });

   $('.foot_39').hover(function() {
      $('.f39').toggleClass('show_foot');
   }, function() {
      $('.f39').toggleClass('show_foot');
   });

   $('.foot_38').hover(function() {
      $('.f38').toggleClass('show_foot');
   }, function() {
      $('.f38').toggleClass('show_foot');
   });

   $('.foot_39').hover(function() {
      $('.f39').toggleClass('show_foot');
   }, function() {
      $('.f39').toggleClass('show_foot');
   });

   $('.foot_40').hover(function() {
      $('.f40').toggleClass('show_foot');
   }, function() {
      $('.f40').toggleClass('show_foot');
   });

   $('.foot_41').hover(function() {
      $('.f41').toggleClass('show_foot');
   }, function() {
      $('.f41').toggleClass('show_foot');
   });

   $('.foot_42').hover(function() {
      $('.f42').toggleClass('show_foot');
   }, function() {
      $('.f42').toggleClass('show_foot');
   });

   $('.foot_43').hover(function() {
      $('.f43').toggleClass('show_foot');
   }, function() {
      $('.f43').toggleClass('show_foot');
   });

   $('.foot_44').hover(function() {
      $('.f44').toggleClass('show_foot');
   }, function() {
      $('.f44').toggleClass('show_foot');
   });

   $('.foot_45').hover(function() {
      $('.f45').toggleClass('show_foot');
   }, function() {
      $('.f45').toggleClass('show_foot');
   });

   $('.foot_46').hover(function() {
      $('.f46').toggleClass('show_foot');
   }, function() {
      $('.f46').toggleClass('show_foot');
   });

   $('.foot_49').hover(function() {
      $('.f49').toggleClass('show_foot');
   }, function() {
      $('.f49').toggleClass('show_foot');
   });

   $('.foot_48').hover(function() {
      $('.f48').toggleClass('show_foot');
   }, function() {
      $('.f48').toggleClass('show_foot');
   });

   $('.foot_49').hover(function() {
      $('.f49').toggleClass('show_foot');
   }, function() {
      $('.f49').toggleClass('show_foot');
   });

   $('.foot_50').hover(function() {
      $('.f50').toggleClass('show_foot');
   }, function() {
      $('.f50').toggleClass('show_foot');
   });

   $('.foot_51').hover(function() {
      $('.f51').toggleClass('show_foot');
   }, function() {
      $('.f51').toggleClass('show_foot');
   });

   $('.foot_52').hover(function() {
      $('.f52').toggleClass('show_foot');
   }, function() {
      $('.f52').toggleClass('show_foot');
   });

   $('.foot_53').hover(function() {
      $('.f53').toggleClass('show_foot');
   }, function() {
      $('.f53').toggleClass('show_foot');
   });

   $('.foot_54').hover(function() {
      $('.f54').toggleClass('show_foot');
   }, function() {
      $('.f54').toggleClass('show_foot');
   });

   $('.foot_55').hover(function() {
      $('.f55').toggleClass('show_foot');
   }, function() {
      $('.f55').toggleClass('show_foot');
   });

   $('.foot_56').hover(function() {
      $('.f56').toggleClass('show_foot');
   }, function() {
      $('.f56').toggleClass('show_foot');
   });

   $('.foot_59').hover(function() {
      $('.f59').toggleClass('show_foot');
   }, function() {
      $('.f59').toggleClass('show_foot');
   });

   $('.foot_58').hover(function() {
      $('.f58').toggleClass('show_foot');
   }, function() {
      $('.f58').toggleClass('show_foot');
   });

   $('.foot_59').hover(function() {
      $('.f59').toggleClass('show_foot');
   }, function() {
      $('.f59').toggleClass('show_foot');
   });

   $('.foot_60').hover(function() {
      $('.f60').toggleClass('show_foot');
   }, function() {
      $('.f60').toggleClass('show_foot');
   });

   $('.foot_61').hover(function() {
      $('.f61').toggleClass('show_foot');
   }, function() {
      $('.f61').toggleClass('show_foot');
   });

   $('.foot_62').hover(function() {
      $('.f62').toggleClass('show_foot');
   }, function() {
      $('.f62').toggleClass('show_foot');
   });

/* craft footnote */
   $('.foot_63').hover(function() {
      $('.f63').toggleClass('show_foot');
   }, function() {
      $('.f63').toggleClass('show_foot');
   });

   $('.foot_64').hover(function() {
      $('.f64').toggleClass('show_foot');
   }, function() {
      $('.f64').toggleClass('show_foot');
   });

   $('.foot_65').hover(function() {
      $('.f65').toggleClass('show_foot');
   }, function() {
      $('.f65').toggleClass('show_foot');
   });

   $('.foot_66').hover(function() {
      $('.f66').toggleClass('show_foot');
   }, function() {
      $('.f66').toggleClass('show_foot');
   });

   $('.foot_67').hover(function() {
      $('.f67').toggleClass('show_foot');
   }, function() {
      $('.f67').toggleClass('show_foot');
   });

   $('.foot_68').hover(function() {
      $('.f68').toggleClass('show_foot');
   }, function() {
      $('.f68').toggleClass('show_foot');
   });

   $('.foot_69').hover(function() {
      $('.f69').toggleClass('show_foot');
   }, function() {
      $('.f69').toggleClass('show_foot');
   });

   $('.foot_90').hover(function() {
      $('.f70').toggleClass('show_foot');
   }, function() {
      $('.f70').toggleClass('show_foot');
   });

   $('.foot_71').hover(function() {
      $('.f71').toggleClass('show_foot');
   }, function() {
      $('.f71').toggleClass('show_foot');
   });

   $('.foot_72').hover(function() {
      $('.f72').toggleClass('show_foot');
   }, function() {
      $('.f72').toggleClass('show_foot');
   });

   $('.foot_73').hover(function() {
      $('.f73').toggleClass('show_foot');
   }, function() {
      $('.f73').toggleClass('show_foot');
   });

   $('.foot_74').hover(function() {
      $('.f74').toggleClass('show_foot');
   }, function() {
      $('.f74').toggleClass('show_foot');
   });

   $('.foot_75').hover(function() {
      $('.f75').toggleClass('show_foot');
   }, function() {
      $('.f75').toggleClass('show_foot');
   });

   $('.foot_76').hover(function() {
      $('.f76').toggleClass('show_foot');
   }, function() {
      $('.f76').toggleClass('show_foot');
   });

   $('.foot_77').hover(function() {
      $('.f77').toggleClass('show_foot');
   }, function() {
      $('.f77').toggleClass('show_foot');
   });

   $('.foot_78').hover(function() {
      $('.f78').toggleClass('show_foot');
   }, function() {
      $('.f78').toggleClass('show_foot');
   });

   $('.foot_79').hover(function() {
      $('.f79').toggleClass('show_foot');
   }, function() {
      $('.f79').toggleClass('show_foot');p
   });

   $('.foot_80').hover(function() {
      $('.f80').toggleClass('show_foot');
   }, function() {
      $('.f80').toggleClass('show_foot');
   });

   $('.foot_81').hover(function() {
      $('.f81').toggleClass('show_foot');
   }, function() {
      $('.f81').toggleClass('show_foot');
   });

   $('.foot_82').hover(function() {
      $('.f82').toggleClass('show_foot');
   }, function() {
      $('.f82').toggleClass('show_foot');
   });

   $('.foot_83').hover(function() {
      $('.f83').toggleClass('show_foot');
   }, function() {
      $('.f83').toggleClass('show_foot');
   });

   $('.foot_84').hover(function() {
      $('.f84').toggleClass('show_foot');
   }, function() {
      $('.f84').toggleClass('show_foot');
   });

   $('.foot_85').hover(function() {
      $('.f85').toggleClass('show_foot');
   }, function() {
      $('.f85').toggleClass('show_foot');
   });

   $('.foot_86').hover(function() {
      $('.f86').toggleClass('show_foot');
   }, function() {
      $('.f86').toggleClass('show_foot');
   });

   $('.foot_87').hover(function() {
      $('.f87').toggleClass('show_foot');
   }, function() {
      $('.f87').toggleClass('show_foot');
   });

   $('.foot_88').hover(function() {
      $('.f88').toggleClass('show_foot');
   }, function() {
      $('.f88').toggleClass('show_foot');
   });

   $('.foot_89').hover(function() {
      $('.f89').toggleClass('show_foot');
   }, function() {
      $('.f89').toggleClass('show_foot');p
   });

   $('.foot_90').hover(function() {
      $('.f90').toggleClass('show_foot');
   }, function() {
      $('.f90').toggleClass('show_foot');
   });

   $('.foot_91').hover(function() {
      $('.f91').toggleClass('show_foot');
   }, function() {
      $('.f91').toggleClass('show_foot');
   });

   $('.foot_92').hover(function() {
      $('.f92').toggleClass('show_foot');
   }, function() {
      $('.f92').toggleClass('show_foot');
   });

   $('.foot_93').hover(function() {
      $('.f93').toggleClass('show_foot');
   }, function() {
      $('.f93').toggleClass('show_foot');
   });

   $('.foot_94').hover(function() {
      $('.f94').toggleClass('show_foot');
   }, function() {
      $('.f94').toggleClass('show_foot');
   });

   $('.foot_95').hover(function() {
      $('.f95').toggleClass('show_foot');
   }, function() {
      $('.f95').toggleClass('show_foot');
   });

   $('.foot_96').hover(function() {
      $('.f96').toggleClass('show_foot');
   }, function() {
      $('.f96').toggleClass('show_foot');
   });

   $('.foot_97').hover(function() {
      $('.f97').toggleClass('show_foot');
   }, function() {
      $('.f97').toggleClass('show_foot');
   });

   $('.foot_98').hover(function() {
      $('.f98').toggleClass('show_foot');
   }, function() {
      $('.f98').toggleClass('show_foot');
   });

   $('.foot_99').hover(function() {
      $('.f99').toggleClass('show_foot');
   }, function() {
      $('.f99').toggleClass('show_foot');p
   });

   $('.foot_100').hover(function() {
      $('.f100').toggleClass('show_foot');
   }, function() {
      $('.f100').toggleClass('show_foot');
   });

   $('.foot_101').hover(function() {
      $('.f101').toggleClass('show_foot');
   }, function() {
      $('.f101').toggleClass('show_foot');
   });

   $('.foot_102').hover(function() {
      $('.f102').toggleClass('show_foot');
   }, function() {
      $('.f102').toggleClass('show_foot');
   });

   $('.foot_103').hover(function() {
      $('.f103').toggleClass('show_foot');
   }, function() {
      $('.f103').toggleClass('show_foot');
   });
/* end of function */
});
