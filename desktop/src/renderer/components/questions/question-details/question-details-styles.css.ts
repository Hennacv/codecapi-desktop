import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const QuestionDetailsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const QuestionDetailsIcon = style({
  width: '1rem',
  height: '1rem',
  marginLeft: vars.spacing['0.5x'],
  marginRight: vars.spacing['0.25x']
});

export const QuestionDetailsAnswerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  color: vars.color['text-white-300'],
  fontSize: vars.fontSize.small
});
