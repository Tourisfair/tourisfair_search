import { html, css, tfBase } from "./tfBase.js";

export class tfButton extends tfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-button.css" />
      <button class="primary">
        <slot></slot>
      </button>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["priority"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const buttonElem = this.shadowRoot.querySelector("button");
    if (name === "priority") {
      buttonElem.classList.remove(oldValue);
      buttonElem.classList.add(newValue);
    }
  }

  get priority() {
    return this.getAttribute("priority") || "primary";
  }

  set priority(value) {
    this.setAttribute("priority", value);
  }
}
