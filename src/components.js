import { tfBadge } from './components/tfBadge.js';
import { tfBase, html, css } from './components/tfBase.js';
import { tfBudget } from './components/tfBudget.js';
import { tfButton } from './components/tfButton.js';
import { tfChip } from './components/tfChip.js';

window.customElements.define('tf-base', tfBase);
window.customElements.define('tf-button', tfButton);
window.customElements.define('tf-chip', tfChip);
window.customElements.define('tf-budget', tfBudget);
window.customElements.define('tf-badge', tfBadge);
window.html = html;
window.css = css;

