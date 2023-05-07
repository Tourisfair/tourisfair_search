import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';

const meta: StyleComponentProps<'tf-card-details'> = {
  ref: 'tf-card-details',
  tag: 'tf-card-details',
  description:
      'Tourisfair card details are used to display information about an activity or a place.',
  component: 'Tourisfair Card Details',
  variants: [],
};

export const styleTfCardDetails = (styleBook: StyleBook) => styleBook.addComponent(meta);
