import { html, css, tfBase } from "./tfBase.js";

export class tfChip extends tfBase {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML += html`
      <link rel="stylesheet" href="/components/styles/tf-chip.css" />
      <div class="type">
        <div class="history">History</div>
        <div class="poi">Churches</div>
      </div>
      <slot></slot>
    `;
  }

  static get observedAttributes() {
    return ["type"];
  }

  attributeChangedCallback(name, oldValue, newValue){
      console.log('attribute changed', name, oldValue, newValue);
      console.log(this.shadowRoot)
      const buttonElem = this.shadowRoot.querySelector('div');
      console.log(buttonElem);
      if (name === 'type'){
          buttonElem.classList.remove(oldValue);
          buttonElem.classList.add(newValue);
      }
  }

//   get priority() {
//     return this.getAttribute("priority") || "primary";
//   }

//   set priority(value) {
//     this.setAttribute("priority", value);
//   }
}
