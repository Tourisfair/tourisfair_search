import { css, html, TfBase } from './TfBase.js';

const tfCardHeaderImageStyle = css`
   :host {
      display: block;
      width: 100%;
      height: 100%;
   }

   .header-img {
      max-width: 100%;
      max-height: 100%;
      width: 14rem;
      height: 20rem;
      background-size: cover;
      background-position: center;
   }
`;

export class TfCardHeaderImage extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${tfCardHeaderImageStyle}
            </style>
            <div class="header-img"></div>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {
    const divElem = this.shadowRoot?.querySelector<HTMLDivElement>('.header-img');
    if (!divElem) return;
    if (_name === 'src') {
      divElem.style.backgroundImage = `url(${_newValue})`;
    }
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(value) {
    this.setAttribute('src', value ?? '');
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-card-header-image': TfCardHeaderImage;
   }
}

customElements.define('tf-card-header-image', TfCardHeaderImage);
