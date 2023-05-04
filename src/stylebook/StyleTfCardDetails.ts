import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const defaultCardDetails: StyleVariantProps<'tf-card-details'> = {
  name: 'Default Card Header Image',
  tag: 'tf-card-details',
  description: '',
  data: {
    
  },
};//

const meta: StyleComponentProps<'tf-card-details'> = {
  ref: 'tf-card-details',
  tag: 'tf-card-details',
  description:
    'Tourisfair card details are used to display information about an activity or a place.',
  component: 'Tourisfair Card Details',
  variants: [defaultCardDetails],
};

export const styleTfCardDetails = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
