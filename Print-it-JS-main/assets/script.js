const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let banner_img2 = document.getElementsByClassName('banner_img');

let dotsContainer = document.querySelector('.dots');

let etape = 0;

let nbr_img = slides.length;

let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');



arrow_right.addEventListener('click', function(){
	etape++;
	if(etape >= nbr_img) {
		etape = 0;
	}
	banner_img2[0].src = "assets/images/slideshow/" + slides[etape].image
	document.querySelector('.tagline').innerHTML = slides[etape].tagLine;
	updateDots();
});


arrow_left.addEventListener('click', function() {
	etape--;
	if(etape < 0) {
		etape = 3;
	}
	banner_img2[0].src = "assets/images/slideshow/" + slides[etape].image
	document.querySelector('.tagline').innerHTML = slides[etape].tagLine;
	updateDots();
});


function updateDots() {
	let dots = dotsContainer.getElementsByClassName('dot');
	for (let i = 0; i < nbr_img; i++) {
		if (i === etape) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	}
}

slides.forEach((slide, index) => {
	let dot = document.createElement('div');
	dot.classList.add('dot');
	if (index === 0) {
		dot.classList.add('dot_selected');
	}
	dotsContainer.appendChild(dot);
	dot.addEventListener('click', function() {
		etape = index;
		banner_img2[0].src = "assets/images/slideshow/" + slides[etape].image;
		document.querySelector('.tagline').innerHTML = slides[etape].tagLine;
		updateDots();
	});
});