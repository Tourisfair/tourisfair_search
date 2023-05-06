import { css, html, tfBase } from './tfBase.js'

const tfCardDetailsStyle = css``

export class tfCardDetails extends tfBase {
  constructor () {
    super()
    this.shadowRoot!.innerHTML += html`
      <style>
        ${tfCardDetailsStyle}
      </style>
      <div></div>
    `
  }

  connectedCallback () {}

  attributeChangedCallback (
    _name: string,
    _oldValue: string,
    _newValue: string
  ) {}
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-card-details': tfCardDetails
  }
}

customElements.define('tf-card-details', tfCardDetails)
