import { css, html, tfBase } from "./tfBase.js";

const style = css`
  button {
    padding: 0.5rem 1rem;
    border-radius: 30px;
    text-align: center;
    border: none;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  }

  .small {
    padding: 6px 16px;
    font-size: 11px;
  }

  .large {
    padding: 8px 16px;
  }

  .medium {
    padding: 4px 16px;
  }

  .disabled {
    opacity: 0.4;
    color: #fff;
  }

`;

export class tfButton extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${style}
      </style>
      <button class="primary">
        <slot></slot>
      </button>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["variant", "state", "size" , "active"];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    const buttonElem = this.shadowRoot!.querySelector("button");
    if (["variant", "state", "size"].includes(name)) {
      buttonElem!.classList.remove(_oldValue!);
      buttonElem!.classList.add(_newValue!);
    }

    if (name === "active") {
      buttonElem!.disabled = _newValue !== "true";
      _newValue === "false" ? buttonElem!.classList.add("disabled") : buttonElem!.classList.remove("disabled");
    }
  }

  get variant() {
    return this.getAttribute("variant") || "primary";
  }

  set variant(value) {
    this.setAttribute("variant", value);
  }

  get state() {
    return this.getAttribute("state") || "default";
  }
  set state(value) {
    this.setAttribute("state", value);
  }

  get size() {
    return this.getAttribute("size") || "medium";
  }

  set size(value) {
    this.setAttribute("size", value);
  }

  get active() {
    return this.getAttribute("active") || "true";
  }

  set active(value) {
    this.setAttribute("active", value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tf-button": tfButton;
  }
}

customElements.define("tf-button", tfButton);
