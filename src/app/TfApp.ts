import { html } from '../components.js';
import { css, TfBase } from '../components/TfBase.js';

export interface IActivity {
  photos: { urls: string }[];
  title: string;
  meetingPoints: { address: string }[];
  price: { currencySymbol: string };
  abstract: string;
}

const tfActivityCardStyle = css`
  .details {
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
    border-radius: 20px 0 0 20px;
    left: -5px;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: url(/assets/image.png);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
  }

  h2 {
    width: 247px;
    height: 25px;
    position: relative;
    float: right;
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    left: -10px;

    /* Main/Main */
    color: var(--tf-main-main);
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }

  .subtitle {
    float: right;
    width: 136px;
    height: 14px;
    margin-top: -10px;
    margin-right: 120px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .type {
    float: right;
    position: relative;
    left: -26%;
    top: 10px;
    font-weight: bold;
    display: block;
    padding-top: 0.25rem;
    line-height: 0.75rem;
    font-size: 0.625rem;
    color: var(--tf-main-main);
  }
  .level {
    color: var(--tf-sys-light-secondary);
    font-weight: bold;
  }
  .budget {
    color: var(--tf-sys-light-secondary-container);
    font-weight: bold;

    width: 45px;
    height: 17px;
    float: right;
    position: relative;
    top: 8px;
    left: 45px;
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

  .description {
    position: relative;
    width: 230px;
    height: 109px;
    left: -28px;
    top: 0px;
    color: var(--tf-main-main);
    margin-left: 100px;
    float: right;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  .actions {
    top: 15px;
    position: relative;
    float: right;
    font-weight: bold;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    width: 114px;
    height: 34px;
  }
  .read {
    color: var(--tf-sys-read-more);
    text-decoration: underline;
    font-weight: 700;
  }
`;

export class TfApp extends HTMLElement {
  constructor() {
    super();

    const url = 'https://api.tourisfair.de/api/v1/activities?page=1&limit=10';
    this.attachShadow({ mode: 'open' });

    fetch(url)
      .then((response) => response.json())
      .then((json: { data: any }) => json.data)
      .then(this._afficher.bind(this));

    console.log('url');
  }

  // 2 //
  _afficher(activities: IActivity[]) {
    const container = document.createElement('div');

    activities.forEach((activity: IActivity) => {
      const activityElement = document.createElement('div');
      activityElement.innerHTML = html`
        <style>
          ${tfActivityCardStyle}
        </style>
        <section class="details">
          <tf-card-header-image class="header-img">
            <img src="${activity.photos[0].urls}" alt="" />
          </tf-card-header-image>

          <h2 class="titre">
            <slot name="title">${activity.title.substring(0, 25)}...</slot>
          </h2>
          <p class="subtitle ">
            <slot name="subtitle"
              >${activity.meetingPoints[0]
    ? activity.meetingPoints[0]?.address.substring(0, 25)
    : 'Pickup'}</slot
            >
          </p>
          <div class="budget">
            <slot name="budget">${activity.price.currencySymbol}</slot>
          </div>
          <slot class="type" name="chip"></slot>
          <slot class="type" name="chip"></slot>
          <p class="description ">
            <slot name="description"
              >${activity.abstract.substring(0, 255)} <span class="read">Read more...</span></slot
            >
          </p>
          <div class="actions">
            <slot name="actions"><tf-button> Book now </tf-button></slot>
          </div>
        </section>
      `;
      container.appendChild(activityElement);
    });

    this.shadowRoot && (this.shadowRoot.innerHTML = '');
    this.shadowRoot && this.shadowRoot.appendChild(container);
  }

  // 1 //
  // _afficher(activities: IActivity[]) {
  //   activities.forEach((activity: IActivity) => {
  //     this.shadowRoot &&
  //       (this.shadowRoot.innerHTML = html`
  //         <style>
  //           ${tfActivityCardStyle}
  //         </style>
  //         <section class="details">
  //           <tf-card-header-image class="header-img">
  //             <img src="${activity.photos[0].urls}" alt="" />
  //           </tf-card-header-image>

  //           <h2 class="titre">
  //             <slot name="title">${activity.title.substring(0, 30)}...</slot>
  //           </h2>
  //           <p class="subtitle ">
  //             <slot name="subtitle"
  //               >${activity.meetingPoints[0] ? activity.meetingPoints[0]?.address : 'Pickup'}</slot
  //             >
  //           </p>
  //           <div class="budget">
  //             <slot name="budget">${activity.price.currencySymbol}</slot>
  //           </div>
  //           <slot class="type" name="chip"></slot>
  //           <slot class="type" name="chip"></slot>
  //           <p class="description ">
  //             <slot name="description">${activity.abstract.substring(0, 255)} read More</slot>
  //           </p>
  //           <div class="actions">
  //             <slot name="actions"><tf-button> Book now </tf-button></slot>
  //           </div>
  //         </section>
  //       `);
  //   });



  // 2 //
  // async function fetchActivities(): Promise<IActivity[]> {
  //   const url = 'https://api.tourisfair.de/api/v1/activities?page=1&limit=10';
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data.activities;
  // }

  // async function displayActivities() {
  //   const activities = await fetchActivities();
  //   activities.forEach((activity: IActivity) => {
  //     const activityElement = document.createElement('tf-activity-card');
  //     activityElement.innerHTML = html`
  //       <style>
  //         ${tfActivityCardStyle}
  //       </style>
  //       <section class="details">
  //         <tf-card-header-image class="header-img">
  //           <img src="${activity.photos[0].urls}" alt="" />
  //         </tf-card-header-image>
  //         <h2 class="titre">
  //           <slot name="title">${activity.title.substring(0, 30)}...</slot>
  //         </h2>
  //         <p class="subtitle ">
  //           <slot name="subtitle"
  //             >${activity.meetingPoints[0] ? activity.meetingPoints[0]?.address : 'Pickup'}</slot
  //           >
  //         </p>
  //         <div class="budget">
  //           <slot name="budget">${activity.price.currencySymbol}</slot>
  //         </div>
  //         <slot class="type" name="chip"></slot>
  //         <slot class="type" name="chip"></slot>
  //         <p class="description ">
  //           <slot name="description">${activity.abstract.substring(0, 255)}</slot>
  //         </p>
  //         <div class="actions">
  //           <slot name="actions"><tf-button> Book now </tf-button></slot>
  //         </div>
  //       </section>
  //     `;
  //     document.body.appendChild(activityElement);
  //   });
  // }

  // displayActivities();
  // }

  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    this.setAttribute('src', value ?? '');
  }
  // SUBTITLE
  get subtitle() {
    return this.getAttribute('subtitle') || 'title';
  }

  set subtitle(value) {
    this.setAttribute('subtitle', value);
  }
  // TITLE
  get title() {
    return this.getAttribute('title') || 'title';
  }

  set title(value) {
    this.setAttribute('title', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-app': TfApp;
  }
}

customElements.define('tf-app', TfApp);
function then(arg0: (activities: IActivity[]) => void) {
  throw new Error('Function not implemented.');
}
