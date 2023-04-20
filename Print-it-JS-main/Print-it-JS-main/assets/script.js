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

let banner_img = document.getElementsByClassName('banner_img');

let etape = 0;

let nbr_img = banner_img.length;

let arrow_left = document.querySelector('.arrow_left');
let arrow_right = document.querySelector('.arrow_right');

function enleverActiveImages() {
	for(let i = 0 ; i < nbr_img ; i++) {
		banner_img[i].classList.remove('active');
	}
}

arrow_right.addEventListener('click', function(){
	etape++;
	if(etape >= nbr_img) {
		etape = 0;
	}
	enleverActiveImages();
	banner_img[etape].classList.add('active');
})

.arrow_left.addEventListener('click', function() {
	etape--;
	enleverActiveImages();
	banner_img[etape].classList.add('active');
}
)