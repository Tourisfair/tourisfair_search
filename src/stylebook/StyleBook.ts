import { html } from '../components/tfBase.js';
import { styleTfBadge } from './StyleTfBadge.js';
import { styleTfBudget } from './StyleTfBudget.js';
import { styleTfButton } from './StyleTfButton.js';
import { styleTfCardDetails } from './StyleTfCardDetails.js';
import { styleTfCardHeaderImage } from './StyleTfCardHeaderImage.js';
import { styleTfChip } from './StyleTfChip.js';
import { styleTfFavorite } from './StyleTfFavorite.js';

export const escapeHTML = (htm: string) =>
  htm.replace(/</g, '&lt;').replace(/>/g, '&gt;');

export type StyleVariantDataProps = Record<string, any>;

export interface StyleVariantProps<K extends keyof HTMLElementTagNameMap> {
  name: string;
  description: string;
  tag: K;
  data: StyleVariantDataProps | StyleVariantDataProps[];
}

export interface StyleComponentProps<K extends keyof HTMLElementTagNameMap> {
  ref: string;
  description: string;
  tag: K;
  component: string;
  variants: StyleVariantProps<K>[];
}

export class StyleVariant<
  K extends keyof HTMLElementTagNameMap
> extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = html`
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

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      name === 'name' && this.updateName();
      name === 'description' && this.updateDescription();
      name === 'data' && this.updateData();
    }
  }

  updateName() {
    const titleElem = this.querySelector('h3');
    if (titleElem) {
      titleElem.innerHTML = this.name!;
    } else {
      this.innerHTML += html`
        <h3 slot="title" style="display: inline;">${this.name!}</h3>
      `;
    }
  }

  updateDescription() {
    const descriptionElem = this.querySelector('p');
    if (descriptionElem) {
      descriptionElem.innerHTML = this.description!;
    } else {
      this.innerHTML += html` <p slot="description">${this.description!}</p> `;
    }
  }

  updateData() {
    const variant = this.buildVariant(
      this.tag!,
      this.data!
    ) as unknown as HTMLElementTagNameMap[K];
    const shouldBe = this.shouldBe();
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

  buildVariant(tag: K, data: string) {
    const variant = document.createElement(tag);
    const parsedData: StyleVariantDataProps = JSON.parse(
      data
    ) as unknown as StyleVariantDataProps;
    for (const key in parsedData) {
      variant[key] = parsedData[key];
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

  setVariantProps(props: StyleVariantProps<K>) {
    this.name = props.name;
    this.description = props.description;
    this.data = JSON.stringify(props.data);
  }

  get name() {
    return this.getAttribute('name')!;
  }

  set name(value: string) {
    this.setAttribute('name', value);
  }

  get description() {
    return this.getAttribute('description')!;
  }

  set description(value: string) {
    this.setAttribute('description', value);
  }

  get data() {
    return this.getAttribute('data')!;
  }

  set data(value: string) {
    this.setAttribute('data', value);
  }

  get tag(): HTMLElementTagNameMap[K] {
    return this.getAttribute('tag') as HTMLElementTagNameMap[K];
  }

  set tag(value: string) {
    this.setAttribute('tag', value);
  }
}

export class StyleComponent<
  K extends keyof HTMLElementTagNameMap
> extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = html`
      <link rel="stylesheet" href="/stylebook/stylebook.css" />
      <details class="style-component">
        <summary><slot name="title"></slot></summary>
        <slot></slot>
      </details>
    `;
  }

  connectedCallback() {
    this.innerHTML = html`
      <h2 slot="title" style="display: inline;">${this.component!}</h2>
      <p>${this.description!}</p>
      ${this.innerHTML!}
    `;
  }

  static get observedAttributes() {
    return ['ref', 'description', 'tag', 'component', 'variants'];
  }

  addVariant(props: StyleVariantProps<K>) {
    const styleVariant = document.createElement(
      'style-variant'
    ) as StyleVariant<K>;
    styleVariant.tag = this.tag!;
    styleVariant.setVariantProps(props);
    this.shadowRoot!.querySelector('.style-component')!.appendChild(
      styleVariant
    );
    return this;
  }

  get ref() {
    return this.getAttribute('ref')!;
  }

  set ref(value: string) {
    this.setAttribute('ref', value);
  }

  get description() {
    return this.getAttribute('description')!;
  }

  set description(value) {
    this.setAttribute('description', value);
  }

  get tag() {
    return this.getAttribute('tag')!;
  }

  set tag(value) {
    this.setAttribute('tag', value);
  }

  get component() {
    return this.getAttribute('component')!;
  }

  set component(value) {
    this.setAttribute('component', value);
  }

  get variants() {
    return this.getAttribute('variants')!;
  }

  set variants(value) {
    this.setAttribute('variants', value);
  }
}

export class StyleBook extends HTMLElement {
  private _components: StyleComponent<keyof HTMLElementTagNameMap>[] = [];

  constructor() {
    const styleBook = document.querySelector(
      'style-book'
    ) as unknown as StyleBook;
    if (styleBook) return styleBook;
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = html`
      <link rel="stylesheet" href="/stylebook/stylebook.css" />
      <nav class="navbar">
        <ul></ul>
      </nav>
      <div class="style-book"></div>
    `;
  }

  connectedCallback() {}

  addComponent<K extends keyof HTMLElementTagNameMap>(
    props: StyleComponentProps<K>
  ) {
    const stylebookElem = this.shadowRoot!.querySelector('.style-book')!;
    const component = this.buildComponent(props);
    props.variants?.map((variant) => component.addVariant(variant));
    stylebookElem.appendChild(component);
    return this;
  }

  buildComponent<K extends keyof HTMLElementTagNameMap>(
    props: StyleComponentProps<K>
  ) {
    const component = this.getComponentByTag(props.tag);
    component.ref = props.ref;
    component.description = props.description;
    component.component = props.component;
    component.variants = JSON.stringify(props.variants);
    component.tag = props.tag;
    return component;
  }

  getComponentByTag<K extends keyof HTMLElementTagNameMap>(tag: K) {
    let component = this._components.find((component) => component.tag === tag);
    if (!component) {
      component = document.createElement(
        'style-component'
      ) as StyleComponent<K>;
      component.tag = tag;
      this._components.push(component);
      // TODO : add to nav
    }
    return component;
  }

  addHTML(html: string) {
    this.shadowRoot!.querySelector('.style-book')!.innerHTML += html;
    // TODO : add to nav
  }
}

/**
 * Stylebook
 */
window.customElements.define('style-variant', StyleVariant);
window.customElements.define('style-component', StyleComponent);
window.customElements.define('style-book', StyleBook);

const styleBook = document.createElement('style-book') as StyleBook;
styleTfButton(styleBook);
styleTfChip(styleBook);
styleTfBudget(styleBook);
styleTfBadge(styleBook);
styleTfFavorite(styleBook);
styleTfCardHeaderImage(styleBook);
styleTfCardDetails(styleBook);
document.body.appendChild(styleBook);
