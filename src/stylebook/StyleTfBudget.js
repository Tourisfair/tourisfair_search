const level1Budget = {
  name: 'Budget level 1',
  description: 'Very cheap and afordable budget',
  data: {
    level: '1',
    content: '',
  },
};

const level2Budget = {
  name: 'Budget level 2',
  description: 'Cheap budget',
  data: {
    level: '2',
    content: '',
  },
};

const level3Budget = {
  name: 'Budget level 3',
  description: 'Medium budget',
  data: {
    level: '3',
    content: '',
  },
};

const level4Budget = {
  name: 'Budget level 4',
  description: 'Expensive budget',
  data: {
    level: '4',
    content: '',
  },
};

const level5Budget = {
  name: 'Budget level 5',
  description: 'Very expensive budget',
  data: {
    level: '5',
    content: '',
  },
};

const meta = {
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

export const styleTfBudget = (styleBook) => styleBook.addComponent(meta);
