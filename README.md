Vous débutez comme développeur front-end en freelance, et venez de décrocher une offre pour dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it.
Bannière du site print it
Vous recevez votre premier mail de Lucien, le directeur.

Objet : Détails pour le carrousel
De : Lucien Gerodo
À : Moi
Bonjour, 
J’espère que vous allez bien.
Je vous envoie une vidéo pour vous expliquer en détail le carrousel idéal que je souhaite, ce sera plus simple : 

N’hésitez pas si vous avez des questions. 
Merci et bonne journée, 
Lucien Gerodo.
Muni des instructions et de la vidéo de Lucien, vous entreprenez de réaliser le carrousel idéal !
Ce projet a pour objectif de vous faire découvrir le langage JavaScript pas à pas à travers chaque étape détaillée. 
Pour cette raison, l’énoncé du projet peut paraître long. Mais rassurez-vous, il s’agit principalement d’aides à la réalisation. Le code à fournir sera succinct.
Étape 1 : Mettez à jour le code HTML




Afin de pouvoir avoir un carrousel dynamique, vous allez commencer par ajouter les flèches en mode statique. Elles vous permettront de gérer la navigation entre les images du carrousel.
Analysez le code HTML et CSS à la recherche des éléments déjà présents sur le site.  
Ajoutez les images des flèches pour pouvoir naviguer dans le carrousel. 
Recommandations 
Dans les images du site il y a deux fichiers, `arrow_left.png` et `arrow_right.png`, à ajouter. Le CSS vous aidera à voir où vous devrez intégrer les images. 
Ressources utiles pour mener à bien cette étape :
Le chapitre “Abordez d’autres techniques de mise en page” du cours “Créez votre site web avec HTML5 et CSS3".
Étape 2 : Ajoutez des Event Listeners sur les flèches 



Vous avez les flèches présentes dans la bannière ? C’est un bon début ! Rendez vos flèches interactives afin de pouvoir gérer le changement des images de notre carrousel. 
Mettre un event listener sur chacune des flèches. 
Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners.
S’assurer qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit. 
Ressources utiles pour mener à bien cette étape :
Les chapitres "Récupérez un élément d’une page web” et "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec JavaScript".
La documentation "Introduction aux évènements".
Étape 3 : Ajoutez des bullet points au slider



 
Maintenant que nous écoutons le clic sur les flèches, passons à un autre élément de l’interface : les bullets points. Ils permettront à l’utilisateur de savoir sur quelle slide il se trouve.
Ajouter les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider. 
Une fois les points affichés, différencier le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.
Recommandations : 
Pour savoir combien de points mettre, on peut compter, via JavaScript, le nombre d’éléments présents dans le tableau “slides” du fichier `script.js` , et afficher un point par image. 
Pour comprendre comment ajouter les points, vous pouvez vous référer au fichier CSS du site, il vous donnera les informations nécessaires sur les classes à utiliser pour les différents types de points. 
Ressources utiles pour mener à bien cette étape :
La documentation MDN sur les tableaux vous aidera à voir comment compter le nombre d’éléments d’un tableau en JavaScript.
Le chapitre "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec JavaScript".
Étape 4 : Modifiez le slide au clic sur le bouton



 
Vous avez maintenant tous les éléments nécessaires à la navigation dans notre carrousel, félicitations. Il est grand temps d’ajouter nos images !
Au clic sur la flèche droite : 
on change le bullet point actif au suivant ;
on change l’image ;
on change le texte correspondant à l’image.
Au clic sur la flèche gauche, nous faisons la même chose mais pour les éléments précédents. 
Recommandations : 
Pour changer l’image, pensez à bien construire le chemin de la nouvelle image.
Pour intégrer le texte, utilisez la propriété innerHTML et insérez la tagLine de la slide.
Travaillez avec les index du tableau. 
À ce stade, le carrousel est maintenant fonctionnel, mais il ne se comporte pas comme attendu. Si vous êtes à la première image et que vous cliquez sur la flèche de gauche, vous aurez une erreur dans la console. Il se produira la même chose avec la flèche de droite sur la dernière image. Nous allons régler cela dans notre dernière étape !
Ressources utiles pour mener à bien cette étape :
Le chapitre "Modifiez un élément d’une page web" du cours "Apprenez à programmer avec Javascript".
La documentation “Introduction aux évènements”
Étape 5 : Mettez en place le défilement infini sur le carrousel  



 
À ce stade, les images du carrousel défilent, nous sommes presque arrivés au bout ! Il est temps maintenant de corriger nos derniers bugs, et de faire en sorte que notre carrousel tourne en boucle indéfiniment. Nous allons donc ajouter des conditions. 
Si on est à la dernière image et que l’on clique à droite : 
on affiche la première image ;
le point sélectionné est le premier.
Si on est à la première image et qu’on clique à gauche : 
on affiche la dernière image ;
le point sélectionné est le dernier. 
Dans tous les cas, le texte change en accord avec l’image montrée.
Ressources utiles pour mener à bien cette étape :
Le chapitre “Contrôlez du code grâce aux conditions” du cours "Apprenez à programmer avec Javascript".
Félicitations ! Votre carrousel est maintenant terminé !
