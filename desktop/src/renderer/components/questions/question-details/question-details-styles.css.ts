import { style } from '@vanilla-extract/css';
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
})

export const QuestionDetailsAnswerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  color: vars.color['text-white-300'],
  fontSize: vars.fontSize.small
});
