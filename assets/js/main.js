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
class MyNavbar extends HTMLElement {
	connectedCallback(){
		this.innerHTML = 
		`
		<nav class="navbar">
			<a class="navbar-logo" href="/index.html">
				<img src="/img/velo-logo-small.png" alt="Logo_DreamTim" class="logo">
				<img src="/img/texte-Dream-Tim.png" alt="Logo_DreamTim" class="text-logo">
			</a>
			<button class="toggle-button">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</button>
			<div class="navbar-links">
				<ul class="shown">
					<li class="dropdown">
						<!-- <i class="fa fa-angle-down" style="cursor: pointer;" onclick="location.href='/generic.html';"></i> -->
						<!-- <span onclick="location.href='';" style="cursor: pointer;" href="" class="test"></span> -->
						<a class="dropbtn">Le projet</a>
						<ul class="dropdown-content">
							<li><a href="/index.html">Présentation</a></li>
							<li><a href="/aventurier.html">L'aventurier</a></li>
							<li><a href="/itineraire.html">L'itinéraire</a></li>
							<li><a href="/association-petits-princes.html">L'Association Petits Princes</a></li>
							<li><a href="/ecoles.html">Les écoles</a></li>
							<li><a href="/staff.html">Le staff</a></li>
						</ul>							
					</li>
					<li class="dropdown">
						<!-- <span onclick="location.href='';" style="cursor: pointer;" href="" class="test"></span> -->
						<a class="dropbtn">Actualités</a>
						<ul class="dropdown-content">
							<li><a href="/journal-de-bord.html">Journal de bord</a></li>
							<li><a href="/suivi-gps.html">Suivi GPS</a></li>
						</ul>						
					</li>
					<li class="dropdown">
						<!-- <span onclick="location.href='';" style="cursor: pointer;" href="" class="test"></span> -->
						<button class="dropbtn">Le Rêve</button>
						<ul class="dropdown-content">
							<li><a href="/impact-positif-du-reve.html">Impact positif du rêve</a></li>
							<li><a href="/a-chacun-ses-reves.html">A chacun ses rêves</a></li>
						</ul>						
					</li>
					<li class="dropdown">
						<!-- <span onclick="location.href='';" style="cursor: pointer;" href="" class="test"></span> -->
						<button class="dropbtn">A propos</button>
						<ul class="dropdown-content">
							<li><a href="/partenaires.html">Partenaires</a></li>
							<li><a href="/presse.html">Presse</a></li>
							<li><a href="/contacts.html">Contacts</a></li>
						</ul>							
					</li>
					<li><a class="don" href="https://creer-ma-collecte.petitsprinces.com/projects/dream-tim" target="_blank">Faire un don</a></li>
				</ul>
			</div>
		</nav>
		`
	}
}
customElements.define('my-navbar',MyNavbar)

//footer
class MyFooter extends HTMLElement {
	connectedCallback(){
		this.innerHTML = 
		`<section id="footer" class="wrapper style7">
			<ul class="icons">
				<li><a href="https://www.instagram.com/dreamtim___/" target="_blank" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
				<li><a href="https://www.facebook.com/DREAM-TIM-101018092510498" target="_blank" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
				<li><a href="https://www.linkedin.com/company/dreamtimm/" target="_blank" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>
				<li><a href="https://www.youtube.com/channel/UCrkG87koakRA3kCb_rIHhsQ" target="_blank" class="icon brands fa-youtube"><span class="label">Youtube</span></a></li>
				<li><a href="mailto:contact.dreamtim@gmail.com" target="_blank" class="icon solid fa-envelope"><span class="label">Mail</span></a></li>
			</ul>
			<div class="copyright">
				<ul class="menu">
					<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="https://www.linkedin.com/in/vianney-vouters/" target="_blank">Vianney Vts</a></li>
				</ul>
			</div>
		</section>
		`
	}
}
customElements.define('my-footer',MyFooter)


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
	console.log(windowWidth,'window width');
	if(windowWidth > 1105) {
		dropdown[i].addEventListener("mouseover", function() {
			for(let j=0; j<dropdown.length; j++){
				if(i!=j){
					dropdownContent[j].classList.remove('active');
				}
				console.log('test');
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
	if(target.closest('.shown') == null) {
		for(let j=0; j<dropdown.length; j++){
			dropdownContent[j].classList.remove('active');
		}
	} 
	if(target.closest('.navbar') == null) {
		navbarLinks.classList.remove('active');
	}       
  });

  // compte à rebours
  if (document.getElementById("decompte") != null) {
	var deadline = new Date("Sep 10, 2022 10:00:00").getTime();
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
  }

  // slider
  let slidePosition = [];
  let totalSlides = [];
  const swipers = document.getElementsByClassName('swiper');
  const slides = []
  let nbSwipers = -1

  for (let swiper of swipers) {
	nbSwipers++;
	slides.push(swiper.getElementsByClassName('slide'));
	slidePosition.push(0);
  	totalSlides.push(slides[nbSwipers].length);
  }

  function updateSlidePosition(indexSwiper) {
	for (let slide of slides[indexSwiper]) {
	  slide.classList.remove('slide-visible');
	  slide.classList.add('slide-hidden');
	}
	slides[indexSwiper][slidePosition[indexSwiper]].classList.remove('slide-hidden');
	slides[indexSwiper][slidePosition[indexSwiper]].classList.add('slide-visible');
  }

function moveToNextSlide(indexSwiper) {
	console.log('index',indexSwiper)
	if (slidePosition[indexSwiper] === totalSlides[indexSwiper] - 1) {
	  slidePosition[indexSwiper] = 0;
	} else {
	  slidePosition[indexSwiper]++;
	}
	updateSlidePosition(indexSwiper);
}
  
function moveToPrevSlide(indexSwiper) {
	if (slidePosition[indexSwiper] === 0) {
	  slidePosition[indexSwiper] = totalSlides[indexSwiper] - 1;
	} else {
	  slidePosition[indexSwiper]--;
	}
  
	updateSlidePosition(indexSwiper);
}

const cards = document.getElementsByClassName('card');

document.addEventListener('click',function (event) {
	// sliders
	if (event.target.matches('button')) {
		if (event.target.matches('.swiper-button-prev')) {
			let swiperNb = parseInt(event.target.className.split(' ')[1]);
			moveToPrevSlide(swiperNb);
		}
		if (event.target.matches('.swiper-button-next')) {
			let swiperNb = parseInt(event.target.className.split(' ')[1]);
			moveToNextSlide(swiperNb);
		}
	}
	// staff
	else if (event.target.matches('.polaroide') || event.target.matches('.front') || event.target.matches('.back')) {
		let clicked = false
		if (event.target.closest('.card').classList.contains('clicked')){
			clicked = true;
		}
		for (let card of cards) {
			card.classList.remove('clicked');
		}
		if (!clicked){
			event.target.closest('.card').classList.add('clicked');
		}
	} else {
		for (let card of cards) {
			card.classList.remove('clicked');
		}
	}
	console.log(event.target);
}, false);



//   const slides = document.getElementsByClassName('slide');

//   document.
// 	getElementById('swiper-button-next')
// 	.addEventListener("click", function() {
// 	  moveToNextSlide();
// 	});
//   document.
// 	getElementById('swiper-button-prev')
// 	.addEventListener("click", function() {
// 	  moveToPrevSlide();
// 	});
  
//   function updateSlidePosition() {
// 	for (let slide of slides) {
// 	  slide.classList.remove('slide-visible');
// 	  slide.classList.add('slide-hidden');
// 	}
// 	slides[slidePosition].classList.remove('slide-hidden');
// 	slides[slidePosition].classList.add('slide-visible');
//   }
  
//   function moveToNextSlide() {
// 	if (slidePosition === totalSlides - 1) {
// 	  slidePosition = 0;
// 	} else {
// 	  slidePosition++;
// 	}
// 	updateSlidePosition();
//   }
  
//   function moveToPrevSlide() {
// 	if (slidePosition === 0) {
// 	  slidePosition = totalSlides - 1;
// 	} else {
// 	  slidePosition--;
// 	}
  
// 	updateSlidePosition();
//   }

//   updateSlidePosition();


// navigation partenaires
var listePartenaires = [
	"autour-du-bureau.html",
	"ULille.html",
	"respire.html",
	"Jonathan-Thevenoud.html",
	"GObyAVA.html",
	"corep.html",
	"mistertee.html",
	"Hem.html",
	"SCH.html",
	"lions-clubs.html",
	"credit-agricole.html",
	"carette.html",
	"lissac-opticien.html",
	"corp-medecine-lille.html",
	"les-miraculeux.html",
	"boulangerie-delcour.html"
];

var nbPartenaires = listePartenaires.length;
console.log(listePartenaires);

var pagePartenaire = location.pathname.split("/").slice(-2,-1);
console.log(pagePartenaire);
if (pagePartenaire == "partenaires"){
	partenaire = location.pathname.split("/").slice(-1)[0];
	console.log(partenaire);
	index = listePartenaires.indexOf(partenaire);
	previous = listePartenaires[(index-1+nbPartenaires) % nbPartenaires];
	next = listePartenaires[(index+1+nbPartenaires) % nbPartenaires];
	document.getElementById("previous").setAttribute("href", "/partenaires/"+previous);
	document.getElementById("next").setAttribute("href", "/partenaires/"+next);
}