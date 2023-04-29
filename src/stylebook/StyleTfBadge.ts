import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const ecoBadge: StyleVariantProps<'tf-badge'> = {
  name: 'Green badge',
  tag: 'tf-badge',
  description: 'Badge meaning ecologicial activity',
  data: {
    content: '',
  },
};

const meta: StyleComponentProps<'tf-badge'> = {
  ref: 'tf-badge',
  tag: 'tf-badge',
  description:
    'Tourisfair badge component. It is used to showcase an ecological activity',
  component: 'Tourisfair Badge',
  variants: [ecoBadge],
};

export const styleTfBadge = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
