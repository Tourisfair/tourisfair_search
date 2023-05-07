import { css, html, TfBase } from './TfBase.js';

const style = css`
   .container {
      background-color: var(--tf-sys-light-surface);
      padding: 24px 16px 16px;
      border-radius: 40px 40px 0px 0px;
      border: 1px solid var(--tf-sys-light-surface-variant);
      box-shadow: 0px -12px 12px 0px #00000014;
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
