import { css, html, tfBase } from "./tfBase.js";

const style = css`
  .indicator {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .round {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 0 4px;
  }

  .active {
    background-color: var(--tf-sys-light-primary);
  }
`;

export class tfCarrouselIndicator extends tfBase {
  constructor() {
    super();
    this.shadowRoot!.innerHTML += html`
      <style>
        ${style}
      </style>
      <section class="indicator">
        <div class="round primary-container"></div>
        <div class="round primary-container"></div>
        <div class="round primary-container"></div>
      </section>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['step'];
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    _newValue: string | null
  ) {
    
    const indicatorElem = this.shadowRoot!.querySelector(".indicator");
    const roundElems = Array.from(
      indicatorElem!.querySelectorAll<HTMLElement>(".round")
    );
      
    const stepToIndex = new Map([
      ["first", 0],
      ["intermediate", 1],
      ["final", 2],
    ]);
    if (name === "step") {
      const index = stepToIndex.get(_newValue!);
      roundElems.forEach((elem, i) =>
        elem.classList.toggle("active", i === index)
      );
    }
  }

  get step() {
    return this.getAttribute("step");
  }

  set step(value) {
    this.setAttribute("step", value!);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "tf-carrousel-indicator": tfCarrouselIndicator;
  }
}

customElements.define("tf-carrousel-indicator", tfCarrouselIndicator);
