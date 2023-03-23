import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const AnswerListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});
