// =========================================================================
// ============ fonction swap la deux partie    ============================
// =========================================================================
function swapDivs() {
  var container = document.getElementById('container');

  container.style.flexDirection = container.style.flexDirection === 'row' ? 'row-reverse' : 'row';

}







// ===========================================================================================
// ==  les object de dectionaire de term informatique et leur fonction pour afficher  ========
// ============================================================================================ 

var dict = {
  "HTML" : ["HTML", "L'HyperText Markup Language, HTML, désigne un type de langage informatique descriptif. Il s'agit plus précisément d'un format de données .... ", "./image/html.png"],
  "CSS": [ "CSS", "Les feuilles de style en cascade,forment un langage informatique qui décrit la présentation des documents HTML ", "./image/CSS.jpeg"],
  "JS": ["JavaScript", "JavaScript est un langage de programmation qui permet d'implémenter des mécanismes complexes sur une page web ", "./image/js.png"],
  "PHP": ["PHP", " is a server scripting language, and a powerful tool for making dynamic and interactive Web pages ", "./image/PHP.png"],
  "Developpement web": ["Developpement web","le développement web fait référence au processus d’écriture d’un site ou d’une page web dans un langage technique", "./image/web.jpeg"],
  "cote client": ["côté client", "Le côté serveur est responsable de la logique métier, du traitement des données, de l'accès à la base de données ... ", "./image/client.jpeg"],
  "Reseaux informatique": ["Reseaux informatique", "la mise en relation d’au moins deux systèmes informatiques au moyen d’un câble ou sans fil","./image/reseau.webp"],
  "côté serveur": ["côté serveur", "Les navigateurs web communiquent avec les serveurs web en utilisant le protocole HTTP (HyperText Transfer Protocol). ", "./image/serveur.png"],
  "BDD": ["Base de donnee", "Les bases de données informatiques sont utilisées pour stocker, organiser et analyser les données." , "./image/BDD.png"],
  "conception" : ["conception Informatique" ,"Le fait de concevoir un système en allant du général au particulier, en passant par des « étapes d’affinage »","./image/cpt.jpg"],
};










// ===============================================================================
// ================   debut de la fonction ======================================
// ================   declaration    =============================================
// ================================================================================ 
var langagesListe = document.getElementById('list_principale');
// var listeElements = parentNode.querySelectorAll(a) ; 
var informationsLangageDiv = document.getElementById('informationsLangage');
var titleElement = document.getElementById('title');
var paragraphElement = document.getElementById('paragraph');
var imageElement = document.getElementById('image');


langagesListe.addEventListener('click', function (event) {
  var flux = document.getElementById('flux').hidden = false ; 
    var module = document.getElementById('partie_right').hidden = false ;  
  var target = event.target;
  var langage = target.getAttribute('data-langage');

  if (langage) {
    var informations = dict[langage];

    if (informations) {
      titleElement.textContent = informations[0];
      paragraphElement.textContent = informations[1];
      imageElement.src = informations[2];
      imageElement.alt = langage;
      //   appel la fonction pour calculer la mots de paragraph 
  compterMots() + 1 ;
    } else {
      module = document.getElementById('partie_right').hidden = true ; 
      flux = document.getElementById('flux').hidden = true ;  
      alert(" les Information non trouvée pour " + langage);
    }
  }

});



// =========================================================================
// ============  fonction compter les mots des paragraphe des objets    ====
// =========================================================================
   
     function compterMots() {
        // Récupérer le paragraphe par son ID
        var paragraphe = document.getElementById("paragraph").textContent;

        // Utiliser la méthode split pour diviser le texte en mots
        var mots = paragraphe.split(' ');
        
        // Afficher le nombre de mots dans l'élément avec l'ID "compter"
        document.getElementById("compter").textContent =  mots.length ;
    }
    





// =========================================================================
// ============  fonction supremmer les elements   =========================
// =========================================================================
function supprimerElement(span) {
  const parentLi = span.parentElement;
  if (parentLi) {
      parentLi.parentElement.removeChild(parentLi);
  }
}



// =========================================================================
// ============  fonction insert les elements avant apres  =================
// =========================================================================
function insererElement(span, position) {
  const parentLi = span.parentElement;
  const saisie = prompt('Entrez un nouvel élément :');

  if (saisie !== null && saisie.trim() !== '') {
      const nouvelElement = document.createElement('li');

      nouvelElement.textContent = saisie;

      // Ajout de l'attribut data-langage
      nouvelElement.setAttribute('data-langage', saisie);

// 

// const spanAffiche = document.createElement('span');

// spanAffiche.textContent= '⧁';
// spanAffiche.style.insertBefore = '⧁'
// spanAffiche.className = 'affiche';
// spanAffiche.onclick = function() { afficherlisteElements(this, 'affiche'); };

// 

      const spanAvant = document.createElement('span');
      spanAvant.textContent = '⊷';
      spanAvant.className = 'avant';
      spanAvant.onclick = function() { insererElement(this, 'avant'); };

      const spanSupprimer = document.createElement('span');
      
      spanSupprimer.textContent = '⋫';
      spanSupprimer.className = 'supprimer';
      spanSupprimer.onclick = function() { supprimerElement(this); };

      const spanApres = document.createElement('span');
      spanApres.textContent = '⊶';
      spanApres.className = 'apres';
      spanApres.onclick = function() { insererElement(this, 'apres'); };
      
      // nouvelElement.appendChild(spansAffiche);
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



// =========================================================================
// ============  fonction afficher les sous liste    =======================
// =========================================================================


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
    




 //===================================================================== 
// ==== Fonction pour calculer les nombres de categorie   =================
// =====================================================================
function calculerListesParents(ulElement) {
  var nombreListesParents = ulElement.parentNode.children.length;
  return nombreListesParents;
}
//===================================================================== 
// ==== Fonction pour afficher les nombres de categorie  ================
// =====================================================================

function afficherNombreListesParents(ulElement, spanId) {
  var nombreListesParents = calculerListesParents(ulElement);
  document.getElementById(spanId).textContent = nombreListesParents;
}

//===================================================================== 
// ==== Fonction pour calculer la moyenne  de categorie  ===============
// =====================================================================
function calculerMoyenneListesParents() {
  var parentElements = document.querySelectorAll('ul > li');
  var totalListesParents = 0;

  parentElements.forEach(function (parentElement) {
      totalListesParents += calculerListesParents(parentElement);
  });

  var moyenneListesParents = totalListesParents / parentElements.length;
  return moyenneListesParents;
}

// Fonction pour afficher la moyenne du nombre de categorie  de parents dans la balise span
function afficherMoyenneListesParents() {
  var moyenneListesParents = calculerMoyenneListesParents();
  document.getElementById('counter_moyenne_categrie').textContent = moyenneListesParents.toFixed(2);
}












// Fonction pour traiter les événements de clic sur les éléments de la liste
function handleListClick(event) {
  var target = event.target;

  // Lorsque vous cliquez sur un élément de la liste
  if (target.tagName === 'LI') {
      // Ajouter un événement personnalisé 'listClicked' avec des détails supplémentaires
      var listClickedEvent = new CustomEvent('listClicked', {
          bubbles: true,
          detail: {
              isParent: target.childElementCount > 0 // Vérifier s'il s'agit d'un parent
          }
      });

      // Dispatch de l'événement personnalisé
      target.dispatchEvent(listClickedEvent);

      // Empêcher la propagation de l'événement de clic au parent
      event.stopPropagation();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var parentElements = document.querySelectorAll('ul > li');

  parentElements.forEach(function (parentElement) {
      // Ajouter l'événement de clic à chaque élément parent
      parentElement.addEventListener('listClicked', function (event) {
          var isParent = event.detail.isParent;

          // Lorsque vous cliquez sur un élément parent
          if (isParent) {
              afficherNombreListesParents(parentElement, 'counter_categrie');
              afficherMoyenneListesParents();
          } else {
              // Lorsque vous cliquez sur un élément fils
              afficherNombreListesParents(parentElement.parentNode, 'counter_categrie');
              afficherMoyenneListesParents();
          }
      });
  });

  // Ajouter l'événement de clic à la liste principale
  document.querySelector('ul').addEventListener('click', handleListClick);

});