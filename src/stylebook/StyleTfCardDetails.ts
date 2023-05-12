import { html,css } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const StyletfCardDetailsStyle = css`

  .read{
    color: var(--tf-sys-read-more);
    text-decoration: underline;
  }
`;
const defaultCardDetails: StyleVariantProps<'tf-card-details'> = {
  name: 'Default Card Details',
  tag: 'tf-card-details',
  description: '',
  data: {
    title: 'SAGRADA FAMILIA',
    subtitle: 'C/ de Mallorca, 401, 08013',
    content: html`
    <style>
          ${StyletfCardDetailsStyle}
        </style>
      <tf-budget level="3" slot="budget"></tf-budget>
      <tf-chip type="activity" slot="chip">Churches</tf-chip>
      <tf-chip type="poi" slot="chip">History</tf-chip>
      <p slot="description">
        The Expiatory Temple of the Sagrada Familia, known simply as the Sagrada Familia, is a
        Catholic basilica in Barcelona, designed by architect Antoni Gaudí.<span class="read">Read more...</span>
      </p>
      <tf-button variant="secondary" slot="actions">Book Now</tf-button>
    `,
  },
};

const meta: StyleComponentProps<'tf-card-details'> = {
  ref: 'tf-card-details',
  tag: 'tf-card-details',
  description:
    'Tourisfair card details are used to display information about an activity or a place.',
  component: 'Tourisfair Card Details',
  variants: [defaultCardDetails],
};

export const styleTfCardDetails = (styleBook: StyleBook) => styleBook.addComponent(meta);
