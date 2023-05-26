import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const TextareaBase = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  fontWeight: vars.fontWeight.regular,
  resize: 'vertical',
});

const TextareatValidated = style({
  border: '2px solid ' + vars.color['primary-400'],
});

export const TextareaVariants = styleVariants({
  default: [TextareaBase],
  validated: [TextareaBase, TextareatValidated],
});
