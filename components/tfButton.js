import {html, css, tfBase} from './tfBase.js';

export class tfButton extends tfBase {
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadowRoot.innerHTML += html`
            <link rel="stylesheet" href="/components/styles/tf-button.css" />
            <button class="primary">
                <slot></slot>
            </button>
        `;
    }
};