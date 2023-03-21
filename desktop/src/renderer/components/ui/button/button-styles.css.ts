import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

const ButtonBase = style({
  width: vars.width.fit,
  backgroundColor: vars.color['dark-300'],
  border: '2px solid ' + vars.color['dark-400'],
  borderRadius: vars.borderRadius.medium,
  cursor: 'pointer',
  transition: vars.transition.defaultHover,
  ':hover': {
		backgroundColor: vars.color['dark-400'],
		transition: vars.transition.defaultHover,
  },
});

const ButtonSmall = style({
  padding: vars.spacing['0.5x'] + vars.spacing['1x'],
	fontSize: vars.fontSize.small,
});

const ButtonDefault = style({
  padding: vars.spacing['1x'] + vars.spacing['2x'],
  fontSize: vars.fontSize.base,
});

const ButtonDisabled = style({
  ':disabled': {
		backgroundColor: vars.color['dark-200'],
		color: vars.color['text-white-300'],
		border: '2px solid ' + vars.color['dark-300'],
		cursor: 'not-allowed'
  }
});

export const ButtonVariants = styleVariants({
	small: [ButtonBase, ButtonSmall],
  default: [ButtonBase, ButtonDefault],
  defaultDisabled: [ButtonBase, ButtonDefault, ButtonDisabled],
});