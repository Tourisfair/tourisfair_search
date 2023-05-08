import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: inherit;
      height: inherit;
   }

   img {
      width: inherit;
      height: inherit;
   }
`;

export class TfLogo extends TfBase {
  constructor() {
    super();
    const variant = this.variant;
    const color = this.color;
    const imgPath = `../assets/logos/logo_${variant}_${color}.png`;
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <img src="${imgPath}" alt="logo" />
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['variant', 'color'];
  }

  attributeChangedCallback(name: string /*, _oldValue: string | null, _newValue: string | null*/) {
    if (['variant', 'color'].includes(name)) {
      const img = this.shadowRoot?.querySelector('img') as HTMLImageElement;
      const variant = this.variant;
      const color = this.color;
      const imgPath = `../assets/logos/logo_${variant}_${color}.png`;

      img.setAttribute('src', imgPath);
    }
  }

  get variant() {
    return this.getAttribute('variant') || 'alone';
  }

  set variant(value) {
    this.setAttribute('variant', value);
  }

  get color() {
    return this.getAttribute('color') || 'default';
  }

  set color(value) {
    this.setAttribute('color', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-logo': TfLogo;
   }
}

customElements.define('tf-logo', TfLogo);
