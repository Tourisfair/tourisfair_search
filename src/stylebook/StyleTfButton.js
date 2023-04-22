const defaultBtn = {
  name: 'Small Default Button',
  description:
    'The default button is small, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    state: 'default',
    content: 'Default',
  },
};

const primaryNone = {
  name: 'Small Primary None',
  description: '',
  data: {
    variant: 'primary',
    state: 'default',
    content: 'Primary',
  },
};

const primaryActive = {
  name: 'Small Primary Active',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'active',
  },
};

const secondaryNone = {
  name: 'Small Secondary None',
  description: '',
  data: {
    variant: 'secondary',
    state: 'default',
    content: 'Secondary',
  },
};

const secondaryActive = {
  name: 'Small Secondary Active',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'active',
  },
};

const tertiaryNone = {
  name: 'Small Tertiary None',
  description: '',
  data: {
    variant: 'tertiary',
    state: 'default',
    content: 'Tertiary',
  },
};

const tertiaryActive = {
  name: 'Small Tertiary Active',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'active',
  },
};

const meta = {
  ref: 'tf-button',
  description:
    'A generic button with 3 variants: primary, secondary and tertiary.',
  tag: 'tf-button',
  component: 'Tourisfair Button',
  variants: [
    defaultBtn,
    primaryNone,
    primaryActive,
    secondaryNone,
    secondaryActive,
    tertiaryNone,
    tertiaryActive,
  ],
};

export const styleTfButton = (styleBook) => styleBook.addComponent(meta);
