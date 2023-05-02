import { html, css, tfBase } from './tfBase.js';

const tfBudgetStyle = css`
  .level {
    color: var(--tf-primary-main);
    font-weight: bold;
  }
  .budget {
    color: var(--tf-main-disabled);
    font-weight: bold;
  }
`;

export class tfBudget extends tfBase {
  private _currencySymbol = '€';
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${tfBudgetStyle}
      </style>
      <span class="level"> </span><span class="budget"> </span>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['level'];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    const levelElem = this.shadowRoot!.querySelector('.level')!;
    const budgetlElem = this.shadowRoot!.querySelector('.budget')!;
    if (name === 'level') {
      levelElem.innerHTML = this._currencySymbol.repeat(parseInt(_newValue!));
      budgetlElem.innerHTML = this._currencySymbol.repeat(
        5 - parseInt(_newValue!)
      );
    }
  }

  get level() {
    return this.getAttribute('level');
  }

  set level(value) {
    this.setAttribute('level', value!);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-budget': tfBudget;
  }
}

customElements.define('tf-budget', tfBudget);
