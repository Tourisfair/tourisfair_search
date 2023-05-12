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
   width="100%"
   height="100%"
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor" />
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
      fill="currentColor"
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
      fill="currentColor"
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
      fill="currentColor"
   />
</svg> `;

const visibility = html`<svg
   width="22"
   height="16"
   viewBox="0 0 22 16"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM11 5C9.34 5 8 6.34 8 8C8 9.66 9.34 11 11 11C12.66 11 14 9.66 14 8C14 6.34 12.66 5 11 5Z"
      fill="currentColor"
   />
</svg> `;

const visibilityOff = html`<svg
   width="22"
   height="20"
   viewBox="0 0 22 20"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M11 4.47039C13.76 4.47039 16 6.71039 16 9.47039C16 9.98039 15.9 10.4704 15.76 10.9304L18.82 13.9904C20.21 12.7604 21.31 11.2204 22 9.46039C20.27 5.08039 16 1.97039 11 1.97039C9.73 1.97039 8.51 2.17039 7.36 2.54039L9.53 4.71039C10 4.57039 10.49 4.47039 11 4.47039ZM1.71 1.13039C1.32 1.52039 1.32 2.15039 1.71 2.54039L3.68 4.51039C2.06 5.80039 0.77 7.50039 0 9.47039C1.73 13.8604 6 16.9704 11 16.9704C12.52 16.9704 13.97 16.6704 15.31 16.1504L18.03 18.8704C18.42 19.2604 19.05 19.2604 19.44 18.8704C19.83 18.4804 19.83 17.8504 19.44 17.4604L3.13 1.13039C2.74 0.740391 2.1 0.740391 1.71 1.13039ZM11 14.4704C8.24 14.4704 6 12.2304 6 9.47039C6 8.70039 6.18 7.97039 6.49 7.33039L8.06 8.90039C8.03 9.08039 8 9.27039 8 9.47039C8 11.1304 9.34 12.4704 11 12.4704C11.2 12.4704 11.38 12.4404 11.57 12.4004L13.14 13.9704C12.49 14.2904 11.77 14.4704 11 14.4704ZM13.97 9.14039C13.82 7.74039 12.72 6.65039 11.33 6.50039L13.97 9.14039Z"
      fill="currentColor"
   />
</svg> `;

const lock = html`<svg
   width="16"
   height="22"
   viewBox="0 0 16 22"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M14 7.5H13V5.5C13 2.74 10.76 0.5 8 0.5C5.24 0.5 3 2.74 3 5.5V7.5H2C0.9 7.5 0 8.4 0 9.5V19.5C0 20.6 0.9 21.5 2 21.5H14C15.1 21.5 16 20.6 16 19.5V9.5C16 8.4 15.1 7.5 14 7.5ZM8 16.5C6.9 16.5 6 15.6 6 14.5C6 13.4 6.9 12.5 8 12.5C9.1 12.5 10 13.4 10 14.5C10 15.6 9.1 16.5 8 16.5ZM5 7.5V5.5C5 3.84 6.34 2.5 8 2.5C9.66 2.5 11 3.84 11 5.5V7.5H5Z"
      fill="currentColor"
   />
</svg> `;

const check = html`
<svg
   width="100%"
   height="100%"
   viewBox="0 0 24 24"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
>
   <path
      d="M8.79506 15.875L5.32506 12.405C4.93506 12.015 4.30506 12.015 3.91506 12.405C3.52506 12.795 3.52506 13.425 3.91506 13.815L8.09506 17.995C8.48506 18.385 9.11506 18.385 9.50506 17.995L20.0851 7.41502C20.4751 7.02502 20.4751 6.39502 20.0851 6.00502C19.6951 5.61502 19.0651 5.61502 18.6751 6.00502L8.79506 15.875Z"
      fill="currentColor"
   />
</svg> `;
interface TfIconNameMap {
   [key: string]: string;
}

export const tfIconNameMap: TfIconNameMap = {
  'arrow-forward-ios': arrowForwardIos,
  'arrow-back-ios': arrowBackIos,
  add: add,
  'account-circle': accountCircle,
  explore: explore,
  'date-range': dateRange,
  message: message,
  lock: lock,
  visibility: visibility,
  'visibility-off': visibilityOff,
  check: check,
};
export class TfIcon extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="container-icon">${this.icon}</div>
         `);
  }

  static get observedAttributes() {
    return ['icon'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, _newValue: string) {
    if (name === 'icon') {
      this.shadowRoot &&
            (this.shadowRoot.innerHTML = html`
               <style>
                  ${style}
               </style>
               <div class="container-icon">${tfIconNameMap[_newValue]}</div>
            `);
    }
  }

  get icon() {
    return this.getAttribute('icon') || '';
  }

  set icon(value: TfIconNameMap[keyof TfIconNameMap]) {
    this.setAttribute('icon', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-icon': TfIcon;
   }
}

customElements.define('tf-icon', TfIcon);
