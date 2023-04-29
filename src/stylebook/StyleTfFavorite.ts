import { StyleBook, StyleComponentProps } from './StyleBook';

const meta: StyleComponentProps<'tf-favorite'> = {
  ref: 'tf-favorite',
  tag: 'tf-favorite',
  description:
    "Tourisfair Favorite is a component that shows if activity is among user's favorite.",
  component: 'Tourisfair Favorite',
  variants: [],
};

export const styleTfFavorite = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
