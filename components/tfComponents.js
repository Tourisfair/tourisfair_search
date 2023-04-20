import { tfBase, html, css } from "./tfBase.js";
import {tfButton } from "./tfButton.js";
import {tfChip } from "./tfChip.js";

window.customElements.define('tf-base', tfBase);
window.customElements.define('tf-button', tfButton);
window.customElements.define('tf-chip', tfChip);
window.html = html;
window.css = css;