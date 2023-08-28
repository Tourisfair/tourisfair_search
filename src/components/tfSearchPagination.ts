import { html, css, TfBase } from './TfBase.js';
const tfStyleSearchPagination = css`
#pages {
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin-top: 20px;
  position: absolute;
}

#previous,
#next {
  margin: 0 4rem; 
  padding: 10px;
  background-color: #ffffff;
  border-radius: 0.7rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  width: 5rem;
}

#previous:hover,
#next:hover {
  background-color: #f5f5f5;
}`;
const tfSearchPagination = (currentPage: number) => {
  try {
    const currentPage = 1; 
    const items = '';
    const totalPages = 60; 
    

    const resultsContainer = document.getElementById('results');
    if (!resultsContainer) return;
    resultsContainer.innerHTML = '';
    items.forEach((item: { name: string | null }) => {
      const itemElement = document.createElement('div');
      itemElement.textContent = item.name; // Ajustez pour afficher les détails que vous voulez
      resultsContainer.appendChild(itemElement);
    });

    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    // Afficher 5 numéros de page à la fois
    const numPagesToShow = 5;
    const startPage = Math.max(1, currentPage - Math.floor(numPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + numPagesToShow - 1);

    for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
      const button = document.createElement('button');
      button.textContent = pageNum.toString();

      if (pageNum === currentPage) {
        button.classList.add('current-page');
      }

      button.addEventListener('click', () => tfSearchPagination(pageNum));
      paginationContainer.appendChild(button);
    }
  } catch (error) {
    console.error('Erreur :', error);
  }
};

class TfPaginate extends TfBase {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot!.innerHTML = html`
      <style>
        ${tfStyleSearchPagination}
      </style>
      <button id="previous">&lt;</button>
      <ul id="pages"></ul>
      <button id="next">&gt;</button>
    `;
  }

  static get observedAttributes(): string[] {
    return ['current', 'total'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'current') this._paginate();
  }

  _paginate() {
    // Votre logique de pagination
  }

  get current(): string {
    return this.getAttribute('current') || '1';
  }

  set current(value: string) {
    this.setAttribute('current', value);
  }

  get total(): string {
    return this.getAttribute('total') || '1';
  }

  set total(value: string) {
    this.setAttribute('total', value);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-pagination': TfPaginate;
  }
}

customElements.define('tf-pagination', TfPaginate);
