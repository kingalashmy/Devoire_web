// fonction pour changer la postion de liste et la descrption 
function swapDivs() {
  var container = document.getElementById('container');
  var currentDirection = container.style.flexDirection || 'row' ;

  container.style.flexDirection = (currentDirection === 'row-reverse') ? 'row' : 'row-reverse';

}




// affiche les title et definition et l'image des element de liste 
// je cree un object pour stock la title et la deffenition de title et l'image 

var dict = {
  "HTML" : ["HTML", "L'HyperText Markup Language, HTML, désigne un type de langage informatique descriptif. Il s'agit plus précisément d'un format de données .... ", "html.png"],
  "CSS": [ "CSS", "Les feuilles de style en cascade,forment un langage informatique qui décrit la présentation des documents HTML ", "CSS.jpeg"],
  "JS": ["JavaScript", "language de programation pour fait la dynamique ", "js.png"],
  "PHP": ["PHP", "php est language des programation pour dyanamique de web site ", "php.png"],
  "Developpement web": ["Developpement web","le développement web fait référence au processus d’écriture d’un site ou d’une page web dans un langage technique", "web.jpeg"],
  "cote client": ["côté client", "Le côté serveur est responsable de la logique métier, du traitement des données, de l'accès à la base de données ... ", "client.jpeg"],
  "Reseaux informatique": ["Reseaux informatique", "la mise en relation d’au moins deux systèmes informatiques au moyen d’un câble ou sans fil","reseau.webp"],
  "côté serveur": ["côté serveur", "Les navigateurs web communiquent avec les serveurs web en utilisant le protocole HTTP (HyperText Transfer Protocol). ", "serveur.png"],
  "BDD": ["Base de donnee", "Les bases de données informatiques sont utilisées pour stocker, organiser et analyser les données." , "BDD.png"],
  "conception" : ["conception Informatique" ,"Le fait de concevoir un système en allant du général au particulier, en passant par des « étapes d’affinage »","cpt.jpg"],
};

// deput de la fonction de object et la defintion , l'image des element de list 
var langagesListe = document.getElementById('list_principale');
var informationsLangageDiv = document.getElementById('informationsLangage');
var titleElement = document.getElementById('title');
var paragraphElement = document.getElementById('paragraph');
var imageElement = document.getElementById('image');


langagesListe.addEventListener('click', function (event) {
    var module = document.getElementById('modul_hmlt_2').hidden = false ;  
  var target = event.target;
  var langage = target.getAttribute('data-langage');

  if (langage) {
    var informations = dict[langage];

    if (informations) {
      titleElement.textContent = informations[0];
      paragraphElement.textContent = informations[1];
      imageElement.src = informations[2];
      imageElement.alt = langage;
    } else {
      alert("Information non trouvée pour le langage " + langage);
    }
  }
//   appel la fonction pour calculer la mots de paragraph 
  compterMots() + 1 ;
});

// fin la fonction de title et la definition et l'image 

// fonction pour compter les mots de paragraph 
     // Fonction pour compter les mots dans un paragraphe
     function compterMots() {
        // Récupérer le paragraphe par son ID
        var paragraphe = document.getElementById("paragraph").textContent;

        // Utiliser la méthode split pour diviser le texte en mots
        var mots = paragraphe.split(' ');
        
        // Afficher le nombre de mots dans l'élément avec l'ID "compter"
        document.getElementById("compter").textContent =  mots.length ;
    }

    // la  fin de fonction pour calculer la mots de paragraph
   
    // debut de la fonction pour ajouter les element 
    function insererElement(span, position) {
        const parentLi = span.parentElement;
        const saisie = prompt('Entrez un nouvel élément :');

        if (saisie !== null && saisie.trim() !== '') {
            const nouvelElement = document.createElement('li');
            nouvelElement.textContent = saisie;

            const spanAvant = document.createElement('span');
            spanAvant.textContent = '⊷';
            spanAvant.className = 'action';
            spanAvant.onclick = function() { insererElement(this, 'avant'); };

            const spanSupprimer = document.createElement('span');
            spanSupprimer.textContent = '⋫';
            spanSupprimer.className = 'supprimer';
            spanSupprimer.onclick = function() { supprimerElement(this); };

            const spanApres = document.createElement('span');
            spanApres.textContent = '⊶';
            spanApres.className = 'action';
            spanApres.onclick = function() { insererElement(this, 'apres'); };

            nouvelElement.appendChild(spanAvant);
            nouvelElement.appendChild(spanSupprimer);
            nouvelElement.appendChild(spanApres);

            if (position === 'avant') {

                parentLi.parentElement.insertBefore(nouvelElement, parentLi);
            } else if (position === 'apres') {
                const prochainElement = parentLi.nextElementSibling;
                if (prochainElement) {
                    parentLi.parentElement.insertBefore(nouvelElement, prochainElement);
                } else {
                    parentLi.parentElement.appendChild(nouvelElement);
                }
            }
        }
    }

    function supprimerElement(span) {
        const parentLi = span.parentElement;
        if (parentLi) {
            parentLi.parentElement.removeChild(parentLi);
        }
    }

    // fin les la fonction de ajouter des elements et la fonction de suppremer 
    // debut de la fonction d'afficher les elements de liste 
    function afficherListe(span) {
        const parentLi = span.parentElement;
        const ul = parentLi.querySelector('ul');
        // const ol = parentLi.querySelector('ol');  // il doit rechercher sur cette fonction 
        
       
        const spansAffiche = parentLi.querySelectorAll('.affiche');
        const spansFerme = parentLi.querySelectorAll('.ferme');

        if (ul) {
            if (ul.style.display === 'none' || ul.style.display === ''){
                ul.style.display = 'block';
                spansAffiche.forEach(span => span.style.display = 'none');
                spansFerme.forEach(span => span.style.display = 'inline');
            }
         
            else {
                ul.style.display = 'none';
                spansAffiche.forEach(span => span.style.display = 'inline');
                spansFerme.forEach(span => span.style.display = 'none');
            }
        }
    }

    // fin de la fonction d'afficher les elements de liste 
