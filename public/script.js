// RECUPERER L'ACTIVITE //
function obtenirActivite() {
  return document.getElementById('activite').value;
}

style = `
.read {
  /* color: var(--tf-sys-read-more); */
  color: #e76b2d;
  text-decoration: underline;
  font-weight: 700;font-family: nunito;
}
`;

// Exécuter la recherche
function searchElements() {
  const searchInput = document.querySelector('#search-activities');
  const searchText = searchInput.value.toLowerCase();

  loadElements(searchText);
}

// Charger les éléments
function loadElements(query = '') {
  const minPrice = document.querySelector('#min-price');
  const maxPrice = document.querySelector('#max-price');
  const selectedRating = document.querySelector('input[name="rating-option"]:checked');

  search(query)
    .then(filter('price', minPrice, maxPrice))
    .then(filter('rating', selectedRating))
    // .then(filter('language', null))
    .then(filter('duration', null))
    .then(filter('timeframe', null))
    .then(afficher);
}

// Envoyer la requête
async function search(query = '') {
  let url =
    'https://travelers-api.getyourguide.com/search/v2/search?' +
    (query === '' ? '' : `q=${query}&`) +
    'searchcontext=TRIP_ITEM_SORT_LOCATIONS&size=15';
  //?q=Paris&searchcontext=TRIP_ITEM_SORT_LOCATIONS&size=100&tcId=27`;
  let headers = {
    'content-type': 'application/json',
    'accept-currency': 'EUR',
    'accept-language': 'fr-FR',
  };

  return await genericSearch(url, headers)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.items);
      return json.items;
    });
}

async function genericSearch(url, headers) {
  return await fetch(url, {
    headers,
  });
}

// Main filter monad
function filter(type, ...params) {
  return (activities) => {
    switch (type) {
      case 'price':
        return activities.filter(priceFilter(...params));
      case 'rating':
        return activities.filter(ratingFilter(...params));
      case 'language':
        return activities.filter(languageFilter(...params));
      case 'duration':
        return activities.filter(durationFilter(...params));
      case 'timeframe':
        return activities.filter(timeframeFilter(...params));
      default:
        return activities;
    }
  };
}

// Filter by price
function priceFilter(...params) {
  const minPrice = parseFloat(params[0].value);
  const maxPrice = parseFloat(params[1].value);

  return (activity) => {
    if (isNaN(minPrice) && isNaN(maxPrice)) return true;
    if (isNaN(minPrice)) return activity.price.basePrice <= maxPrice;
    if (isNaN(maxPrice)) return activity.price.basePrice >= minPrice;

    return isBetween(activity.price.basePrice, minPrice, maxPrice);
  };
}

// Filter by rating
function ratingFilter(...params) {
  return (activity) => {
    if (params.length === 0 || params[0] === null) {
      return true;
    }
    const selectedRating = parseFloat(params[0].value);
    return activity.reviewStatistics.rating >= selectedRating;
  };
}

// Fonction pour fermer la carte de filtre
function closeFilterModal(target) {
  console.log(target);
  //"event.stopPropagation()"
  var filterCard = document.getElementById('filterOptions');
  filterCard.style.display = 'none';
}

/**
 * Filter by language
 * To fetch the activity languages, use the following API:
 * https://travelers-api.getyourguide.com/search/v2/search
 * ?languages=<language>
 * &locations=<activity.primaryLocation.id>
 * &p=1
 * &searchContext=LOCATIONS
 * &size=16
 * &sortBy=popularity
 *
 * @param  {...string} languages
 * @returns {(activity: activity) => boolean}
 */

// function languageFilter(...languages) {
//   return (activity) => {
//     const activityLanguages = languages?.map((language) => language.code) ?? [];
//     return activityLanguages((lang) => activity.includes(lang));
//   };
// }

// async function searchLanguages(activity, selectedLanguage) {
//   const url = `https://travelers-api.getyourguide.com/search/v2/search?languages=${
//     selectedLanguage
//   }&locations=${
//     activity.primaryLocation.id
//   }&p=1&searchContext=LOCATIONS&size=16&sortBy=popularity`;
//   console.log(url);
//   const headers = {};

//   try {
//     const response = await genericSearch(url, headers);
//     return response.languages.map((language) => language.code);
//   } catch (error) {
//     console.error('Error searching languages:', error);
//     return [];
//   }
// }

// Filter by duration
function durationFilter(...params) {
  return (activity) => {
    return true;
  };
}

// Filter by timeframe
function timeframeFilter(...params) {
  return (activity) => {
    return true;
  };
}

function isBetween(value, min, max) {
  return value >= min && value <= max;
}

function toggleCard(cardId) {
  var card = document.getElementById(cardId);
  var allCards = document.querySelectorAll(
    '.Timeframe-card, .language-card, .price-card, .duration-card, .filter-card'
  );

  for (var i = 0; i < allCards.length; i++) {
    if (allCards[i].id === cardId) {
      if (card.style.display === 'none') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    } else {
      allCards[i].style.display = 'none';
    }
  }
}

function toggleFilterOptions() {
  var filterOptions = document.getElementById('filterOptions');
  if (filterOptions.style.display === 'none') {
    filterOptions.style.display = 'block';
  } else {
    filterOptions.style.display = 'none';
  }
}

function toggleDurationCard() {
  var durationCard = document.getElementById('durationCard');
  if (durationCard.style.display === 'none') {
    durationCard.style.display = 'block';
  } else {
    durationCard.style.display = 'none';
  }
}

function toggleLanguageCard() {
  var languageCard = document.getElementById('languageCard');
  if (languageCard.style.display === 'none') {
    languageCard.style.display = 'block';
  } else {
    languageCard.style.display = 'none';
  }
}

function toggleFilterCard() {
  var priceCard = document.getElementById('priceCard');
  if (priceCard.style.display === 'none') {
    priceCard.style.display = 'block';
  } else {
    priceCard.style.display = 'none';
  }
}

function toggleCurrencyDropdown() {
  var currencyDropdown = document.getElementById('currencyDropdown');
  if (currencyDropdown.style.display === 'none') {
    currencyDropdown.style.display = 'inline-block';
  } else {
    currencyDropdown.style.display = 'none';
  }
}

// Afficher les éléments
function afficher(activities) {
  console.log(activities);
  let container = document.querySelector('#container');
  container.innerHTML = '';
  activities.forEach((activity) => {
    const activityElement = document.createElement('div');
    activityElement.innerHTML = `
        <style>
          ${style}
        </style>
        <section class="container">
          <tf-search-activity-card title="${
            activity.title.length > 26 ? activity.title.substring(0, 26) + '...' : activity.title
          }" 
            subtitle="${
              activity.primaryLocation.name.length > 28
                ? activity.primaryLocation.name.substring(0, 28) + '...'
                : activity.primaryLocation.name
            }">

           <tf-search-card-header-image slot="image" src="${
             activity.photos[0].urls[2].url
           }" class="header-img">
             <tf-search-badge class="badge no"></tf-search-badge>
              <tf-search-favorite class="favorite" enabled=""></tf-search-favorite>
            </tf-search-card-header-image>
            
            <tf-search-budget level="${assignLevel(
              activity.price.basePrice
            )}" slot="budget"></tf-search-budget>
            <tf-search-chip type="activity" slot="chip">Churches</tf-search-chip>
            <tf-search-chip type="poi" slot="chip">History</tf-search-chip>
            <tf-search-chip type="activity" slot="chip">${activity.reviewStatistics.rating.toFixed(
              1
            )}</tf-search-chip>
            <p slot="description">
            ${
              activity.abstract.length > 205
                ? activity.abstract.substring(0, 205) + ' <span class="read"> Read more...</span>'
                : activity.abstract
            }
            
            </p>
            <tf-search-button variant="primary" slot="actions">Book Now</tf-search-button>
          </tf-search-activity-card>
        </section>
      `;
    container.appendChild(activityElement);
  });
}

// Assign Level
function assignLevel(price) {
  if (price < 10) {
    return 1;
  } else if (price < 50) {
    return 2;
  } else if (price < 200) {
    return 3;
  } else if (price < 500) {
    return 4;
  } else {
    return 5;
  }
}

// SEARCHBAR  //

const searchButton = document.querySelector('#button-search');

function isBetween(x, a, b) {
  return x >= Math.min(a, b) && x <= Math.max(a, b);
}

// function funcfiltre(activity) {
//   return activity.price > '10';
// }

// RATING //

function clearSelection() {
  const radioButtons = document.querySelectorAll('input[name="option"]');
  radioButtons.forEach((radioButton) => (radioButton.checked = false));

  loadElements();
}
