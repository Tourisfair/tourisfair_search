import {html, css, tfBase} from './tfBase.js';

export class tfButton extends tfBase {
    constructor(){
        super();
    }

    connectedCallback(){
        this.shadowRoot.innerHTML += html`
            <link rel="stylesheet" href="/components/styles/tf-button.css" />
            <button class="${this.priority}">
                <slot></slot>
            </button>
        `;
    }

    static get observedAttributes(){
        return ['priority']
    }

    // attributeChangedCallback(name, oldValue, newValue){
    //     console.log('attribute changed', name, oldValue, newValue);
    //     console.log(this.shadowRoot)
    //     const buttonElem = this.shadowRoot.querySelector('button');
    //     console.log(buttonElem);
    //     if (name === 'priority'){
    //         buttonElem.classList.remove(oldValue);
    //         buttonElem.classList.add(newValue);
    //     }
    // }

    get priority(){
        return this.getAttribute('priority') || 'primary';
    }

    set priority(value){
        this.setAttribute('priority', value);
    }
};