import { StyleBook } from './StyleBook.js';
import { StyleComponentProps } from './StyleComponent.js';
import { StyleVariantProps } from './StyleVariant.js';

const tfInputTextIconDefault: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component with icon.',
  data: {
    icon: 'true',
    status: 'default',
    pictogramme: 'account_circle',
    content: 'default',
    label: 'default',
  },
};

const tfInputTextDefault: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component no icon.',
  data: {
    icon: 'false',
    status: 'default',
    content: 'default',
    label: 'default',
  },
};

const tfInputTextIconDisabled: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component disabled with icon.',
  data: {
    icon: 'true',
    status: 'disabled',
    pictogramme: '',
    content: 'default',
    label: 'default',
  },
};

const tfInputTextDisabled: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component disabled no icon.',
  data: {
    icon: 'false',
    status: 'disabled',
    content: 'default',
    label: 'default',
  },
};

const tfInputTextIconError: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component error with icon.',
  data: {
    icon: 'true',
    status: 'error',
    pictogramme: '',
    content: 'default',
    label: 'default',
  },
};

const tfInputTextError: StyleVariantProps<'tf-input-text'> = {
  name: 'tf input text',
  tag: 'tf-input-text',
  description: 'A text input component error no icon.',
  data: {
    icon: 'false',
    status: 'error',
    content: 'default',
    label: 'default',
  },
};

const meta: StyleComponentProps<'tf-input-text'> = {
  ref: 'tf-input-text',
  tag: 'tf-input-text',
  description: 'Tourisfair input text component. It is used to showcase an input text',
  component: 'Tourisfair Input Text',
  variants: [
    tfInputTextIconDefault,
    tfInputTextDefault,
    tfInputTextIconDisabled,
    tfInputTextDisabled,
    tfInputTextIconError,
    tfInputTextError,
  ],
};

export const styleTfInputText = (styleBook: StyleBook) => styleBook.addComponent(meta);
