import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const level1Budget: StyleVariantProps<'tf-budget'> = {
  name: 'Budget level 1',
  tag: 'tf-budget',
  description: 'Very cheap and afordable budget',
  data: {
    level: '1',
    content: '',
  },
};

const level2Budget: StyleVariantProps<'tf-budget'> = {
  name: 'Budget level 2',
  tag: 'tf-budget',
  description: 'Cheap budget',
  data: {
    level: '2',
    content: '',
  },
};

const level3Budget: StyleVariantProps<'tf-budget'> = {
  name: 'Budget level 3',
  tag: 'tf-budget',
  description: 'Medium budget',
  data: {
    level: '3',
    content: '',
  },
};

const level4Budget: StyleVariantProps<'tf-budget'> = {
  name: 'Budget level 4',
  tag: 'tf-budget',
  description: 'Expensive budget',
  data: {
    level: '4',
    content: '',
  },
};

const level5Budget: StyleVariantProps<'tf-budget'> = {
  name: 'Budget level 5',
  tag: 'tf-budget',
  description: 'Very expensive budget',
  data: {
    level: '5',
    content: '',
  },
};

const meta: StyleComponentProps<'tf-budget'> = {
  ref: 'tf-budget',
  description:
    'Tourisfair budget component. It is used to show the budget level of an activity.',
  tag: 'tf-budget',
  component: 'Tourisfair Budget',
  variants: [
    level1Budget,
    level2Budget,
    level3Budget,
    level4Budget,
    level5Budget,
  ],
};

export const styleTfBudget = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
