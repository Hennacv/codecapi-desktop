import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const FilterTermContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
  minHeight: 33,
})

export const FilterTitle = style({
  textTransform: 'uppercase',
  fontSize: vars.fontSize.extraSmall,
  color: vars.color['text-white-200'],
});

export const FilterTag = style({
  margin: `${vars.spacing['0.75x']} 0`,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: vars.spacing['0.75x'],
});
