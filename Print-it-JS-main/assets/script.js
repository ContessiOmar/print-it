/**
 * Tableau de données pour les diapositives
 * @type {Array}
 */
const slidesData = [
	{
	  image: "slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  image: "slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
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
  
  /**
   * Index de la diapositive en cours
   * @type {number}
   */
  let slideIndex = 0;
  
  /**
   * Conteneur des diapositives
   * @type {HTMLElement}
   */
  const slidesContainer = document.getElementById('banner');
  
  /**
   * Conteneur des points de navigation
   * @type {HTMLElement}
   */
  const dotsContainer = document.createElement('div');
  dotsContainer.classList.add('dots');
  slidesContainer.appendChild(dotsContainer);
  
  /**
   * Tableau des points de navigation
   * @type {Array}
   */
  const dots = [];
  
  /**
   * Crée les points de navigation et ajoute les gestionnaires d'événements pour chaque diapositive
   */
  slidesData.forEach((slide, currentIndex) => {
	/**
	 * Point de navigation
	 *
	 * @type {HTMLElement}
	 */
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
	dots.push(dot);
	dot.addEventListener('click', function () {
	  showSlide(currentIndex);
	});
  });
  
  /**
   * Affiche la diapositive correspondant à l'index donné
   *
   * @param {number} currentIndex - Index de la diapositive à afficher
   */
  function showSlide(currentIndex) {
	slideIndex = currentIndex;
	slidesContainer.style.backgroundImage = `url(./assets/images/slideshow/${slidesData[slideIndex].image})`;
	const bannerContainer = document.getElementById('tagline');
	bannerContainer.innerHTML = '' + slidesData[slideIndex].tagLine;
  
	dots.forEach((dot, dotIndex) => {
	  if (dotIndex === slideIndex) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  /**
   * Change la diapositive selon la direction demandée 
   *
   * @param {number} direction - Direction du changement d'image (-1 pour précédent, 1 pour suivant)
   */
  function changeSlide(direction) {
	slideIndex = (slideIndex + direction + slidesData.length) % slidesData.length;
	showSlide(slideIndex);
  }
  
  // Ajout d'événements pour les flèches de navigation
  
  /**
   * flèche gauche
   */
  document.querySelector('#banner .arrow_left').addEventListener('click', function () {
	changeSlide(-1);
  });
  
  /**
   * flèche droite
   */
  document.querySelector('#banner .arrow_right').addEventListener('click', function () {
	changeSlide(1);
  });
  
  // Affiche la première diapositive au chargement de la page
  showSlide(slideIndex);
  