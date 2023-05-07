import { css, html, TfBase } from './TfBase.js';
import { TfCarrouselIndicator } from './TfCarrouselIndicator.js';

const style = css`
   .welcome-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: var(--tf-neutral-95);
      border-radius: 32px;
      padding: 16px;
   }

   .welcome-card__title {
      size: 1.5rem;
      font-weight: 800;
   }

   .welcome-card__content {
      line-height: 24px;
      text-align: center;
   }

   .welcome-card__actions {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
   }

   .action-button {
      margin: 0 auto;
   }

   .transform {
      transform: translateX(85%);
   }
`;

export class TfWelcomeCard extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
      <style>
        ${style}
      </style>
      <section class="welcome-card">
        <div class="welcome-card__title">
          <slot name="title"></slot>
        </div>
        <div class="welcome-card__content">
          <slot name="content"></slot>
        </div>
        <tf-carrousel-indicator step=${this.step}></tf-carrousel-indicator>
        <div class="welcome-card__actions">
          <tf-button variant="primary" size="medium" class="action-button transform"/>Next</tf-button>
          <tf-text-button
          suffix-icon="<tf-icon icon='arrow-forward-ios'></tf-icon>"
          >Skip</tf-text-button>
          
        </div>
        
      </section>
    `);
  }

  // connectedCallback() {}

  static get observedAttributes() {
    return ['step'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string) {
    const div = this.shadowRoot?.querySelector('.welcome-card__actions') as HTMLDivElement;
    const carrousel = this.shadowRoot?.querySelector(
      'tf-carrousel-indicator'
    ) as TfCarrouselIndicator;

    carrousel.setAttribute('step', newValue);
    if (name === 'step' && newValue === 'final') {
      div.innerHTML = `
      <tf-button variant="primary" size="medium" class="action-button"/>Start</tf-button>
      `;
    }
  }

  get step() {
    return this.getAttribute('step') || 'first';
  }

  set step(value) {
    this.setAttribute('step', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-welcome-card': TfWelcomeCard;
   }
}

customElements.define('tf-welcome-card', TfWelcomeCard);
