import { html, css, tfBase } from "./tfBase.js";

export class tfCardHeaderImage extends tfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-card-header-image.css" />
      <img src="../Image.png" alt="" class="header-img">
    `;
  }

  connectedCallback() {
    
  }

  static get observedAttributes() {
    return ["header-img"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const divElem = this.shadowRoot.querySelector("img");
    if (name === "header-img") {
      divElem.classList.remove(oldValue);
      divElem.classList.add(newValue);
    }
  }

  get img() {
    return this.getAttribute("header-img");
  }

  set img(value) {
    this.setAttribute("header-img", value);
  }
}
