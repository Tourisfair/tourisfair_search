import { html, css, TfBase } from './TfBase.js';

const tfActivityCardStyle = css`
  .badges {
    position: absolute;
    left: 30px;
  }

  .details {
    position: relative;
    width: 440px;
    height: 278px;

    /* Background/Main */

    background: #ffffff;
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
  }

  .header-img {
    position: absolute;
    border-radius: 20px 0 0 20px;
    left: -5px;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: url(/assets/image.png);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0);
    background-repeat: no-repeat;
  }

  h2 {
    width: 247px;
    height: 25px;
    position: relative;
    float: right;
    font-style: normal;
    font-size: 18px;
    line-height: 25px;
    left: -10px;

    /* Main/Main */
    color: var(--tf-main-main);
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }

  .subtitle {
    float: right;
    width: 136px;
    height: 14px;
    margin-top: -10px;
    margin-right: 120px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .type {
    float: right;
    position: relative;
    left: -26%;
    top: 10px;
    font-weight: bold;
    display: block;
    padding-top: 0.25rem;
    line-height: 0.75rem;
    font-size: 0.625rem;
    color: var(--tf-main-main);
  }

  .budget {
    width: 45px;
    height: 17px;
    float: right;
    position: relative;
    top: 8px;
    left: 45px;
    font-style: normal;

    font-size: 15px;
    line-height: 110%;
    /* identical to box height, or 17px */

    display: flex;
    align-items: center;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .description {
    position: relative;
    width: 230px;
    height: 109px;
    left: -28px;
    top: 0px;
    color: var(--tf-main-main);
    margin-left: 100px;
    float: right;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  .favorites {
    position: absolute;
    margin-top: 230px;
    margin-left: 35px;
  }
  .actions {
    top: 15px;
    position: relative;
    float: right;
    font-weight: bold;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    width: 114px;
    height: 34px;
  }
`;

export class TfActivityCard extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <style>
          ${tfActivityCardStyle}
        </style>
        <section class="details">
          <div class="header-img">
            <slot name="image"></slot>
          </div>
          <div class="badges">
            <slot name="badge"></slot>
          </div>
          <h2>
            <slot name="title"></slot>
          </h2>
          <p class="subtitle ">
            <slot name="subtitle"></slot>
          </p>
          <div class="budget">
            <slot name="budget"></slot>
          </div>
          <slot class="type" name="chip"></slot>
          <p class="description ">
            <slot name="description"></slot>
          </p>
          <div class="favorites">
            <slot name="favorites"></slot>
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </section>
      `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['title', 'subtitle', 'src', 'enabled'];
  }

  attributeChangedCallback(name: string /*oldValue: string | null,*/, newValue: string | null) {
    const imgElem = this.shadowRoot?.querySelector<HTMLDivElement>('.header-img');
    const favoriteElem = this.shadowRoot?.querySelector('div') as HTMLDivElement;

    if (this.enabled) {
      favoriteElem.classList.add('enabled');
    } else {
      favoriteElem.classList.remove('enabled');
    }

    if (!imgElem) return;
    if (name === 'src') {
      imgElem.style.backgroundImage = `url(${newValue})`;
    }
    if (name === 'title') {
      this.innerHTML += html` <span slot="title">${this.title}</span> `;
    }
    if (name === 'subtitle') {
      this.innerHTML += html` <span slot="subtitle">${this.subtitle}</span> `;
    }
  }
  // FAV
  get enabled() {
    return this.hasAttribute('enabled');
  }

  set enabled(_value) {
    _value && this.setAttribute('enabled', '');
    !_value && this.removeAttribute('enabled');
  }
  // IMG
  get src() {
    return this.getAttribute('src');
  }
  set src(value) {
    this.setAttribute('src', value ?? '');
  }
  // SUBTITLE
  get subtitle() {
    return this.getAttribute('subtitle') || 'title';
  }

  set subtitle(value) {
    this.setAttribute('subtitle', value);
  }
  // TITLE
  get title() {
    return this.getAttribute('title') || 'title';
  }

  set title(value) {
    this.setAttribute('title', value);
  }
}
//

declare global {
  interface HTMLElementTagNameMap {
    'tf-activity-card': TfActivityCard;
  }
}

customElements.define('tf-activity-card', TfActivityCard);
