import { css, html, tfBase } from './tfBase.js';

const style = css`
  button {
    padding: 0.5rem 1rem;
    border-radius: 30px;
    border: #ffffff;
    color: #ffffff;
    text-align: center;
  }
`;

export class tfButton extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${style}
      </style>
      <button class="primary">
        <slot></slot>
      </button>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['variant'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    const buttonElem = this.shadowRoot!.querySelector('button');
    if (name === 'variant') {
      buttonElem!.classList.remove(oldValue);
      buttonElem!.classList.add(newValue);
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-button': tfButton;
  }
}

customElements.define('tf-button', tfButton);
