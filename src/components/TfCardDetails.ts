import { css, html, TfBase } from './TfBase.js';

const tfCardDetailsStyle = css``;

export class TfCardDetails extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${tfCardDetailsStyle}
            </style>
            <div></div>
         `);
  }

  // connectedCallback() {}

  // attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {}
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-card-details': TfCardDetails;
   }
}

customElements.define('tf-card-details', TfCardDetails);
