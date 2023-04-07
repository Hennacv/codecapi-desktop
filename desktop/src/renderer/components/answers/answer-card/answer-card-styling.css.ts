import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const AnswerCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
});

export const AnswerCardHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
  fontSize: vars.fontSize.small,
  color: vars.color['text-white-300'],
  marginBottom: vars.spacing['1x'],
});