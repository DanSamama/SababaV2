
//Navbar change background color when scrolling

$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#home');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          // alert("Your are scrolling");
          $('#sababaNav').css('background-color', 'rgba(255,255,255,0.9');
          $('#sababaNav').css('border-radius', '10px');
          // $('#logoSab').css('border-radius', '13px');
          // $('#logoSab').css('background-color', '#91CCF4');
          // $('#logoSab').css('padding', '6px');


       } else {
          $('#sababaNav').css('background-color', 'transparent');
          // $('#logoSab').css('padding', '0px');
          // $('#logoSab').css('background-color', 'transparent');
          // $('#logoSab').css('border-radius', '0px');
       }
   });
});

jQuery(function($) {'use strict',

	//Pretty Photo
	 $("a[data-gallery^='prettyPhoto']").prettyPhoto({
	  social_tools: false
	 });


	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});


	// Navigation Scroll
	// $(window).scroll(function(event) {
	// 	Scroll();
	// });

	$('.navbar-collapse ul li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
		return false;
	});

});

// Preloder script
jQuery(window).load(function(){'use strict';
	$(".preloader").delay(1600).fadeOut("slow").remove();
});

//Preloder script
jQuery(window).load(function(){'use strict';

	// Slider Height
	var slideHeight = $(window).height();
	$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#home .carousel-inner .item, #home .video-container').css('height',slideHeight);
	});

});


// User define function
// function Scroll() {
// 	var contentTop      =   [];
// 	var contentBottom   =   [];
// 	var winTop      =   $(window).scrollTop();
// 	var rangeTop    =   200;
// 	var rangeBottom =   500;
// 	$('.navbar-collapse').find('.scroll a').each(function(){
// 		contentTop.push( $( $(this).attr('href') ).offset().top);
// 		contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
// 	})
// 	$.each( contentTop, function(i){
// 		if ( winTop > contentTop[i] - rangeTop ){
// 			$('.navbar-collapse li.scroll')
// 			.removeClass('active')
// 			.eq(i).addClass('active');
// 		}
// 	})
//
// };


// 	// Skill bar Function
//
// 	jQuery(document).ready(function(){
// 	jQuery('.skillbar').each(function(){
// 		jQuery(this).find('.skillbar-bar').animate({
// 			width:jQuery(this).attr('data-percent')
// 		},6000);
// 	});
// });

