import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const ButtonBase = style({
  textDecoration: 'none',
  width: vars.width.fit,
  backgroundColor: vars.color['dark-300'],
  border: `2px solid ${vars.color['dark-400']}`,
  borderRadius: vars.borderRadius.medium,
  transition: vars.transition.defaultHover,
  ':hover': {
    backgroundColor: vars.color['dark-400'],
    transition: vars.transition.defaultHover,
    cursor: 'pointer',
  },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.25x'],
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
  cursor: 'pointer'
});

const ButtonVote = style({
  padding: `${vars.spacing['0.25x']} ${vars.spacing['0.75x']}`,
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.bold,
  color: vars.color['text-white-300'],
  borderRadius: vars.borderRadius.small,
});

const ButtonDelete = style({
  backgroundColor: vars.color['delete-100'],
  border: `2px solid ${vars.color['delete-200']}`,
  color: vars.color['delete-300'],
  ':hover': {
    backgroundColor: vars.color['delete-200'],
    transition: vars.transition.defaultHover,
  },
});

const ButtonSmallText = style({
  padding: vars.spacing['0.5x'] + vars.spacing['1.5x'],
  fontSize: vars.fontSize.extraSmall,
});

const ButtonExtraSmall= style({
  borderRadius: vars.borderRadius.small,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ButtonExtraSmallSquare= style({
  width: vars.spacing['1.75x'],
  height: vars.spacing['1.75x'],
});

const ButtonVoteSquare = style({
  padding: vars.spacing['0.25x'],
  borderColor: vars.color['delete-200']
});

export const ButtonVariants = styleVariants({
  small: [ButtonBase, ButtonSmall],
  smallText: [ButtonBase, ButtonSmallText],
  smallSquare: [ButtonBase, ButtonSmall, ButtonSmallSquare],
  smallSquareDelete: [ButtonBase, ButtonSmall, ButtonSmallSquare, {borderColor: vars.color['delete-200']}],
  vote: [ButtonBase, ButtonVote],
  voteSquare: [ButtonBase, ButtonVote, ButtonVoteSquare],
  delete: [ButtonBase, ButtonSmall, ButtonDelete],
  default: [ButtonBase, ButtonDefault],
  defaultSquare: [ButtonBase, ButtonDefault, ButtonDefaultSquare],
  defaultDisabled: [ButtonBase, ButtonDefault, ButtonDisabled],
  reset: [Reset],
  extraSmallSquare: [ButtonBase, ButtonExtraSmall, ButtonExtraSmallSquare, ButtonDisabled],
  extraSmallSquareDelete: [ButtonBase, ButtonExtraSmall, ButtonExtraSmallSquare, ButtonDisabled, {borderColor: vars.color['delete-200']}],
});

const Close = style({
  borderRadius: vars.borderRadius.large,
  height: vars.spacing['1.5x'],
  width: vars.spacing['1.5x'],
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',

  ':hover': {
    backgroundColor: vars.color['dark-400'],
    transition: vars.transition.defaultHover,
  },
});

export const ButtonClose = styleVariants({
  base: [Close, { right: vars.spacing['1x'] }],
  filter: [Close, { top: vars.spacing['1x'], right: vars.spacing['1x'] }],
});
