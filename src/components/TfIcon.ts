import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: fit-content;
      height: fit-content;
   }
   .container-icon {
      display: flex;
   }
`;

interface tfIconNameMap {
   'arrow-forward-ios': typeof arrowForwardIos;
   'arrow-back-ios': typeof arrowBackIos;
   add: typeof add;
   'account-circle': typeof accountCircle;
   explore: typeof explore;
   'date-range': typeof dateRange;
   message: typeof message;
}

const arrowForwardIos = html`<svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M6.11499 20.23L7.88499 22L17.885 12L7.88499 2L6.11499 3.77L14.345 12L6.11499 20.23Z"
      fill="black"
   />
</svg>`;

const arrowBackIos = html`
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
         d="M17.885 3.77L16.115 2L6.11499 12L16.115 22L17.885 20.23L9.65499 12L17.885 3.77Z"
         fill="black"
      />
   </svg>
`;

const add = html` <svg
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
</svg>`;

const accountCircle = html`<svg
   width="24"
   height="24"
   viewBox="0 0 20 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM5.07 16.28C5.5 15.38 8.12 14.5 10 14.5C11.88 14.5 14.51 15.38 14.93 16.28C13.57 17.36 11.86 18 10 18C8.14 18 6.43 17.36 5.07 16.28ZM16.36 14.83C14.93 13.09 11.46 12.5 10 12.5C8.54 12.5 5.07 13.09 3.64 14.83C2.62 13.49 2 11.82 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 11.82 17.38 13.49 16.36 14.83ZM10 4C8.06 4 6.5 5.56 6.5 7.5C6.5 9.44 8.06 11 10 11C11.94 11 13.5 9.44 13.5 7.5C13.5 5.56 11.94 4 10 4ZM10 9C9.17 9 8.5 8.33 8.5 7.5C8.5 6.67 9.17 6 10 6C10.83 6 11.5 6.67 11.5 7.5C11.5 8.33 10.83 9 10 9Z"
      fill="currentColor"
   />
</svg> `;

const explore = html`<svg
   width="20"
   height="20"
   viewBox="0 0 20 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM4.5 15.5L12.01 12.01L15.5 4.5L7.99 7.99L4.5 15.5ZM10 8.9C10.61 8.9 11.1 9.39 11.1 10C11.1 10.61 10.61 11.1 10 11.1C9.39 11.1 8.9 10.61 8.9 10C8.9 9.39 9.39 8.9 10 8.9Z"
      fill="black"
   />
</svg> `;

const dateRange = html`<svg
   width="18"
   height="20"
   viewBox="0 0 18 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M4 9H6V11H4V9ZM18 4V18C18 19.1 17.1 20 16 20H2C0.89 20 0 19.1 0 18L0.00999999 4C0.00999999 2.9 0.89 2 2 2H3V0H5V2H13V0H15V2H16C17.1 2 18 2.9 18 4ZM2 6H16V4H2V6ZM16 18V8H2V18H16ZM12 11H14V9H12V11ZM8 11H10V9H8V11Z"
      fill="black"
   />
</svg> `;

const message = html`<svg
   width="20"
   height="20"
   viewBox="0 0 20 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M2 2H18V14H3.17L2 15.17V2ZM2 0C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0H2ZM4 10H16V12H4V10ZM4 7H16V9H4V7ZM4 4H16V6H4V4Z"
      fill="black"
   />
</svg> `;
export class tfIcon extends TfBase {
  private _icon: tfIconNameMap = {
    'arrow-forward-ios': arrowForwardIos,
    'arrow-back-ios': arrowBackIos,
    add: add,
    'account-circle': accountCircle,
    explore: explore,
    'date-range': dateRange,
    message: message,
  };

  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML = html`
            <style>
               ${style}
            </style>
            <div class="container-icon">${this.icon}</div>
         `);
  }

  static get observedAttributes() {
    return ['icon'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, _newValue: string | null) {
    const span = this.shadowRoot?.querySelector('div');
    if (!span) return;
    if (['icon'].includes(name)) {
      span.innerHTML = this.icon;
    }
  }

  get icon() {
    return (
      this._icon[this.getAttribute('icon') as keyof tfIconNameMap] ||
         this._icon['add' as keyof tfIconNameMap]
    );
  }

  set icon(value: tfIconNameMap[keyof tfIconNameMap]) {
    this.setAttribute('icon', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-icon': tfIcon;
   }
}

customElements.define('tf-icon', tfIcon);
