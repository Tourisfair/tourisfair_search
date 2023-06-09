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

.badge {
  position: relative;
  left: 30px;
}
.favorite {
  position: relative;
  top: 175px;
  left: 40px;
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
  // color: var(--tf-sys-light-secondary);
  color: #ff805e;
  font-weight: bold;
  width: 4rem;
  height: 17px;
  margin-left: 12.2rem;
  position: absolute;
  top: 3.55rem;
  font-size: 15px;
 
}
.budget {
  color: #ffdacf;
  position: relative;
  font-weight: bold;
  top: 3.55rem;
  left: 14.5rem;
}

.type {
  margin-left: 15.2rem;
  position: absolute;
  
  top: 5rem;
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
  top: 7.5rem;
  /* color: var(--tf-main-main); */
  color: #012e4a;
  margin-left: 12.2rem;
  
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;font-family: nunito;
}

.actions {
  top: 7.5rem;
  position: relative;
  float: right;
  font-weight: bold;

  font-size: 14px;
  justify-content: center;
  align-items: center;  
  
  background-color: #00AAE3;

  border-radius: 30px;
  color:  #250127;

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

<div class="header-img">
            <tf-card-header-image  src="${
              activity.photos[0].urls[2].url
            }" class="header-img style="border-radius: 15px 0 0 15px;""></tf-card-header-image>
            <tf-badge class="badge no"></tf-badge>
            <tf-favorite class="favorite" enabled=""></tf-favorite>
          </div>
          <h2>${activity.title.substring(0, 26)}...</h2>
          <p class="subtitle ">
            ${activity.primaryLocation.name}
          </p>
          
          
            0 10 50 200 500 ${activity.price.basePrice} ${activity.price.currencySymbol}
          <tf-budget level=''>
          </tf-budget>
          
          <tf-chip class="type">
            <div class="activity">
            ${activity.categoryLabel}
            </div>
            <div class="rating1">
            ${activity.reviewStatistics.rating.toFixed(1)}
            </div>
          </tf-chip>
          <p class="description">${activity.abstract.substring(
            0,
            205
          )} <span class="read"> Read more...</span></p>

          <tf-button class="actions">Book now</tf-button> 