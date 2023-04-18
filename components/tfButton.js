import {html, css, tfBase} from './tfBase.js';

export class tfButton extends tfBase {
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadowRoot.innerHTML = html`
            <button>
                <slot></slot>
            </button>
        `;
    }
};