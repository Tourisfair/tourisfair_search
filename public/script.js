// RECUPERER L'ACTIVITE //

function obtenirActivite() {
  return document.getElementById('activite').value;
}

// ENVOYER UNE REQUETE //

function search() {
  let url = `https://api.tourisfair.de/api/v1/activities?page=1&limit=10`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => json.data)
    .then(afficher);
}

//AFFICHER LES RESULTATS //
function afficher(activities) {
  console.log(activities);
  const container = document.querySelector('.container');
  container.innerHTML = '';
  activities.forEach((activity) => {
    const activityDiv = document.createElement('div');
    activityDiv.innerHTML = html`
      <article class="carte">
        <div class="image">
          <img src="${activity.photos[0].urls}" alt="" />
        </div>
        <div class="detail">
          <i class="fa-solid fa-xmark"></i>
          <h2 class="titre">${activity.title.substring(0, 30)}...</h2>
          <p class="adresse">
            ${activity.meetingPoints[0] ? activity.meetingPoints[0]?.address : 'Pickup'}
          </p>
          <p class="budget">${activity.price.currencySymbol}</p>
          <p class="categories">
            <span class="chip poi">Churches</span>
            <span class="chip categorie">History</span>
          </p>
          <p class="abstract">${activity.abstract.substring(0, 255)}</p>
          <div class="actions">
            <tf-button> Book now </tf-button>
          </div>
        </div>
      </article>
    `;

    // activityDiv.classList.add('activity');

    // const url = document.createElement('img');
    // url.textContent = activity.photos.urls;
    // activityDiv.appendChild(url);

    // const title = document.createElement('h2');
    // title.textContent = activity.title.substring(0, 30) + '...';
    // activityDiv.appendChild(title);

    // const adress = document.createElement('div');
    // adress.textContent = activity.adress;
    // adress.textContent = "5 rue de l'adresse, 98598";
    // adress.classList.add('address');
    // activityDiv.appendChild(adress);

    // const cost = document.createElement('div');
    // cost.textContent = activity.cost;
    // cost.textContent = "€€€€€";
    // cost.classList.add('cost');
    // activityDiv.appendChild(cost);

    // const chip = document.createElement('div');
    // chip.textContent = activity.chip;
    // chip.textContent = "Churches";
    // chip.classList.add('chip1');
    // activityDiv.appendChild(chip);

    // const chip2 = document.createElement('div');
    // chip2.textContent = activity.chip;
    // chip2.textContent = "History";
    // chip2.classList.add('chip2');
    // activityDiv.appendChild(chip2);

    // const abstractElem = document.createElement('p');
    // abstractElem.textContent = activity.abstract.substring(0, 255);
    // abstractElem.classList.add('activity-abstract');
    // activityDiv.appendChild(abstractElem);

    // const btn = document.createElement('button');
    // btn.textContent = activity.btn;
    // btn.textContent = "Book Now";
    // btn.classList.add('btn');
    // activityDiv.appendChild(btn);
    container.appendChild(activityDiv);
  });
}
