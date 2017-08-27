$(document).ready(function(){
	$('.i-one').click(function(){
		$('.one').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-two').click(function(){
		$('.two').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-three').click(function(){
		$('.three').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-four').click(function(){
		$('.four').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-five').click(function(){
		$('.five').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-six').click(function(){
		$('.six').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-seven').click(function(){
		$('.seven').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-eight').click(function(){
		$('.eight').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-nine').click(function(){
		$('.nine').toggleClass('visible');
	});
});

$(document).ready(function(){
	$('.i-ten').click(function(){
		$('.ten').toggleClass('visible');
	});
});
// rotate scroll
// var $sun = $('.sun');
// var $win = $(window);
//
// $win.on('scroll', function () {
//   var top = $win.scrollTop() /3;
//   $sun.css('transform', 'rotate(' + top + 'deg)');
// })
//
// $( document ).ready(function() {
//
//   // Get started!
//
// });
//
//show-hide
// var $dipper = $('.dipper');
//
// $dipper.waypoint(function (direction) {
//   if (direction == 'down') {
//     $dipper.addClass('js-dipper-animate');
//   }
//   else {
//     $dipper.removeClass('js-dipper-animate');
//   }
// }, { offset: '50%' });
// check

$(document).ready(function(){
  var count = $("#myList > li").length;
  $(".custom-counter").css("counter-reset", "step-counter " + (count + 1));
});

$(document).ready(function(){
  $('#hamburger-icon').click(function(){
    $('#sidebar').toggleClass('visible')
  });
});
$(document).ready(function(){
  $('#hamburger-icon').click(function(){
    $('body').toggleClass('right')
  });
});

// $(document).ready(function(){
//   $('.link').click(function(){
//     $('#sidebar').addClass('nav-hidden')
//   });
// });

// $(document).ready(function(){
//   $('#hamburger-icon').click(function(){
//     $('#hamburger-icon').toggleClass('fixed')
//   });
// });
var linkpng = $('.png');
var linksvg = $('.svg');

$(document).ready(function(){
	$('#hamburger-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$(document).ready(function(){
$(".nav li").on("click", function() {
  $(this).toggleClass("center");
});
});
// $(document).ready(function(){
// 	$('li').click(function(){
// 		$('li').toggleClass('center');
// 	});
// });
$(document).ready(function(){
	$('.x').click(function(){
		$('.center').removeClass('center');
	});
});

$(document).ready(function(){
	$('.x').click(function(){
		$('.download-link').removeClass('visible');
	});
});
//
// $(function() {
//     var header = $(".clearHeader");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//
//         if (scroll >= 150) {
//             header.removeClass('clearHeader').addClass("darkHeader");
//         } else {
//             header.removeClass("darkHeader").addClass('clearHeader');
//         }
//     });
// });
// $(function() {
//     var header = $(".clearLogo");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//
//         if (scroll >= 150) {
//             header.removeClass('clearLogo').addClass("outLogo");
//         } else {
//             header.removeClass("outLogo").addClass('clearLogo');
//         }
//     });
// });
$(document).ready(function() {
    $('html').hide().fadeIn(1000);
});

// //smooth scroll
// $(document).ready(function() {
//
//   var scrollLink = $('.scroll');
//
//   // Smooth scrolling
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top - 60
//     }, 1000);
//   });
//
//   // Active link switching
//   $(window).scroll(function() {
//     var scrollbarLocation = $(this).scrollTop();
//
//     scrollLink.each(function() {
//
//       var sectionOffset = $(this.hash).offset().top - 20;
//
//       if ( sectionOffset <= scrollbarLocation ) {
//         $(this).addClass('active');
//         $(this).siblings().removeClass('active');
//       }
//     })
//
//   })
//
// })
//scroll to id
// $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
//         if (target.length) {
//             $('html,body').animate({
//               scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     });
// });
//scroll to horizontal/vertical
// $({myScrollTop:window.pageYOffset}).animate({myScrollTop:300}, {
//   duration: 600,
//   easing: 'swing',
//   step: function(val) {
//     window.scrollTo(0, val);
//   }
// });

//click and drag to scrolll
// var curYPos, curXPos, curDown;
//
// window.addEventListener('mousemove', function(e){
//   if(curDown){
//     window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
//   }
// });
//
// window.addEventListener('mousedown', function(e){
//   curYPos = e.pageY;
//   curXPos = e.pageX;
//   curDown = true;
// });
//
// window.addEventListener('mouseup', function(e){
//   curDown = false;
// });

// $(document).ready(function(){
//   $('#sidebar-btn-1').click(function(){
//     $('#sidebar-1').toggleClass('visible')
//   });
// });
//
// $(document).ready(function(){
//   $('#sidebar-btn-1').click(function(){
//     $('#sidebar-btn-1').toggleClass('clicked')
//   });
// });
