import { html, css, tfBase } from './tfBase.js';

export class tfButton extends tfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-button.css" />
      <button class="primary">
        <slot></slot>
      </button>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['variant', 'state'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const buttonElem = this.shadowRoot.querySelector('button');
    if (name === 'variant') {
      buttonElem.classList.remove(oldValue);
      buttonElem.classList.add(newValue);
    }
    if (name === 'state') {
      buttonElem.classList.remove(oldValue);
      buttonElem.classList.add(newValue);
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }
  set variant(value) {
    this.setAttribute('variant', value);
  }

  get state() {
    return this.getAttribute('state') || 'default';
  }
  set state(value) {
    this.setAttribute('state', value);
  }
}
