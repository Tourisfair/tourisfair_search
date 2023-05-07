import { html, css, tfBase } from './TfBase.js';

const tfCardDetailsStyle = css``;

export class tfCardDetails extends tfBase {
   private _url = `https://api.tourisfair.de/api/v1/activities?page=1&limit=10`;
   data: any;
   constructor() {
      super();
      this.getData();
      this.render();
   }
   async getData() {
      try {
         const response = await fetch(this._url);
         const json = await response.json();
         this.data = json;
         console.log(this.data);
      } catch (error) {
         console.error(error);
      }
   }
   render() {
      this.shadowRoot!.innerHTML += html`
         <style>
            ${tfCardDetailsStyle}
         </style>
         <section class="details">
            <h2 class="title">${this.data?.title?.substring(0, 30)}...</h2>
            <p class="address">${this.data?.meetingPoints[0]?.address ?? 'Pickup'}</p>
            <span class="level"> </span><span class="budget"> </span>
            <span class="activity">
               <slot></slot>
            </span>
            <p class="abstract">${this.data?.abstract.substring(0, 255)}</p>
            <button class="primary">
               <slot></slot>
            </button>
         </section>
      `;
   }

   connectedCallback() {}

   static get observedAttributes() {
      return ['details', 'budget', 'chip', 'button'];
   }

   attributeChangedCallback(name: string, _oldValue: string | null, _newValue: string | null) {
      const sectionElem = this.shadowRoot!.querySelector('.level')!;

      if (name === 'details') {
         sectionElem!.innerHTML = this.data.remove(_oldValue!);
         sectionElem!.innerHTML = this.data.add(_newValue!);
      }
   }

   get details() {
      return this.getAttribute('details');
   }

   set details(value) {
      this.setAttribute('details', value!);
   }
}
//

declare global {
   interface HTMLElementTagNameMap {
      'tf-card-details': tfCardDetails;
   }
}

customElements.define('tf-card-details', tfCardDetails);
