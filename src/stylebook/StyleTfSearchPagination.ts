import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const pagination: StyleVariantProps<'tf-pagination'> = {
  name: 'pagination total 10',
  tag: 'tf-pagination',
  description: 'total pagination',
  data: {
    current:'',
    total: '10',
  },
};

const meta: StyleComponentProps<'tf-pagination'> = {
  ref: 'tf-pagination',
  description: 'Tourisfair pagination component. It is used to show the pagination.',
  tag: 'tf-pagination',
  component: 'Tourisfair pagination',
  variants: [pagination],
};

export const styleTfBudget = (styleBook: StyleBook) => styleBook.addComponent(meta);
