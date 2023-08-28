// RECUPERER L'ACTIVITE //
function obtenirActivite() {
  return document.getElementById('activite').value;
}

style = `

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
  const elemLanguages = document.querySelectorAll('input[name="language"]:checked');
  const languages = [...elemLanguages].map((elem) => elem.value);

  const durationCheckboxes = document.querySelectorAll('input[name="duration"]:checked');
  const selectedDurations = [...durationCheckboxes].map((checkbox) => checkbox.value);

  search(query, languages)
    .then(filter('price', minPrice, maxPrice))
    .then(filter('rating', selectedRating))
    .then(filter('duration', selectedDurations))
    .then(filter('timeframe', null))
    .then(afficher);
}

// Envoyer la requête
async function search(query = '', languages = [], page) {
  page = page || 1; // Mettez 1 comme valeur par défaut pour la première page
  let url =
    'https://travelers-api.getyourguide.com/search/v2/search?' +
    (query === '' ? '' : `q=${query}&`) +
    (languages.length > 0 ? `languages=${languages.join('%7C')}&` : '') +
    'searchcontext=TRIP_ITEM_SORT_LOCATIONS&size=15' + 
    (page !== null ? `&offset=${15 * (page - 1)}` : ''); // Ajustez l'offset pour la pagination
  let headers = {
    'content-type': 'application/json',
    'accept-currency': 'EUR',
    'accept-language': 'fr-FR',
  };

  return await genericSearch(url, headers)
    .then((response) => response.json())
    .then((json) => {
      console.dir(json);
return json.items;
      // return {
      //   items: json.items,
      //   totalPages: Math.ceil(json.total / 15), // Calcul du nombre total de pages
      // };
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

 

function pathFromUrl(url) {
  var parser = document.createElement('a');
  parser.href = url;
  return 'https://www.getyourguide.com' + parser.pathname;
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

function languageFilter(...params) {
  return (activity) => {
    return true;
  };
}

// Filter by duration
function durationFilter(selectedDurations) {
  return (activity) => {
    if (selectedDurations.length === 0) {
      return true;
    }

    if (activity.attributes && activity.attributes.length > 0) {
      const durationAttribute = activity.attributes.find((attr) => attr.type === 'duration');

      if (
        durationAttribute &&
        selectedDurations.some((selectedDuration) =>
          durationAttribute.label.includes(selectedDuration)
        )
      ) {
        return true;
      }
    }

    return false;
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
    container.innerHTML += `
      <tf-search-activity-card>
        <tf-search-card-header-image src="${
          activity.photos[0].urls[2].url
        }" slot="image"></tf-search-card-header-image>
        <span slot="title">${
          activity.title.length > 26 ? activity.title.substring(0, 26) + '...' : activity.title
        }</span>
        <span slot="subtitle">${
          activity.primaryLocation.name.length > 28
            ? activity.primaryLocation.name.substring(0, 28) + '...'
            : activity.primaryLocation.name
        }</span>
        <tf-budget level="${assignLevel(activity.price.basePrice)}" slot="budget"></tf-budget>
        <tf-chip type="activity" active="" slot="chip">${activity.activityType.label}</tf-chip>
        <p slot="description">
        ${activity.abstract.substring(0, 150)} 
        <span class="read">Read more...</span>
        </p>
        <tf-button variant="secondary" text="" active=""
        onclick="window.open('${pathFromUrl(activity.url)}','_blank')"
        slot="actions">Book Now</tf-button>
      </tf-search-activity-card>
      `;
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

////////////////////////////////////////

// Supposons que vous ayez récupéré les activités de l'API dans un tableau appelé 'activites'
const activites = [
  {
    nom: 'Activité 1',
    attribute: [
      {
        label: '3 heures',
        metadata: {},
        type: 'duration',
      },
    ],
  },
  {
    nom: 'Activité 2',
    attribute: [
      {
        label: 'valide',
        metadata: {},
        type: 'validity',
      },
    ],
  },
  {
    nom: 'Activité 3',
    attribute: [
      {
        label: '2 heures',
        metadata: {},
        type: 'duration',
      },
    ],
  },
  {
    nom: 'Activité 4',
    attribute: [
      {
        label: 'valide',
        metadata: {},
        type: 'validity',
      },
    ],
  },
  {
    nom: 'Activité 5',
    attribute: [
      {
        label: '12 heures',
        metadata: {},
        type: 'duration',
      },
    ],
  },
  {
    nom: 'Activité 6',
    attribute: [
      {
        label: 'valide',
        metadata: {},
        type: 'validity',
      },
    ],
  },
  {
    nom: 'Activité 7',
    attribute: [
      {
        label: '20 heures',
        metadata: {},
        type: 'duration',
      },
    ],
  },
];

// Filtrer les activités qui ont l'attribut 'duration'
const activitesAvecDuration = activites.filter((activite) => {
  // Vérifier si l'activité a l'attribut 'attribute' et qu'il y a au moins un élément dans 'attribute'
  if (activite.attribute && activite.attribute.length > 0) {
    // Trouver l'élément avec 'type' égal à 'duration'
    const durationAttribute = activite.attribute.find((attr) => attr.type === 'duration');

    // Vérifier si un élément 'duration' a été trouvé
    if (durationAttribute) {
      // Récupérer la durée en heures depuis 'label' (assumant que c'est sous forme de chaîne de caractères "X heures")
      const dureeEnHeures = parseFloat(durationAttribute.label);
      if (!isNaN(dureeEnHeures) && dureeEnHeures > 0) {
        return true; // La durée est valide, l'activité est incluse dans le résultat
      }
    }
  }
  return false; // L'activité n'a pas de durée valide ou n'a pas l'attribut 'duration'
});

// Maintenant, 'activitesAvecDuration' contient uniquement les activités avec l'attribut 'duration' valide
console.log(activitesAvecDuration);


