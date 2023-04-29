import { StyleBook, StyleComponentProps } from './StyleBook';

const meta: StyleComponentProps<'tf-card-header-image'> = {
  ref: 'tf-card-header-image',
  tag: 'tf-card-header-image',
  description:
    'Tourisfair card header image component, showing the header image of a card.',
  component: 'Tourisfair Card Header Image',
  variants: [],
};

export const styleTfCardHeaderImage = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
