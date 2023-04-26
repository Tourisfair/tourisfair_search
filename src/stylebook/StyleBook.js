import { html } from '../components/tfBase.js';
import { styleTfBadge } from './StyleTfBadge.js';
import { styleTfBudget } from './StyleTfBudget.js';
import { styleTfButton } from './StyleTfButton.js';
import { styleTfCardDetails } from './StyleTfCardDetails.js';
import { styleTfCardHeaderImage } from './StyleTfCardHeaderImage.js';
import { styleTfChip } from './StyleTfChip.js';
import { styleTfFavorite } from './StyleTfFavorite.js';

export const getProp = (data) => data || '';
export const escapeHTML = (str) =>
  str.replace(/</g, '&lt;').replace(/>/g, '&gt;');

export class StyleVariant extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/stylebook/stylebook.css" />
      <div class="style-variant-card">
        <slot name="title"></slot>
        <slot name="description"></slot>
        <div class="style-variant">
          <slot></slot>
        </div>
        <slot name="code"></slot>
      </div>
    `;
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['name', 'description', 'data', 'tag'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      name === 'name' && this.updateName();
      name === 'description' && this.updateDescription();
      name === 'data' && this.updateData();
    }
  }

  updateName() {
    const titleElem = this.querySelector('h3');
    if (titleElem) {
      titleElem.innerHTML = this.name;
    } else {
      this.innerHTML += html`
        <h3 slot="title" style="display: inline;">${this.name}</h3>
      `;
    }
  }

  updateDescription() {
    const descriptionElem = this.querySelector('p');
    if (descriptionElem) {
      descriptionElem.innerHTML = this.description;
    } else {
      this.innerHTML += html` <p slot="description">${this.description}</p> `;
    }
  }

  updateData() {
    const variant = this.buildVariant();
    const shouldBe = this.shouldBe(variant);
    this.innerHTML += html`
      <div slot="code">
        <pre><code>${escapeHTML(variant.outerHTML)}</code></pre>
        ${variant.outerHTML !== shouldBe
          ? html`<p>Should be:</p>
              <pre class="error"><code>${escapeHTML(shouldBe)}</code></pre>`
          : ''}
      </div>
    `;
    this.appendChild(variant);
  }

  buildVariant() {
    const variant = document.createElement(this.tag);
    const data = JSON.parse(this.data);
    for (const key in data) {
      variant[key] = data[key];
    }
    variant.innerHTML += variant.shadowRoot
      ? variant.content || ''
      : 'Not defined yet';
    return variant;
  }

  shouldBe() {
    const data = JSON.parse(this.data);
    const expected = Object.keys(data)
      .map((key) => (key !== 'content' ? key + '="' + data[key] + '"' : ''))
      .join(' ')
      .trim();
    return (
      `<${this.tag} ${expected}>` +
      (data.content || 'Sample content') +
      `</${this.tag}>`
    );
  }

  setVariantProps(props) {
    this.name = props.name;
    this.description = props.description;
    this.data = JSON.stringify(props.data);
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get description() {
    return this.getAttribute('description');
  }

  set description(value) {
    this.setAttribute('description', value);
  }

  get data() {
    return this.getAttribute('data');
  }

  set data(value) {
    this.setAttribute('data', value);
  }
}

export class StyleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/stylebook/stylebook.css" />
      <details class="style-component" open>
        <summary><slot name="title"></slot></summary>
        <slot></slot>
      </details>
    `;
  }

  connectedCallback() {
    this.innerHTML = html`
      <h2 slot="title" style="display: inline;">${this.component}</h2>
      <p>${this.description}</p>
      ${this.innerHTML}
    `;
  }

  static get observedAttributes() {
    return ['ref', 'description', 'tag', 'component', 'variants'];
  }

  addVariant(props) {
    const styleVariant = document.createElement('style-variant');
    styleVariant.tag = this.tag;
    styleVariant.setVariantProps(props);
    this.shadowRoot.querySelector('.style-component').appendChild(styleVariant);
    return this;
  }

  get ref() {
    return this.getAttribute('ref');
  }

  set ref(val) {
    this.setAttribute('ref', val);
  }

  get description() {
    return this.getAttribute('description');
  }

  set description(val) {
    this.setAttribute('description', val);
  }

  get tag() {
    return this.getAttribute('tag');
  }

  set tag(val) {
    this.setAttribute('tag', val);
  }

  get component() {
    return this.getAttribute('component');
  }

  set component(val) {
    this.setAttribute('component', val);
  }

  get variants() {
    return this.getAttribute('variants');
  }

  set variants(val) {
    this.setAttribute('variants', val);
  }
}

export class StyleBook extends HTMLElement {
  constructor() {
    const styleBook = document.querySelector('style-book');
    if (styleBook) return styleBook;
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/stylebook/stylebook.css" />
      <nav class="navbar">
        <ul></ul>
      </nav>
      <div class="style-book"></div>
    `;
    this._components = [];
  }

  connectedCallback() {}

  addComponent(props) {
    const shadowRoot = this.shadowRoot.querySelector('.style-book');
    const component = this.buildComponent(props);
    props.variants?.map((variant) => component.addVariant(variant));
    shadowRoot.appendChild(component);
    return this;
  }

  buildComponent(props) {
    const component = this.getComponentByTag(props.tag);
    StyleComponent.observedAttributes.forEach((attr) => {
      component[attr] = props[attr];
    });
    return component;
  }

  getComponentByTag(tag) {
    let component = this._components.find((component) => component.tag === tag);
    if (!component) {
      component = document.createElement('style-component');
      component.tag = tag;
      this._components.push(component);
      // TODO : add to nav
    }
    return component;
  }

  addHTML(html) {
    this.shadowRoot.querySelector('.style-book').innerHTML += html;
    // TODO : add to nav
  }
}

/**
 * Stylebook
 */
window.customElements.define('style-variant', StyleVariant);
window.customElements.define('style-component', StyleComponent);
window.customElements.define('style-book', StyleBook);

const styleBook = document.createElement('style-book');
styleTfButton(styleBook);
styleTfChip(styleBook);
styleTfBudget(styleBook);
styleTfBadge(styleBook);
styleTfFavorite(styleBook);
styleTfCardHeaderImage(styleBook);
styleTfCardDetails(styleBook);
document.body.appendChild(styleBook);
