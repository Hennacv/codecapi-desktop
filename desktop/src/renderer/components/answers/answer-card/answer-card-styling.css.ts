import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const AnswerContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

const AnswerCardBase = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
});

const AnswerCardAccepted = style({
  border: `2px solid ${vars.color['primary-100']}`,
})

export const AnswerCardContainer = styleVariants({
  default: [AnswerCardBase],
  active: [AnswerCardBase, AnswerCardAccepted],
});

export const AnswerCardHeader = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  fontSize: vars.fontSize.small,
  color: vars.color['text-white-300'],
  marginBottom: vars.spacing['1x'],
});

export const AnswerCardHeaderInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
});

export const AnswerCardButtonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
})