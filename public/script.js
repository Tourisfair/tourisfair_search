// RECUPERER L'ACTIVITE //

function obtenirActivite() {
  return document.getElementById('activite').value;
}

style = `
.container {
  position: relative;
  width: 440px;
  height: 278px;
 
  /* Background/Main */

  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 20px;
}

.header-img {
  position: absolute;
  border-radius: 15px 0 0 15px;
 

  object-fit: cover;
  max-width: 100%;  
  max-height: 100%;
  width: 11.5rem;
  height: 20rem; 
}

h2 {
  width: 255px;
  height: 25px;
  position: absolute;
  margin-left: 12.2rem;
  font-size: 18px;
  line-height: 25px;
 

  /* color: var(--tf-main-main); */
  color: #012e4a;

  font-family: nunito;

}

.subtitle {
  margin-left: 12.2rem;
  width: 220px;
  height: 14px;
  top: 1.8rem;
  position: absolute;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  font-family: nunito;
 
}

.level {
  /* color: var(--tf-sys-light-secondary); */
  color: #ff805e;
  font-weight: bold;
  width: 45px;
  height: 17px;
  margin-left: 12.2rem;
  position: relative;
  top: 3.55rem;
  font-size: 15px;
  line-height: 110%;
  align-items: center;
}
.budget {
  color: #ffdacf;
  font-weight: bold;
  white-space: nowrap

}

.type {
  
  position: relative;
  left: 0.6rem;
  top: 3.5rem;
  font-weight: bold;
  
  padding-top: 0.25rem;
  line-height: 0.75rem;
  font-size: 0.625rem;font-family: nunito;
  color: #012e4a;
}

.activity {
  background-color: #4ca7de;
  color:  #012e4a;
  width: 4.2rem;
  margin: auto;
  justify-content: center;
  height: 0.9rem;
  text-align: center;font-family: nunito;
}
.rating1 {
  background-color: #4ca7de;
  color:  #012e4a;
  width: 4.2rem;
  margin: auto;
  justify-content: center;
  height: 0.9rem;
  text-align: center;font-family: nunito;
}

.description {
  position: relative;
  width: 230px;
  height: 109px;
  top: 3.2rem;
  /* color: var(--tf-main-main); */
  color: #012e4a;
  margin-left: 12.2rem;
  
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;font-family: nunito;
}

.actions {
  top: 4rem;
  position: relative;
  float: right;
  font-weight: bold;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;  
  
  background-color: #00AAE3;
  width: 114px;
  height: 34px;
  border-radius: 30px;
  color:  #250127;
  padding: 0.1rem 0.1rem;
  font-family: nunito;
  margin-right: 10px;
 
}

.actions:hover {
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}
.read {
  /* color: var(--tf-sys-read-more); */
  color: #e76b2d;
  text-decoration: underline;
  font-weight: 700;font-family: nunito;
}

`;
// ENVOYER UNE REQUETE //

function search() {
  let url = ` https://travelers-api.getyourguide.com/search/v2/search?q=Paris&searchcontext=TRIP_ITEM_SORT_LOCATIONS&size=100&tcId=27`;

  fetch(url, {
    headers: {
      'content-type': 'application/json',
      'accept-currency': 'EUR',
      'accept-language': 'fr-FR',
    },
  })
    .then((response) => response.json())
    // .then((json) => json.data)
    .then(afficher);
}

//AFFICHER LES RESULTATS //
function afficher(activities) {
  console.log(activities);
  activities.items.forEach((activity) => {
    const activityElement = document.createElement('div');
    activityElement.innerHTML = `
        <style>
          ${style}
        </style>
        <section class="container">
        
          <img  src="${activity.photos[0].urls[2].url}" class="header-img">
         <h2>${activity.title.substring(0, 27)}...</h2>
         <p class="subtitle ">
         ${activity.primaryLocation.name}
          </p>
          <div class="level">
          ${activity.price.formattedBasePrice}
          </div>
          <div class="type">
            <div class="activity">
            ${activity.categoryLabel}
            </div>
            <div class="rating1">
          ${activity.reviewStatistics.rating.toFixed(1)}
          </div>
          </div>
          <p class="description">${activity.abstract.substring(
            0,
            205
          )} <a class="read" href="test2.html" target="_blank"> Read more...</a></p>

          <div class="actions">
            Book now 
          </div>
        </section>
      `;
    container.appendChild(activityElement);
  });

}
// FILTER //
// Variables globales pour stocker les données d'activité
// Filtrer les activités en fonction des critères sélectionnés
function filterActivities() {
  var minPrice = parseFloat(document.getElementById('min-price').value);
  var maxPrice = parseFloat(document.getElementById('max-price').value);

  // Sélectionner tous les éléments d'activité sur la page
  var cards = document.querySelectorAll('.container');

  // Parcourir les éléments d'activité et les filtrer en fonction des critères de prix
  for (var i = 0; i < cards.length; i++) {
    var activityElement = cards[i];
    var priceElement = activityElement.querySelector('.level'); // Modifier le sélecteur pour correspondre à votre structure HTML
    var activityPrice = parseFloat(priceElement);

    if (isNaN(activityPrice) || (minPrice && activityPrice < minPrice) || (maxPrice && activityPrice > maxPrice)) {
      activityElement.style.display = 'none';
    } else {
      activityElement.style.display = 'block';
    }
  }
}



// SEARCHBAR  //

const searchButton = document.querySelector('#button-search');



function filterElements() {
  const searchInput = document.querySelector('#search-activities');
  const searchText = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll('.container');

  for (let i = 0; i < cards.length; i++) {
    const cardText = cards[i].textContent.toLowerCase();

    if (cardText.includes(searchText)) {
      cards[i].style.display = 'block' ; 

      
    } else {
      cards[i].style.display = 'none';
    }
  }
}
// RATING //

// Fonction pour effacer la sélection du filtre
function clearSelection() {
  // Désélectionner tous les boutons radio
  var radioButtons = document.querySelectorAll('input[name="option"]');
  for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
  }
  const cards1 = document.querySelectorAll('.container');
  // Afficher toutes les notes
  var ratings = document.getElementsByClassName('rating1');
  for (var i = 0; i < ratings.length; i++) {
    cards1[i].style.display  = 'block';
  }
}

// Fonction pour filtrer les notes
function filterRatings() {
  // Récupérer toutes les notes affichées
  var ratings = document.getElementsByClassName('rating1');
  const cards1 = document.querySelectorAll('.container');
  // Récupérer la valeur sélectionnée du filtre
  var selectedValue = document.querySelector('input[name="option"]:checked').value;

  // Parcourir les notes et les masquer si elles ne correspondent pas au filtre sélectionné
  for (var i = 0; i < ratings.length; i++) {
    var rating = parseFloat(ratings[i].textContent);
    
    if (selectedValue === "3.0+" && rating < 3.0) {
      cards1[i].style.display  = 'none';
    } else if (selectedValue === "4.5+" && rating < 4.5) {
      cards1[i].style.display  = 'none';
    } else {
      ratings[i].style.display  = 'block';
    }
  }
}