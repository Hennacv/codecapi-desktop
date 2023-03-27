import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const SelectContainer = style({
  backgroundColor: vars.color['dark-300'],
  width: vars.width.fit,
});

export const SelectButton = style({
  backgroundColor: vars.color['dark-300'],
  width: vars.width.fit,
  padding: vars.spacing['0.5x'],
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.light,
  border: '2px solid ' + vars.color['dark-400'],
  borderRadius: vars.borderRadius.small,
});
