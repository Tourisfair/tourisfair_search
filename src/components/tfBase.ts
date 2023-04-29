export const html = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

export const css = (strings: TemplateStringsArray, ...values: string[]) =>
  String.raw({ raw: strings }, ...values);

const style = css`
  * {
    --tf-primary-main: #e76b2d;
    --tf-onprimary-main: #f9f9f8;
    --tf-secondary-main: #f2bf41;
    --tf-onsecondary-main: #f9f9f8;
    --tf-tertiary-main: #4ca7de;
    --tf-ontertiary-main: #f9f9f8;
    --tf-main-main: #012e4a;
    --tf-main-variant: #505050;
    --tf-main-disabled: #c4c4c4;
    --tf-ref-green: #56a359;
    --tf-ref-white-25: #ffffff;
    --tf-background-main: #ffffff;
  }

  .primary {
    background-color: var(--tf-primary-main);
    color: var(--tf-onprimary-main);
  }

  .secondary {
    background-color: var(--tf-secondary-main);
    color: var(--tf-onsecondary-main);
  }

  .tertiary {
    background-color: var(--tf-tertiary-main);
    color: var(--tf-ontertiary-main);
  }
`;

export class tfBase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = html`
      <style>
        ${style}
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-base': tfBase;
  }
}

customElements.define('tf-base', tfBase);
