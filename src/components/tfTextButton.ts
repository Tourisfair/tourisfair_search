import { css, html, TfBase } from './TfBase.js';

const style = css`
   button {
      padding: 0.5rem 1rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
   }

   .button-container {
      display: flex;
      font-size: 1rem;
      align-items: center;
      justify-content: center;
   }

   .button-text {
      margin: 0 0.5rem;
   }
`;

export class TfTextButton extends TfBase {
  constructor() {
    super();

    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <button>
               <div class="button-container">
                  <p class="button-text">
                     <slot></slot>
                  </p>
               </div>
            </button>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['prefix-icon', 'suffix-icon'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string) {
    const div = this.shadowRoot?.querySelector('.button-container') as HTMLDivElement;

    if (name === 'prefix-icon') {
      div?.insertAdjacentHTML('afterbegin', newValue);
    }

    if (name === 'suffix-icon') {
      div?.insertAdjacentHTML('beforeend', newValue);
    }
  }

  get prefixIcon() {
    return this.getAttribute('prefix-icon') || '';
  }

  set prefixIcon(value) {
    this.setAttribute('prefix-icon', value);
  }

  get suffixIcon() {
    return this.getAttribute('suffix-icon') || '';
  }

  set suffixIcon(value) {
    this.setAttribute('suffix-icon', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-text-button': TfTextButton;
   }
}

customElements.define('tf-text-button', TfTextButton);
