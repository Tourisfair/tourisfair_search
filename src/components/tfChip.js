import { html, css, tfBase } from "./tfBase.js";

export class tfChip extends tfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-chip.css"/>
      <span class="activity">
        <slot></slot>
      </span>
    `;
  }

  connectedCallback() {
    
  }

  static get observedAttributes() {
    return ["type"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const chipElem = this.shadowRoot.querySelector("span");
    if (name === "type") {
      chipElem.classList.remove(oldValue);
      chipElem.classList.add(newValue);
    }
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(value) {
    this.setAttribute("type", value);
  }
}
