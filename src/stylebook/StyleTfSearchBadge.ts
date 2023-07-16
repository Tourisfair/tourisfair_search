import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const ecoBadge: StyleVariantProps<'tf-badge'> = {
  name: 'Green badge',
  tag: 'tf-badge',
  description: 'Badge meaning ecologicial activity',
  data: {},
};

const meta: StyleComponentProps<'tf-badge'> = {
  ref: 'tf-badge',
  tag: 'tf-badge',
  description: 'Tourisfair badge component. It is used to showcase an ecological activity',
  component: 'Tourisfair Badge',
  variants: [ecoBadge],
};

export const styleTfBadge = (styleBook: StyleBook) => styleBook.addComponent(meta);
