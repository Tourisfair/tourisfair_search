import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const notFavorite: StyleVariantProps<'tf-favorite'> = {
  name: 'Not Favorite',
  tag: 'tf-favorite',
  description: 'Favorite icon not enabled',
  data: {
    enabled: false,
  },
};

const favorite: StyleVariantProps<'tf-favorite'> = {
  name: 'Favorite',
  tag: 'tf-favorite',
  description: 'Favorite icon enabled',
  data: {
    enabled: true,
  },
};

const meta: StyleComponentProps<'tf-favorite'> = {
  ref: 'tf-favorite',
  tag: 'tf-favorite',
  description:
    "Tourisfair Favorite is a component that shows if activity is among user's favorite.",
  component: 'Tourisfair Favorite',
  variants: [notFavorite, favorite],
};

export const styleTfFavorite = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
