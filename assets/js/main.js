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

//accordion

//height for accordion to be adjustable and allow smooth open/close



const expandProjects = document.querySelector('#projectExpand')
const accordion = document.getElementById('projectAccordion');
const projectContainer =  document.getElementById('projectContainer')


expandProjects.addEventListener('click', expand)
expandProjects.addEventListener('click', refresh)

function refresh(){
	ScrollTrigger.refresh(true)
}

function expand(){
	
	
	
	accordion.classList.toggle('expand')
	console.log('made it')

	var projectsAlwaysVisible = document.querySelector('#inner');
	var projectHeight = projectsAlwaysVisible.offsetHeight;
	console.log(projectHeight)
	let accordionByClass = document.querySelector('.accordion.expand')

	if (accordion.classList.contains('expand')){
		expandProjects.innerText = 'Show less'
		accordion.classList.add('gs_expand')
		
		
	}

	else{
		expandProjects.innerText = 'Show more'
		accordion.classList.remove('gs_expand')
		accordion.setAttribute('style', `height: 0px`)
	}

	
	accordionByClass.setAttribute('style', `height: ${projectHeight}px`)
	console.log(accordionByClass.offsetHeight)
	
}

	


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

	//header reappear upon entering first section
	$(document).ready(function () {
		var header = $("#header");
	  
		$(window).scroll(function () {
	      if ($(window).scrollTop() === 0 ) {
			header.slideDown();
		  }
		  else if ( $(window).scrollTop() >= oneY -1 ) {
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


//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//GSAP

function animateFrom(elem, direction) {
	direction = direction || 1;
	var x = 0,
		y = direction * 200;
	if(elem.classList.contains("gs_reveal_fromLeft")) {
	  x = -100;
	  y = 0;
	} else if (elem.classList.contains("gs_reveal_fromRight")) {
	  x = 100;
	  y = 0;
	}
	elem.style.transform = "translate(" + x + "px, " + y + "px)";
	elem.style.opacity = "0";
	gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
	  duration: 1.25, 
	  x: 0,
	  y: 0, 
	  autoAlpha: 1, 
	  ease: "expo", 
	  overwrite: "auto"
	});
  }
  
  function hide(elem) {
	gsap.set(elem, {autoAlpha: 0});
  }
  
  document.addEventListener("DOMContentLoaded", function() {
	gsap.registerPlugin(ScrollTrigger);

	

	
	gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
	  hide(elem); // assure that the element is hidden when scrolled into view
	  
	  ScrollTrigger.create({
		trigger: elem,
		// markers: true,
		onEnter: function() { animateFrom(elem) }, 
		onEnterBack: function() { animateFrom(elem, -1) },
		onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
	  });
	});



	
  });
  


  // function for height recalc when exapnd button is hit 
  function animateFrom(elem, direction) {
	direction = direction || 1;
	var x = 0,
		y = direction * 200;
	if(elem.classList.contains("gs_reveal_fromLeft")) {
	  x = -100;
	  y = 0;
	} else if (elem.classList.contains("gs_reveal_fromRight")) {
	  x = 100;
	  y = 0;
	}
	elem.style.transform = "translate(" + x + "px, " + y + "px)";
	elem.style.opacity = "0";
	gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
	  duration: 1.25, 
	  x: 0,
	  y: 0, 
	  autoAlpha: 1, 
	  ease: "expo", 
	  overwrite: "auto"
	});
  }
  
  function hide(elem) {
	gsap.set(elem, {autoAlpha: 0});
  }
  
  expandProjects.addEventListener("click", function() {
	gsap.registerPlugin(ScrollTrigger);

	

	
	gsap.utils.toArray(".gs_expanded").forEach(function(elem) {
	  hide(elem); // assure that the element is hidden when scrolled into view
	  
	  ScrollTrigger.create({
		trigger: elem,
		// markers: true,
		onEnter: function() { animateFrom(elem) }, 
		onEnterBack: function() { animateFrom(elem, -1) },
		onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
	  });
	});
	
  });

// ScrollTrigger.create({
// 	start: 'top -1000',
// 	end: 99999,
// 	toggleClass: {className: 'fixed', targets: '#header'}
//   });


//light mode 

