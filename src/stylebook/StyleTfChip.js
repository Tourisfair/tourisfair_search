const activityChip = {
  name: 'Activity Chip',
  description: 'Chip of type activity',
  data: {
    type: 'activity',
    content: 'History',
  },
};

const poiChip = {
  name: 'POI Chip',
  description: 'Chip of type POI (Point Of Interest)',
  data: {
    type: 'poi',
    content: 'Churches',
  },
};

const meta = {
  ref: 'tf-chip',
  description:
    'A chip is used to tag an information or title, to give a labelled meaning, to categorize.',
  tag: 'tf-chip',
  component: 'Tourisfair Chip',
  variants: [activityChip, poiChip],
};

export const styleTfChip = (styleBook) => styleBook.addComponent(meta);
