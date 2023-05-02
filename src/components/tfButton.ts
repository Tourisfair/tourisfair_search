import { css, html, tfBase } from './tfBase.js';

const style = css`
  button {
    padding: 0.5rem 1rem;
    border-radius: 30px;
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
    return ['variant', 'state'];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    const buttonElem = this.shadowRoot!.querySelector('button');
    if (['variant', 'state'].includes(name)) {
      buttonElem!.classList.remove(_oldValue!);
      buttonElem!.classList.add(_newValue!);
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

declare global {
  interface HTMLElementTagNameMap {
    'tf-button': tfButton;
  }
}

customElements.define('tf-button', tfButton);