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
    secondaryNone,
    secondaryActive,
    tertiaryNone,
    tertiaryActive,
  ],
};

export const styleTfButton = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
