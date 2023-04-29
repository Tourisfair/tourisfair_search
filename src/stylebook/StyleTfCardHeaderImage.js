const defaultCardHeaderImage = {
  name: 'Default Card Header Image',
  description: '',
  data: {
    src:'../Image.png'
  },
};

const meta = {
  ref: 'tf-card-header-image',
  description:
    'Tourisfair card header image component, showing the header image of a card.',
  tag: 'tf-card-header-image',
  component: 'Tourisfair Card Header Image',
  variants: [defaultCardHeaderImage],
};

export const styleTfCardHeaderImage = (styleBook) =>
  styleBook.addComponent(meta);
