import { css, html, TfBase } from './TfBase.js';

const style = css`
   :host {
      display: block;
      width: 100%;
   }

   .progress-bar {
      background-color: rgba(0, 0, 0, 0.25);
      border-radius: 32px;
      height: 8px;
   }

   .progress-bar-fill {
      background: repeating-linear-gradient(135deg, #00aae3 0 8px, #2bb7f1 0 14px) 0/100%;
      border-radius: 32px;
      height: 8px;
   }
`;

export class TfProgressBar extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="progress-bar">
               <div class="progress-bar-fill"></div>
            </div>
         `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['progress'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    const progressBarFillElem = this.shadowRoot?.querySelector(
      '.progress-bar-fill'
    ) as HTMLDivElement;

    if (name === 'progress') {
      progressBarFillElem.style.width = `${newValue}%`;
    }
  }

  get progress() {
    return this.getAttribute('progress') || '0';
  }

  set progress(value) {
    this.setAttribute('progress', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-progress-bar': TfProgressBar;
   }
}

customElements.define('tf-progress-bar', TfProgressBar);
