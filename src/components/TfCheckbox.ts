import { css, html, TfBase } from './TfBase.js';
import { tfIconNameMap } from './TfIcon.js';


let style = css`
   .checkbox {
      display: flex;
      align-items: center;
      gap: 0.5rem;
   }

   input[type='checkbox'] {
      appearance: none;
      font: inherit;
      color: currentColor;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid var(--tf-sys-light-outline);
      border-radius: 0.5rem;
      display: grid;
      place-content: center;
   }

   input[type='checkbox']:checked::before {
      transform: scale(0.8);
      color: var(--tf-sys-light-primary);
   }

   .default {
      color: var(--tf-sys-light-primary);
   }

   .default input[type='checkbox'] {
      background-color: var(--tf-sys-light-primary-container);
   }

   .default input[type='checkbox']:focus {
      border-color: var(--tf-sys-light-primary);
   }

   .default input[type='checkbox']:focus ~ label {
      color: var(--tf-sys-light-primary);
   }

   .disabled input[type='checkbox'] {
      background-color: var(--tf-sys-light-surface-variant);
   }

   .disabled input[type='checkbox'] ~ label {
      color: var(--tf-sys-light-outline);
   }
`;

export class TfCheckbox extends TfBase {
  private _svg = html`${tfIconNameMap['check']}`;

  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <section class="checkbox">
               <input type="checkbox" id="checkbox" checked />
               <label for="checkbox">
                  <slot></slot>
               </label>
            </section>
         `);
  }

  static get observedAttributes() {
    return ['status', 'checked', 'focus'];
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    const checkboxElem = this.shadowRoot?.querySelector('section');
    const inputElem = this.shadowRoot?.querySelector('input');
    inputElem?.removeAttribute('checked');
    
    switch (name) {
    case 'status' :
      checkboxElem?.classList.remove(_oldValue);
      checkboxElem?.classList.add(newValue);

      if(newValue === 'disabled') {
        inputElem?.setAttribute('disabled', '');
        this.colorCheckChange('var(--tf-sys-light-outline)');
      }
    
      break;
    case 'checked' :
      inputElem?.setAttribute('checked', '');
      break;
    }
    
    
    this.colorCheckChange();

  }


  colorCheckChange(color = 'currentColor') {
    const newSvg =  this.svg.replace('currentColor', '#ffff');

    style += css`
         input[type='checkbox']::before {
          
            content: url(${'data:image/svg+xml,' + encodeURIComponent(newSvg)});
            width: inherit;
            height: inherit;
            transform: scale(0);
         }
      `;
  }


  get checked() {
    return this.getAttribute('checked');
  }

  set checked(value) {
    value ? this.setAttribute('checked', '') : this.removeAttribute('checked');
  }

  get svg() {
    return this._svg;
  }

  set svg(value) {
    this.svg = value;
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-checkbox': TfCheckbox;
   }
}

customElements.define('tf-checkbox', TfCheckbox);
