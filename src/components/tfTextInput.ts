import { html, css, tfBase } from "./tfBase.js";

const style = css`
  input {
    padding: 12px 8px;
    width: 100%;
  }

  label {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    pointer-events: none;
    transition: 0.2s ease all;
  }

  input:focus ~ label {
    top: -10px;
  }

  .input-icon {
    padding-left: 40px !important;
    width: calc(100% - 34px);
  }

  .input-icon ~ label {
    left: 40px;
  }

  .input-icon:focus ~ label {
    left: 10px;
  }

  .container {
    position: relative;
  }

  .icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  input:focus {
    border-color: var(--tf-sys-light-primary);
  }

  .default {
    border: 1px solid var(--tf-sys-light-outline);
    border-radius: 24px;
    background-color: var(--tf-sys-light-primary-container);
  }

  .disabled {
    border-color: var(--tf-sys-light-surface-variant);
    background-color: var(--tf-sys-light-surface-variant);
  }

  .error {
    background-color: var(--tf-syslight-error-container);
    color: var(--tf-sys-light-error);
  }
`;

export class TfInputText extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${style}
      </style>
      <div class="container">
        <input type="text" class="default input-icon" />
        <label></label>
      </div>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["icon", "status", "pictogramme", "label"];
  }

  attributeChangedCallback(name: String, _oldValue: String, _newValue: String) {
    const input = this.shadowRoot!.querySelector("input");
    const label = this.shadowRoot!.querySelector("label");

    switch (name) {
      case "status":
        input!.classList.toggle(this.status, true);
        input!.disabled = this.status === "disabled";
        break;

      case "label":
        label!.classList.toggle("label", true);
        label!.textContent = this.label;
        break;

      case "icon":
        if (this.icon === "true") {
          input!.insertAdjacentHTML(
            "beforebegin",
            `<tf-icon icon="${this.pictogramme}" class="icon"></tf-icon>`
          );
          input!.classList.add("input-icon");
        } else if (this.icon === "false") {
          const icon = this.shadowRoot!.querySelector(".icon");
          icon?.remove();
          input!.classList.remove("input-icon");
        }
        break;
    }
  }


  get icon() {
    return this.getAttribute("icon") || "false";
  }

  set icon(value) {
    this.setAttribute("icon", value);
  }

  get status() {
    return this.getAttribute("status") || "default";
  }

  set status(value) {
    this.setAttribute("status", value);
  }

  get pictogramme() {
    return this.getAttribute("pictogramme") || "arrow-forward-ios";
  }

  set pictogramme(value) {
    this.setAttribute("pictogramme", value);
  }

  get label() {
    return this.getAttribute("label") || "";
  }

  set label(value) {
    this.setAttribute("label", value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tf-input-text": TfInputText;
  }
}

customElements.define("tf-input-text", TfInputText);
