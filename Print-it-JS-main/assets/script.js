const slidesData = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  image: "slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  image: "slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  let slideIndex = 0;
  const slidesContainer = document.getElementById('banner');
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots');
  slidesContainer.appendChild(dotsContainer);
  const dots = [];

  
  slidesData.forEach((slide, currentIndex) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
	dots.push(dot);
	dot.addEventListener('click', function () {
	  showSlide(currentIndex);
	});
  });

  function showSlide(currentIndex) {
	slideIndex = currentIndex;
	slidesContainer.style.backgroundImage = `url(./assets/images/slideshow/${slidesData[slideIndex].image})`;
	bannerContainer = document.getElementById('tagline') 
	bannerContainer.innerHTML = '' + slidesData[slideIndex].tagLine; //
	
	dots.forEach((dot, dotIndex) => {
	  if (dotIndex === slideIndex) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  function changeSlide(direction) {
	slideIndex = (slideIndex + direction + slidesData.length) % slidesData.length;
	showSlide(slideIndex);
  }


  
  document.querySelector('#banner .arrow_left').addEventListener('click', function () {
	changeSlide(-1);
  });
  
  document.querySelector('#banner .arrow_right').addEventListener('click', function () {
	changeSlide(1);
  });
  
  showSlide(slideIndex);
  