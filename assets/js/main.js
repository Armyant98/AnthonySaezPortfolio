/*
	Inverse by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

//section y offsets for animation purposes
let one = document.getElementById("one");
let oneRect= one.getBoundingClientRect();
let oneY = oneRect.y;
oneY = oneY + window.scrollY
console.log(oneY)



addEventListener("resize", (event) => {
	let one = document.getElementById("one");
	let oneRect= one.getBoundingClientRect();
	let oneY = oneRect.y;
	oneY = oneY + window.scrollY
	console.log(oneY)
});


(function($) {

	var	$window	= $(window),
		$header	= $('#header'),
		$body	= $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: 'right',
			hideDelay: 350,
			baseZIndex: 100000
		});

	//header 
	$(document).ready(function () {
		var header = $("#header");
	  
		$(window).scroll(function () {
	      if ($(window).scrollTop() === 0 ) {
			header.slideDown();
		  }
		  else if ( $(window).scrollTop() > oneY ) {
			header.addClass("fixed");
			header.slideDown();
		  } else {
			header.slideUp(400, function () {
			  header.removeClass("fixed");
			});
		  }
		});
	  });
	  

	// Menu.
		$('<a href="#navPanel" class="navPanelToggle"><span>Menu</span></a>')
			.appendTo($header);

		$(
			'<div id="navPanel">' +
				'<nav>' +
					$('#nav') .navList() +
				'</nav>' +
				'<a href="#navPanel" class="close"></a>' +
			'</div>'
		)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					target: $body,
					visibleClass: 'is-navPanel-visible',
					side: 'right'
				});

})(jQuery);



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//GSAP

// ScrollTrigger.create({
// 	start: 'top -1000',
// 	end: 99999,
// 	toggleClass: {className: 'fixed', targets: '#header'}
//   });