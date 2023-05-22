import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const VotesUpvoteContainer = style({
  height: 'auto',
  width: vars.width.fit,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

const VotesUpvoteCountBase = style({
  color: vars.color['text-white-300'],
  width: vars.spacing['0.5x'],
});

const VotesUpvoteCountActive = style({
  color: vars.color['primary-100'],
  width: vars.spacing['0.5x'],
});

export const VotesUpvoteBarCount = styleVariants({
  default: [VotesUpvoteCountBase],
  active: [VotesUpvoteCountActive],
});
