/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);


// navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const dropdown = document.querySelectorAll(".dropdown");
const dropdownContent = document.querySelectorAll(".dropdown-content");
console.log(dropdown)
console.log(dropdownContent)

for(let i=0; i<dropdown.length; i++){
	dropdown[i].addEventListener("click",function(){
		for(let j=0; j<dropdown.length; j++){
			if(i!=j){
				dropdownContent[j].classList.remove('active');
			}
		}
		dropdownContent[i].classList.toggle('active');
	})

	var windowWidth = window.innerWidth;
	if(windowWidth > 1280) {
		dropdown[i].addEventListener("mouseover", function() {
			for(let j=0; j<dropdown.length; j++){
				if(i!=j){
					dropdownContent[j].classList.remove('active');
				}
			}
		})
	}
}

// hides the menu if we click away
// (window.click(function() {
// 	for(let j=0; j<dropdown.length; j++){
// 		dropdownContent[j].classList.remove('active');
// 	}
//   });


$(document).click(function(event) { 
	var target = event.target;
	console.log(target);
	console.log(target.closest('.dropdown'));
	if(target.closest('.shown') == null) {
		console.log('test');
		for(let j=0; j<dropdown.length; j++){
			dropdownContent[j].classList.remove('active');
		}
	}        
  });

  // compte à rebours
  var deadline = new Date("Jul 5, 2022 12:00:00").getTime();
  var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("decompte").innerHTML = days + " jours " 
  + hours + " h " + minutes + " m " + seconds + " s ";
	  if (t < 0) {
		  clearInterval(x);
		  document.getElementById("decompte").innerHTML = "EXPIRED";
	  }
  }, 1000);