import { css, html, TfBase } from './TfBase.js';

const style = css`

   :host{
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--tf-sys-light-surface);
      border: 1px solid var(--tf-sys-light-surface-variant);
      border-radius: 40px 40px 0px 0px;
      box-shadow: 0px -12px 12px 0px #00000014;
   }

   .container {
      padding: 24px 16px 16px;
   }
`;

export class TfHomeCard extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="container">
               <slot name="title"></slot>
               <slot name="content"></slot>
            </div>
         `);
  }

  // connectedCallback() {}
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-home-card': TfHomeCard;
   }
}

customElements.define('tf-home-card', TfHomeCard);
