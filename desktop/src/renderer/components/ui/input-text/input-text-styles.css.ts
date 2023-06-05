import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const InputTextBase = style({
  backgroundColor: vars.color['dark-200'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  fontWeight: vars.fontWeight.regular,
  width: vars.width.full
});

export const InputTextExtraSmall = style({
  height: 37,
  width: '70%',
  padding: vars.spacing['0.5x'],
  fontSize: vars.fontSize.small,
});

export const InputTextSmall = style({
  padding: vars.spacing['0.75x'],
  fontSize: vars.fontSize.small,
});

export const InputTextDefault = style({
  padding: vars.spacing['1x'],
  fontSize: vars.fontSize.base,
});

export const InputTextValidated = style({
  border: '2px solid ' + vars.color['primary-400'],
});

const InputInline = style({
  backgroundColor: 'transparent',
  border: 'none',
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-200'],
  outline: 'none',
  width: vars.width.full,
  padding: `${vars.spacing['0.25x']} 0`,
});

export const InputTextVariants = styleVariants({
  extraSmall: [InputTextBase, InputTextExtraSmall],
  small: [InputTextBase, InputTextSmall],
  smallValidated: [InputTextBase, InputTextSmall, InputTextValidated],
  default: [InputTextBase, InputTextDefault],
  defaultValidated: [InputTextBase, InputTextDefault, InputTextValidated],
  inline: [InputInline],
});
