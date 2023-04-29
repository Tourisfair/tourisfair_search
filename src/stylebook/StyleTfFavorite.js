const favorite = {
  name: 'Favorite False/True',
  description: 'Favorite False or True of activities',
  data: {
    type: 'false',
    content: 'Favorite False/True',
  },
};


const meta = {
  ref: 'tf-favorite',
  description:
    "Tourisfair Favorite is a component that shows if activity is among user's favorite.",
  tag: 'tf-favorite',
  component: 'Tourisfair Favorite',
  variants: [favorite],
};

export const styleTfFavorite = (styleBook) => styleBook.addComponent(meta);
