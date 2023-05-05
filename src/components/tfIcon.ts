import { css, html, tfBase } from "./tfBase.js";

const style = css`
  .container-icon {
    display: block;
    height: 24px;
    width: 24px;
  }
`;

enum IconName {
  "arrow-forward-ios" = "arrow-forward-ios",
  "arrow-back-ios" = "arrow-back-ios",
  "add" = "add",
}

type IconMap = {
  [key in IconName]: string;
};

const allSvg: IconMap = {
  "arrow-forward-ios": html`
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.11499 20.23L7.88499 22L17.885 12L7.88499 2L6.11499 3.77L14.345 12L6.11499 20.23Z"
        fill="black"
      />
    </svg>
  `,
  "arrow-back-ios": html`
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.885 3.77L16.115 2L6.11499 12L16.115 22L17.885 20.23L9.65499 12L17.885 3.77Z"
        fill="black"
      />
    </svg>
  `,
  add: html`
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
    </svg>
  `,
};

export class tfIcon extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML = html`
      <style>
        ${style}
      </style>
      <span class="container-icon">${allSvg[this.icon]}</span>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["icon"];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    if (["icon"].includes(name)) {
      const span = this.shadowRoot!.querySelector("div");
      span!.innerHTML = allSvg[this.icon];
    }
  }

  get icon(): IconName {
    return (
      (this.getAttribute("icon") as IconName) || IconName["arrow-forward-ios"]
    );
  }

  set icon(value) {
    this.setAttribute("icon", value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tf-icon": tfIcon;
  }
}

customElements.define("tf-icon", tfIcon);
