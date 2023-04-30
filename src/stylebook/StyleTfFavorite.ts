import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const notFavorite: StyleVariantProps<'tf-favorite'> = {
  name: 'Favorite False/True',
  description: 'Favorite False or True of activities',
  data: {
    enabled: 'false',
    content: 'Not favorite icon',
  },
};

const favorite: StyleVariantProps<'tf-favorite'> = {
  name: 'Favorite False/True',
  description: 'Favorite False or True of activities',
  data: {
    enabled: 'true',
    content: 'Favorite icon',
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
