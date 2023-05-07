import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const defaultBackgroundUp: StyleVariantProps<'tf-main-container'> = {
  name: 'default background corner round up',
  tag: 'tf-main-container',
  description: 'Default background corner round up',
  data: {
    color: 'default',
    direction: 'up',
  },
};

const defaultBackgroundDown: StyleVariantProps<'tf-main-container'> = {
  name: 'default background corner round down',
  tag: 'tf-main-container',
  description: 'Default background corner round down',
  data: {
    color: 'default',
    direction: 'down',
  },
};

const primaryBackgroundUp: StyleVariantProps<'tf-main-container'> = {
  name: 'primary background corner round up',
  tag: 'tf-main-container',
  description: 'Primary background corner round up',
  data: {
    color: 'primary',
    direction: 'up',
  },
};

const primaryBackgroundDown: StyleVariantProps<'tf-main-container'> = {
  name: 'primary background corner round down',
  tag: 'tf-main-container',
  description: 'Primary background corner round down',
  data: {
    color: 'primary',
    direction: 'down',
  },
};

const secondaryBackgroundUp: StyleVariantProps<'tf-main-container'> = {
  name: 'secondary background corner round up',
  tag: 'tf-main-container',
  description: 'Secondary background corner round up',
  data: {
    color: 'secondary',
    direction: 'up',
  },
};

const secondaryBackgroundDown: StyleVariantProps<'tf-main-container'> = {
  name: 'secondary background corner round down',
  tag: 'tf-main-container',
  description: 'Secondary background corner round down',
  data: {
    color: 'secondary',
    direction: 'down',
  },
};

const tertiaryBackgroundUp: StyleVariantProps<'tf-main-container'> = {
  name: 'tertiary background corner round up',
  tag: 'tf-main-container',
  description: 'Tertiary background corner round up',
  data: {
    color: 'tertiary',
    direction: 'up',
  },
};

const tertiaryBackgroundDown: StyleVariantProps<'tf-main-container'> = {
  name: 'tertiary background corner round down',
  tag: 'tf-main-container',
  description: 'Tertiary background corner round down',
  data: {
    color: 'tertiary',
    direction: 'down',
  },
};

const meta: StyleComponentProps<'tf-main-container'> = {
  ref: 'tf-main-container',
  tag: 'tf-main-container',
  description:
      'A  main container with 4 colors: default,primary, secondary and tertiary with corner round up or down',
  component: 'Tourisfair Main Container',
  variants: [
    defaultBackgroundUp,
    defaultBackgroundDown,
    primaryBackgroundUp,
    primaryBackgroundDown,
    secondaryBackgroundUp,
    secondaryBackgroundDown,
    tertiaryBackgroundUp,
    tertiaryBackgroundDown,
  ],
};

export const styleTfMainContainer = (styleBook: StyleBook) => styleBook.addComponent(meta);
