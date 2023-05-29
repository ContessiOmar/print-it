const slidesData = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  var slideIndex = 0;
  var slides = document.querySelectorAll('#banner .banner-img');
  var dots = document.querySelectorAll('#banner .dot');
  
  function showSlide(index) {
	for (var i = 0; i < slides.length; i++) {
	  slides[i].style.display = 'none';
	  dots[i].classList.remove('dot_selected');
	}
	slides[index].style.display = 'block';
	dots[index].classList.add('dot_selected');
  }
  
  function changeSlide(n) {
	slideIndex = (slideIndex + n + slides.length) % slides.length;
	showSlide(slideIndex);
  }
  
  document.querySelector('#banner .arrow_left').addEventListener('click', function() {
	changeSlide(-1);
  });
  
  document.querySelector('#banner .arrow_right').addEventListener('click', function() {
	changeSlide(1);
  });
  
 
  showSlide(slideIndex);
  