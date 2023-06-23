import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const FilterTermContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
  minHeight: 33,
});

export const FilterContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x']
});

export const FilterTitle = style({
  textTransform: 'uppercase',
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.medium,
  color: vars.color['text-white-200'],
});

const FilterItems = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: vars.spacing['0.75x'],
  minHeight: '3.25rem',
  padding: vars.spacing['0.75x'],
  borderRadius: vars.borderRadius.medium,
  border: `2px solid ${vars.color['dark-300']}`,
  backgroundColor: vars.color['dark-100'],
});

const FilterItemsDisabled = style({
  opacity: 0.65,
  pointerEvents: 'none',
});

export const FilterItemsVariants = styleVariants({
  default: [FilterItems],
  disabled: [FilterItems, FilterItemsDisabled]
});

export const FilterHeader = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  alignItems: 'center',
  gap: vars.spacing['1x'],
  maxWidth: "20rem",
  marginRight: vars.spacing['1.5x'],
});

export const SelectedFilterItems = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['1x']
});

export const SelectedFilter = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1x'],
});

const SelectedFilterTags = style({
  width: vars.width.full,
});

const SelectedFilterUsers = style({
  width: '20rem',
});

export const SelectedFilterVariants = styleVariants({
  tags: [SelectedFilter, SelectedFilterTags],
  users: [SelectedFilter, SelectedFilterUsers]
});
