import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: 100%;
      height: 100%;
   }
`;

export class TfNavigationBar extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <nav class="">
               <slot></slot>
            </nav>
         `);
  }
}

