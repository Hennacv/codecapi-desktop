import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const SelectBase = style({
  backgroundColor: vars.color['dark-300'],
  width: vars.width.fit,
  border: '2px solid ' + vars.color['dark-400'],
  fontWeight: vars.fontWeight.regular,
});

const SelectSmall = style({
  padding: '0.4rem',
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.light,
  borderRadius: vars.borderRadius.medium,
});

const SelectDefault = style({
  padding: vars.spacing['0.5x'],
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.light,
  borderRadius: vars.borderRadius.medium,
});
const SelectMedium = style({
  padding: vars.spacing['0.75x'],
  fontSize: vars.fontSize.base,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.medium,
});

export const SelectVariants = styleVariants({
  small: [SelectBase, SelectSmall],
  default: [SelectBase, SelectDefault],
  medium: [SelectBase, SelectMedium],
});
