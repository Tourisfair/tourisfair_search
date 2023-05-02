import { css, html, tfBase } from './tfBase.js';

const style = css`
  .type {
    padding: 0.25rem;
    line-height: 0.75rem;
    font-size: 0.625rem;
  }

  .activity {
    background-color: var(--tf-secondary-main);
  }

  .poi {
    background-color: var(--tf-tertiary-main);
  }
`;

export class tfChip extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${style}
      </style>
      <span class="activity">
        <slot></slot>
      </span>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['type'];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    const chipElem = this.shadowRoot!.querySelector('span');
    if (name === 'type') {
      chipElem!.classList.remove(_oldValue!);
      chipElem!.classList.add(_newValue!);
    }
  }

  get type() {
    return this.getAttribute('type')!;
  }

  set type(value: string) {
    this.setAttribute('type', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-chip': tfChip;
  }
}

customElements.define('tf-chip', tfChip);
