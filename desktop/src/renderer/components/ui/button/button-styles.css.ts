import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const ButtonBase = style({
  textDecoration: 'none',
  width: vars.width.fit,
  backgroundColor: vars.color['dark-300'],
  border: `2px solid ${vars.color['dark-400']}`,
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
    border: `2px solid ${vars.color['dark-300']}`,
    cursor: 'not-allowed',
  },
});

const ButtonSmallSquare = style({
  padding: vars.spacing['0.5x'],
});

const ButtonDefaultSquare = style({
  padding: vars.spacing['0.75x'],
});

const Reset = style({
  all: 'unset',
});

const ButtonSmallText = style({
  padding: vars.spacing['0.5x'] + vars.spacing['1.5x'],
  fontSize: vars.fontSize.extraSmall,
})

export const ButtonVariants = styleVariants({
  small: [ButtonBase, ButtonSmall],
  smallText: [ButtonBase, ButtonSmallText],
  smallSquare: [ButtonBase, ButtonSmall, ButtonSmallSquare],
  default: [ButtonBase, ButtonDefault],
  defaultSquare: [ButtonBase, ButtonDefault, ButtonDefaultSquare],
  defaultDisabled: [ButtonBase, ButtonDefault, ButtonDisabled],
  reset: [Reset],
});

const Close = style({
  borderRadius: vars.borderRadius.large,
  height: vars.spacing['1.5x'],
  width: vars.spacing['1.5x'],
  display: 'inline-flex',
  alignItems:'center',
  justifyContent: 'center',
  position: 'absolute',

  ':hover': {
    backgroundColor: vars.color['dark-400'],
    transition: vars.transition.defaultHover,
  },
});

export const ButtonClose = styleVariants({
  base: [Close, {right: vars.spacing['1x']}],
  filter: [Close, {  top: vars.spacing['1x'], right: vars.spacing['1x']}],

});

