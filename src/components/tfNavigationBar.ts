import { css, html, tfBase } from "./tfBase.js";

const style = css`
    :host {
        display: block;
        width: 100%;
        height: 100%;
    }

    `;

export class TfNavigationBar extends tfBase {

    constructor() {
        super();
        this.shadowRoot!.innerHTML += html`
            <style>
                ${style}
            </style>
            <nav class="">
                <slot></slot>
            </nav>
        `;
    }
}