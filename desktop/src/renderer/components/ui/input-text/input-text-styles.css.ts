import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const InputTextBase = style({
  backgroundColor: vars.color['dark-200'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  fontWeight: vars.fontWeight.regular,
});

export const InputTextSmall = style({
  padding: vars.spacing["0.75x"],
  fontSize: vars.fontSize.small
});

export const InputTextDefault = style({
  padding: vars.spacing['1x'],
  fontSize: vars.fontSize.base,
});

export const InputTextValidated = style({
  border: '2px solid ' + vars.color['primary-400'],
});

export const InputTextVariants = styleVariants({
  small: [InputTextBase, InputTextSmall],
  smallValidated: [InputTextBase, InputTextSmall, InputTextValidated],
  default: [InputTextBase, InputTextDefault],
  defaultValidated: [InputTextBase, InputTextDefault, InputTextValidated],
});