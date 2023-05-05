import { css, html, tfBase } from "./tfBase.js";

const style = css`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  main {
    width: 100%;
    height: 80vh;
  }
  .down {
    border-radius: 0 0 40px 40px;
  }

  .up {
    border-radius: 40px 40px 0 0;
  }
`;

export class TfMainContainer extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${style}
      </style>
      <main class="main down primary">
        <slot></slot>
      </main>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["direction", "color"];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    
    const dropdownElem = this.shadowRoot!.querySelector("main");
    if (["direction", "color"].includes(name)) {
      dropdownElem!.classList.remove(_oldValue!);
      dropdownElem!.classList.add(_newValue!);
    }
  }

  get direction() {
    return this.getAttribute("direction") || "dropdown";
  }

  set direction(value) {
    this.setAttribute("direction", value);
  }

  get color() {
    return this.getAttribute("color") || "primary";
  }

  set color(value) {
    this.setAttribute("color", value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tf-main-container": TfMainContainer;
  }
}

customElements.define("tf-main-container", TfMainContainer);
