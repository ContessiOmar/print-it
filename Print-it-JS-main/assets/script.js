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
  
  let slideIndex = 0;
  const slides = document.querySelectorAll('#banner .banner-img');
  const dots = document.querySelectorAll('#banner .dot');

  /**
 * Affiche la diapositive spécifiée par index
 * @param {number} currentIndex - L'index de la diapositive que on va afficher
 */
  
  function showSlide(currentIndex) {
	for (let i = 0; i < slides.length; i++) {
	  slides[i].style.display = 'none'; // Don't show any pictures
	  dots[i].classList.remove('dot_selected'); // Don't show the class "dot_selected"
	} 

	slides[currentIndex].style.display = 'block'; //Affiche limage correspondant à l'index courant
	dots[currentIndex].classList.add('dot_selected'); //Applique la class "dot_selected" uniquement au "dot" correspondant a l'image.
  }
  
  function changeSlide(direction) {
	slideIndex = (slideIndex + direction + slides.length) % slides.length;
	showSlide(slideIndex);
  } // Fonction pour changer l'image en fonction de la direction specifiée. (on utilise "slides.lenght" pour selectioner toutes les slides present et "%"" pour faire un sort que le switch de des images ne termine jamais.)
  
  document.querySelector('#banner .arrow_left').addEventListener('click', function() {
	changeSlide(-1);
  }); //Change l'image lorsque le bouton à gauche est cliqué
  
  document.querySelector('#banner .arrow_right').addEventListener('click', function() {
	changeSlide(1);
  }); //Change l'image lorsque le bouton à droit est cliqué
  
 
  showSlide(slideIndex);
  // Affiche l'image initiale