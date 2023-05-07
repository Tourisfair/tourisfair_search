import { css, html, TfBase } from './TfBase.js';

const style = css`
   .label {
      display: flex;
      align-items: center;
   }
   .label svg {
      margin: 2px;
   }
`;

export class TfDropDownListButton extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="label">
               <slot></slot>
               <svg
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M0.706237 2.41374L3.29624 5.00374C3.68624 5.39374 4.31624 5.39374 4.70624 5.00374L7.29624 2.41374C7.92624 1.78374 7.47624 0.703735 6.58624 0.703735H1.40624C0.516237 0.703735 0.0762368 1.78374 0.706237 2.41374Z"
                     fill="black"
                  />
               </svg>
            </div>
         `);
  }

  connectedCallback() {
    const label = this.shadowRoot?.querySelector('.label') as HTMLElement;
    label.addEventListener('click', this.changeSVG);
  }

  disconnectedCallback() {
    const label = this.shadowRoot?.querySelector('.label') as HTMLElement;
    label.removeEventListener('click', this.changeSVG);
  }

  changeSVG() {
    const svg = this.shadowRoot?.querySelector('svg') as SVGSVGElement;
    svg.style.transform = 'rotate(0deg)';
    this.open = this.open === 'true' ? 'false' : 'true';
  }

  static get observedAttributes() {
    return ['open'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, _newValue: string | null) {
    const svg = this.shadowRoot?.querySelector('svg') as SVGSVGElement;
    if (name === 'open') {
      if (_newValue === 'false') {
        svg.style.transform = 'rotate(-90deg)';
      } else {
        svg.style.transform = 'rotate(0deg)';
      }
    }
  }

  get open() {
    return this.getAttribute('open') || 'false';
  }

  set open(value) {
    this.setAttribute('open', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-dropdown-list-button': TfDropDownListButton;
   }
}

customElements.define('tf-dropdown-list-button', TfDropDownListButton);
