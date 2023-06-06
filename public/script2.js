// RECUPERER L'ACTIVITE //

function obtenirActivite() {
  return document.getElementById('activite').value;
}

style = `
.container {
  position: relative;
  width: 740px;
  height: 378px;
  display: inline-block;
  /* Background/Main */

  background: #ffffff;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 20px;
}

.header-img {
  position: absolute;
  border-radius: 15px 15px 0 0;
  

  object-fit: cover;
  max-width: 100%;  
  max-height: 100%;
  width: 550.5rem;
  height: 12rem; 
}

h2 {
  width: 35rem;
  height: 25px;
  position: relative;
  float: left;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  left: 20px;
top: 50%;

  /* Main/Main */
  /* color: var(--tf-main-main); */
  color: #012e4a;
  /* Inside auto layout */
  font-family: nunito;
  flex: none;
  order: 0;
  flex-grow: 1;
}

.subtitle {
  float: left;
  width: 220px;
  height: 14px;
  margin-top: 11rem;
  margin-left: 1.35rem;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  align-items: center;

  /* Inside auto layout */
  font-family: nunito;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.level {
  /* color: var(--tf-sys-light-secondary); */
  color: #ff805e;
  font-weight: bold;

  width: 45px;
  height: 17px;
  float: left;
  position: relative;
  top: 10.9rem;
  right: 10.1rem;
  font-style: normal;

  font-size: 15px;
  line-height: 110%;
  /* identical to box height, or 17px */

  display: flex;
  align-items: center;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.budget {
  display: block;
  color: #ffdacf;
  font-weight: bold;
  margin-left: 0.5rem;
  white-space: nowrap
}

.type {
  float: left;
  position: relative;
  right: 4rem;
  top: 10.8rem;
  font-weight: bold;
  
  padding-top: 0.25rem;
  line-height: 0.75rem;
  font-size: 0.625rem;font-family: nunito;
  color: #012e4a;
}

.activity {
  background-color: #4ca7de;
  color:  #012e4a;
  display: inline-block;
  width: 4.2rem;
  margin: auto;
  justify-content: center;
  height: 0.9rem;
  text-align: center;font-family: nunito;
}

.activity1 {
  background-color: #4ca7de;
  color:  #012e4a;
  display: inline-block;
  width: 4.2rem;
  margin: auto;
  justify-content: center;
  height: 1.65rem;
  text-align: center;font-family: nunito;
}

.activity2 {
  background-color: #4ca7de;
  color:  #012e4a;
  display: inline-block;
  width: 4.2rem;
  margin: auto;
  justify-content: center;
  height: 2.4rem;
  text-align: center;font-family: nunito;
}

.description {
  position: relative;
  width: 40rem;
  height: 109px;
  right: 5rem;
  top: rem;
  /* color: var(--tf-main-main); */
  color: #012e4a;
  margin-left: 100px;
  float: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;font-family: nunito;
}

.actions {
  bottom: 4rem;
  position: relative;
  float: right;
  font-weight: bold;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;  
  
  background-color: #00AAE3;
  width: 45rem;
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
  let url = ` https://travelers-api.getyourguide.com/search/v2/search?q=Paris&searchcontext=TRIP_ITEM_SORT_LOCATIONS&size=1&tcId=27`;

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
  const activityElement = document.createElement('div');
  activityElement.innerHTML = `
        <style>
          ${style}
        </style>
        <section class="container">
        
          <img  src="${activities.items[0].photos[0].urls[1].url}" class="header-img">
         <h2>${activities.items[0].title}</h2>
         <p class="subtitle ">
         ${activities.items[0].primaryLocation.name}
          </p>
          <div class="level">
          ${activities.items[0].price.formattedBasePrice}<span class="budget">${
    activities.items[0].price.priceCategoryLabel
  }</span>
          </div>
          <div class="type">
            <div class="activity">
            ${activities.items[0].categoryLabel}
            </div>
            <div class="activity">
            ${activities.items[0].attributes[0].label
            }
            </div>
            <div class="activity1">
            ${activities.items[0].attributes[1].label}
            </div>
            <div class="activity1">
            ${activities.items[0].attributes[2].label}
            </div>
            <div class="activity2">
            ${activities.items[0].availability.message}
            </div>
          </div>
          <p class="description">${activities.items[0].abstract.substring(0, 205)} 
         <span class="read"> </span></p> 

          <div class="actions">
            Book now 
          </div>
        </section>
      `;
  container.appendChild(activityElement);
}
