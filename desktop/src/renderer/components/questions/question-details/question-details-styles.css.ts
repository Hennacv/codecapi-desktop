import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const QuestionDetailsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const QuestionDetailsIconContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['0.25x'],
  marginLeft: vars.spacing['0.5x'],
});

export const QuestionDetailsAnswerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  color: vars.color['text-white-300'],
  fontSize: vars.fontSize.small,
});

const QuestionDetailsAllButtons = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const QuestionDetailsSideButtons = style({
  gap: vars.spacing['0.75x'],
});

export const QuestionDetailsButtonContainer = styleVariants({
  main: [QuestionDetailsAllButtons],
  side: [QuestionDetailsAllButtons, QuestionDetailsSideButtons],
});
