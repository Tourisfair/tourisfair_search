import { tfBase, html, css } from './components/tfBase.js';
import { tfButton } from './components/tfButton.js';
import { tfChip } from './components/tfChip.js';

window.customElements.define('tf-base', tfBase);
window.customElements.define('tf-button', tfButton);
window.customElements.define('tf-chip', tfChip);
window.html = html;
window.css = css;

