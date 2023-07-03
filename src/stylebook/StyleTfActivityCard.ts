import { html, css } from '../components.js';
import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const StyletfCardDetailsStyle = css`
  .read {
    color: var(--tf-sys-read-more);
    text-decoration: underline;
    font-weight: 700;
  }
`;
const defaultActivityCard: StyleVariantProps<'tf-activity-card'> = {
  name: 'Default Activity Card',
  tag: 'tf-activity-card',
  description: '',
  data: {
    title: 'SAGRADA FAMILIA',
    subtitle: 'C/ de Mallorca, 401, 08013',
    content: html`
      <style>
        ${StyletfCardDetailsStyle}
      </style>

      <tf-card-header-image slot="image"></tf-card-header-image>
      <tf-budget level="3" slot="budget"></tf-budget>
      <tf-chip type="activity" slot="chip">Churches</tf-chip>
      <tf-chip type="poi" slot="chip">History</tf-chip>
      <p slot="description">
        The Expiatory Temple of the Sagrada Familia, known simply as the Sagrada Familia, is a
        Catholic basilica in Barcelona, designed by architect Antoni Gaudí.
        <span class="read">Read more...</span>
      </p>
      <tf-button variant="secondary" slot="actions">Book Now</tf-button>
    `,
    data: {
      src: '/assets/image.png',
    },
  },
};
//
const meta: StyleComponentProps<'tf-activity-card'> = {
  ref: 'tf-activity-card',
  tag: 'tf-activity-card',
  description:
    'Tourisfair activity card are used to display information about an activity or a place.',
  component: 'Tourisfair Activity Card',
  variants: [defaultActivityCard],
};

export const StyleTfActivityCard = (styleBook: StyleBook) => styleBook.addComponent(meta);
