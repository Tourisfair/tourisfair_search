import { html, css, tfBase } from "./tfBase.js";

export class tfBudget extends tfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-budget.css" />
      <span class="level"> </span><span class="budget"> </span>
    `;
    this._currencySymbol = "€";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `${this.level} ${this._currencySymbol}`;
    this.style.color = this._color;
  }

  static get observedAttributes() {
    return ["level"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const levelElem = this.shadowRoot.querySelector(".level");
    const budgetlElem = this.shadowRoot.querySelector(".budget");
    if (name === "level") {
      levelElem.innerHTML = this._currencySymbol.repeat(newValue);
      budgetlElem.innerHTML = this._currencySymbol.repeat(5 - newValue);
    }
  }

  get level() {
    return this.getAttribute("level");
  }

  set level(value) {
    this.setAttribute("level", value);
  }
}
