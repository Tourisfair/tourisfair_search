export const html = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);

export const css = (strings, ...values) =>
  String.raw({ raw: strings }, ...values);

export class tfBase extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/tf-base.css" />
    `;
  }
}

