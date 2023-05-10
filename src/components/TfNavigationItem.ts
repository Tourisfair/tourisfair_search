import { css, html, TfBase } from './TfBase.js';

const style = css`
   .active {
      background-color: var(--tf-sys-light-tertiary);
      box-shadow: 0px 0px 8px 0px #00000040;
      border-top: 8px solid var(--tf-sys-light-tertiary);
      border-bottom: 8px solid var(--tf-sys-light-tertiary);
      margin: -8px 0px;
   }

   .icon {
      background-color: #ffff;
      padding: 0.5rem;
      border-radius: 50%;
      margin-top: 0.5rem;
   }

   .navigation-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.5rem 1rem;
      width:5rem
   }

   .text {
      font-size: 0.9rem;
   }
`;

export class TfNavigationItem extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
         (this.shadowRoot.innerHTML += html`
            <style>
               ${style}
            </style>
            <div class="navigation-item">
               <slot class="text"></slot>
            </div>
         `);
  }

  static get observedAttributes() {
    return ['icon', 'active'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    const navigationItemElem = this.shadowRoot?.querySelector('div');

    if (name === 'icon') {
      const icon = document.createElement('tf-icon');
      icon.classList.add('icon');
      icon.setAttribute('icon', newValue || '');
      navigationItemElem?.insertAdjacentElement('beforeend', icon);
    }

    if (name === 'active' && newValue === 'true') {
      navigationItemElem?.classList.toggle('active', true);
    }
  }

  get icon() {
    return this.getAttribute('icon') || ' ';
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }
}

declare global {
   interface HTMLElementTagNameMap {
      'tf-navigation-item': TfNavigationItem;
   }
}

customElements.define('tf-navigation-item', TfNavigationItem);
