import { StyleBook, StyleComponentProps, StyleVariantProps } from './StyleBook';

const activityChip: StyleVariantProps<'tf-chip'> = {
  name: 'Activity Chip',
  tag: 'tf-chip',
  description: 'Chip of type activity',
  data: {
    type: 'activity',
    content: 'History',
  },
};

const poiChip: StyleVariantProps<'tf-chip'> = {
  name: 'POI Chip',
  tag: 'tf-chip',
  description: 'Chip of type POI (Point Of Interest)',
  data: {
    type: 'poi',
    content: 'Churches',
  },
};

const meta: StyleComponentProps<'tf-chip'> = {
  ref: 'tf-chip',
  tag: 'tf-chip',
  description:
    'A chip is used to tag an information or title, to give a labelled meaning, to categorize.',
  component: 'Tourisfair Chip',
  variants: [activityChip, poiChip],
};

export const styleTfChip = (styleBook: StyleBook) =>
  styleBook.addComponent(meta);
