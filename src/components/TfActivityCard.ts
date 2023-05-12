import { html, css, TfBase } from './TfBase.js';

const tfActivityCardStyle = css`
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
          <h2 class="droite">
            <slot name="title"></slot>
          </h2>
          <p class="subtitle droite">
            <slot name="subtitle"></slot>
          </p>
          <div class="budget">
            <slot name="budget"></slot>
          </div>
          <slot class="type" name="chip"></slot>
          <p class="description droite">
            <slot name="description"></slot>
          </p>
          <div class="favorites">
            <slot name="favorites"><svg
                  width="28"
                  height="30"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M4.8823 17.0843L13.2581 25.5336C13.5926 25.871 13.7599 26.0398 13.9683 26.0398C14.1766 26.0398 14.3439 25.871 14.6784 25.5336L23.0542 17.0843C25.1993 14.9203 25.4638 11.522 23.6794 9.05222L23.099 8.24892C20.8559 5.14424 16.0911 5.64022 14.5355 9.14033C14.3171 9.63186 13.6194 9.63186 13.401 9.14033C11.8454 5.64022 7.08061 5.14424 4.83749 8.24892L4.25711 9.05222C2.47267 11.522 2.73719 14.9203 4.8823 17.0843Z"
                     class="favorite"
                  />
               </svg></slot>
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </section>
      `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['title', 'subtitle', 'src','enabled'];
  }

  attributeChangedCallback(name: string /*oldValue: string | null,*/, newValue: string | null) {
    const imgElem = this.shadowRoot?.querySelector<HTMLDivElement>('.header-img');
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
