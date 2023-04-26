const ecoBadge = {
  name: 'Green badge',
  description: 'Badge meaning ecologicial activity',
  data: {
    content: '',
  },
};

const meta = {
  ref: 'tf-badge',
  description:
    'Tourisfair badge component. It is used to showcase an ecological activity',
  tag: 'tf-badge',
  component: 'Tourisfair Badge',
  variants: [ecoBadge],
};

export const styleTfBadge = (styleBook) => styleBook.addComponent(meta);
