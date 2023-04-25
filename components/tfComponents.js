import { tfBase, html, css } from "./tfBase.js";
import {tfButton } from "./tfButton.js";
import {tfChip } from "./tfChip.js";
import {tfBudget } from "./tfBudget.js";

window.customElements.define('tf-base', tfBase);
window.customElements.define('tf-button', tfButton);
window.customElements.define('tf-chip', tfChip);
window.customElements.define('tf-budget', tfBudget);
window.html = html;
window.css = css;