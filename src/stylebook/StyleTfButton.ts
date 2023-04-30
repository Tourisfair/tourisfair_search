import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const defaultBtn: StyleVariantProps<'tf-button'> = {
  name: 'Small Default Button',
  tag: 'tf-button',
  description:
    'The default button is small, with no icon, and based on the primary variant.',
  data: {
    variant: 'primary',
    state: 'default',
    content: 'Default',
  },
};

const primaryNone: StyleVariantProps<'tf-button'> = {
  name: 'Small Primary None',
  tag: 'tf-button',
  description: '',
  data: {
    variant: 'primary',
    state: 'default',
    content: 'Primary',
  },
};

const primaryActive: StyleVariantProps<'tf-button'> = {
  name: 'Small Primary Active',
  tag: 'tf-button',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'active',
  },
};

const primaryFocus: StyleVariantProps<'tf-button'> = {
  name: 'Small Primary Focus',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'focus',
  },
};

const primaryDisabled: StyleVariantProps<'tf-button'> = {
  name: 'Small Primary Disabled',
  description: '',
  data: {
    ...primaryNone.data,
    state: 'disabled',
  },
};

const secondaryNone: StyleVariantProps<'tf-button'> = {
  name: 'Small Secondary None',
  tag: 'tf-button',
  description: '',
  data: {
    variant: 'secondary',
    state: 'default',
    content: 'Secondary',
  },
};

const secondaryActive: StyleVariantProps<'tf-button'> = {
  name: 'Small Secondary Active',
  tag: 'tf-button',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'active',
  },
};

const secondaryFocus: StyleVariantProps<'tf-button'> = {
  name: 'Small Secondary Focus',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'focus',
  },
};

const secondaryDisabled: StyleVariantProps<'tf-button'> = {
  name: 'Small Secondary Disabled',
  description: '',
  data: {
    ...secondaryNone.data,
    state: 'disabled',
  },
};

const tertiaryNone: StyleVariantProps<'tf-button'> = {
  name: 'Small Tertiary None',
  tag: 'tf-button',
  description: '',
  data: {
    variant: 'tertiary',
    state: 'default',
    content: 'Tertiary',
  },
};

const tertiaryActive: StyleVariantProps<'tf-button'> = {
  name: 'Small Tertiary Active',
  tag: 'tf-button',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'active',
  },
};

const tertiaryFocus: StyleVariantProps<'tf-button'> = {
  name: 'Small Tertiary Focus',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'focus',
  },
};

const tertiaryDisabled: StyleVariantProps<'tf-button'> = {
  name: 'Small Tertiary Disabled',
  description: '',
  data: {
    ...tertiaryNone.data,
    state: 'disabled',
  },
};

const meta: StyleComponentProps<'tf-button'> = {
  ref: 'tf-button',
  tag: 'tf-button',
  description:
    'A generic button with 3 variants: primary, secondary and tertiary.',
  component: 'Tourisfair Button',
  variants: [
    defaultBtn,
    primaryNone,
    primaryActive,
    primaryFocus,
    primaryDisabled,
    secondaryNone,
    secondaryActive,
    secondaryFocus,
    secondaryDisabled,
    tertiaryNone,
    tertiaryActive,
    tertiaryFocus,
    tertiaryDisabled,
  ],
};

export const styleTfButton = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
