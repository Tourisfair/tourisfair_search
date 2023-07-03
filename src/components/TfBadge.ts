import { html, TfBase } from './TfBase.js';

export class TfBadge extends TfBase {
  constructor() {
    super();
    this.shadowRoot &&
      (this.shadowRoot.innerHTML += html`
        <div>
          <svg
            width="32"
            height="48"
            viewBox="0 0 32 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H32V48L15.5 40.356L0 48V0Z" fill="#56A359" />
            <g clip-path="url(#clip0_89_103)">
              <path
                d="M13.4483 7.00137C13.3323 6.99757 13.2182 7.00627 13.1063 7.0313C12.1815 7.23809 11.615 8.44373 10.7807 8.83971C9.93255 9.24215 8.6224 8.93044 7.89388 9.50267C7.16185 10.0777 7.18095 11.4048 6.59639 12.1248C6.01479 12.8413 4.69382 13.1164 4.28465 13.9508C3.88213 14.7714 4.48266 15.9571 4.27243 16.8668C4.06882 17.7478 2.99985 18.5586 2.99985 19.5003C2.99985 20.442 4.06884 21.2528 4.27243 22.1339C4.48266 23.0435 3.8819 24.229 4.28442 25.0496C4.69371 25.8839 6.01468 26.1589 6.59639 26.8756C7.18097 27.5956 7.16171 28.9228 7.89388 29.4978C8.62229 30.0698 9.93252 29.7583 10.7805 30.1607C11.615 30.5567 12.1814 31.7624 13.1063 31.9691C14.0019 32.1694 15.042 31.3295 15.9994 31.3295C16.9566 31.3295 17.9967 32.1694 18.8924 31.9691C19.8172 31.7623 20.3835 30.5567 21.2178 30.1607C22.0659 29.7583 23.3762 30.07 24.1046 29.4978C24.8366 28.9227 24.8175 27.5957 25.4021 26.8756C25.9838 26.1591 27.3048 25.884 27.714 25.0496C28.1166 24.229 27.5158 23.0435 27.726 22.1339C27.9297 21.2529 28.9989 20.442 28.9989 19.5003C28.9989 18.5586 27.9296 17.7479 27.726 16.8668C27.516 15.9571 28.1166 14.7716 27.714 13.951C27.3049 13.1167 25.9839 12.8416 25.4023 12.125C24.8177 11.4049 24.8368 10.0778 24.1048 9.50279C23.3763 8.93071 22.0662 9.24225 21.218 8.83982C20.3837 8.44388 19.8172 7.23817 18.8924 7.03142C17.9968 6.83113 16.9566 7.67126 15.9994 7.67126C15.1617 7.67126 14.2605 7.02809 13.4484 7.00149L13.4483 7.00137ZM15.999 8.74222C22.0393 8.74222 26.936 13.5588 26.936 19.5002C26.936 25.4417 22.0393 30.2583 15.999 30.2583C9.95888 30.2583 5.06232 25.4417 5.06232 19.5002C5.06232 13.5588 9.95888 8.74222 15.999 8.74222Z"
                fill="white"
              />
              <path
                d="M11.7665 20.9093H9.09365V19.4459H11.6153V18.5133H9.09365V17.1142H11.7665V16.1132H7.85934V21.9143H11.7665V20.9093Z"
                fill="white"
              />
              <path
                d="M15.274 22.0144C16.7208 22.0144 17.7304 21.1943 17.8693 19.8998H16.6677C16.537 20.5872 16.0097 21.0093 15.2781 21.0093C14.3341 21.0093 13.7414 20.2455 13.7414 19.0074C13.7414 17.7852 14.3422 17.0173 15.2741 17.0173C15.9934 17.0173 16.5492 17.4837 16.6636 18.1952H17.8652C17.7712 16.8967 16.6923 16.0123 15.274 16.0123C13.5656 16.0123 12.4827 17.142 12.4827 19.0114C12.4827 20.8847 13.5576 22.0144 15.274 22.0144Z"
                fill="white"
              />
              <path
                d="M21.2945 16.0119C19.5453 16.0119 18.45 17.1657 18.45 19.015C18.45 20.8604 19.5453 22.0141 21.2945 22.0141C23.0396 22.0141 24.1391 20.8603 24.1391 19.015C24.1391 17.1657 23.0396 16.0119 21.2945 16.0119ZM21.2945 17.025C22.259 17.025 22.8763 17.7969 22.8763 19.0151C22.8763 20.2291 22.2591 20.9971 21.2945 20.9971C20.3259 20.9971 19.7088 20.2292 19.7088 19.0151C19.7088 17.797 20.33 17.025 21.2945 17.025Z"
                fill="white"
              />
              <path
                d="M17.219 13.15L15.9998 13.4936C15.9998 12.7429 16.5055 12.0831 17.2391 11.8763L18.4583 11.5325C18.4583 12.2832 17.9526 12.9432 17.219 13.15Z"
                fill="white"
              />
              <path
                d="M14.7595 11.8761L13.5403 11.5325C13.5403 12.2832 14.046 12.9431 14.7796 13.1499L15.9988 13.4936C15.9988 12.7429 15.4931 12.0829 14.7595 11.8761Z"
                fill="white"
              />
              <path
                d="M17.219 14.622L15.9998 14.9656C15.9998 14.2149 16.5055 13.5551 17.2391 13.3483L18.4583 13.0045C18.4583 13.7552 17.9526 14.4152 17.219 14.622Z"
                fill="white"
              />
              <path
                d="M14.7595 13.3481L13.5403 13.0045C13.5403 13.7552 14.046 14.415 14.7796 14.6218L15.9988 14.9656C15.9988 14.2149 15.4931 13.5549 14.7595 13.3481Z"
                fill="white"
              />
              <path
                d="M15.9994 12.5185C15.2414 11.7729 15.2414 10.564 15.9994 9.81846C16.7574 10.564 16.7574 11.7729 15.9994 12.5185Z"
                fill="white"
              />
              <path
                d="M9.4518 26.0881V25.2322H10.3511V24.872H9.4518V24.2888H10.4369V23.9136H8.98914V26.0881L9.4518 26.0881Z"
                fill="#F8FBFC"
              />
              <path
                d="M11.1749 24.2696H11.5686C11.7984 24.2696 11.9424 24.4053 11.9424 24.6162C11.9424 24.8317 11.8061 24.9628 11.5732 24.9628H11.1749V24.2696ZM11.1749 25.2929H11.5456L11.9577 26.0885H12.4817L12.016 25.225C12.2703 25.1271 12.4173 24.886 12.4173 24.6072C12.4173 24.1777 12.1263 23.914 11.6176 23.914H10.7122V26.0885H11.1749L11.1749 25.2929Z"
                fill="#F8FBFC"
              />
              <path d="M13.1843 26.0883V23.9138H12.7216V26.0883H13.1843Z" fill="#F8FBFC" />
              <path
                d="M15.0191 25.7107H14.0172V25.1621H14.9624V24.8125H14.0172V24.2881H15.0191V23.9129H13.5545V26.0874H15.0191V25.7107Z"
                fill="#F8FBFC"
              />
              <path
                d="M15.7996 26.0883V24.6642H15.8134L16.8475 26.0883H17.2305V23.9138H16.7877V25.3303H16.7755L15.7429 23.9138H15.3568V26.0883H15.7996Z"
                fill="#F8FBFC"
              />
              <path
                d="M17.5998 23.9136V26.0882H18.4439C19.1073 26.0882 19.4979 25.6828 19.4979 24.9926C19.4979 24.3024 19.1073 23.9136 18.4439 23.9136L17.5998 23.9136ZM18.0624 24.2888H18.3887C18.7963 24.2888 19.0261 24.539 19.0261 24.9941C19.0261 25.4643 18.8024 25.7114 18.3887 25.7114H18.0624V24.2888Z"
                fill="#F8FBFC"
              />
              <path
                d="M21.2221 25.7106H20.2554V23.9128H19.7927V26.0874H21.2221V25.7106Z"
                fill="#F8FBFC"
              />
              <path
                d="M22.2386 26.0883V25.2761L23.0093 23.9138H22.5129L22.0165 24.8421H22.0058L21.5109 23.9138H21.0069L21.776 25.2761V26.0883H22.2386Z"
                fill="#F8FBFC"
              />
            </g>
            <defs>
              <clipPath id="clip0_89_103">
                <rect width="26" height="25" fill="white" transform="translate(3 7)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      `);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tf-badge': TfBadge;
  }
}

customElements.define('tf-badge', TfBadge);
