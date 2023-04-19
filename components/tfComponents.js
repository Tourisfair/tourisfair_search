import { tfBase, html, css } from "./tfBase.js";
import {tfButton } from "./tfButton.js";

window.customElements.define('tf-base', tfBase);
window.customElements.define('tf-button', tfButton);
window.html = html;
window.css = css;