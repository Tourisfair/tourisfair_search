import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const defaultCardHeaderImage: StyleVariantProps<'tf-card-header-image'> = {
  name: 'Default Card Header Image',
  tag: 'tf-card-header-image',
  description: '',
  data: {
    src: '/assets/image.png',
  },
};

const meta: StyleComponentProps<'tf-card-header-image'> = {
  ref: 'tf-card-header-image',
  tag: 'tf-card-header-image',
  description:
    'Tourisfair card header image component, showing the header image of a card.',
  component: 'Tourisfair Card Header Image',
  variants: [defaultCardHeaderImage],
};

export const styleTfCardHeaderImage = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
