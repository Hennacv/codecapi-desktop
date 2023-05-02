import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const QuestionFormContainer = style({
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
});

export const QuestionFormHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
});

export const QuestionFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const QuestionFormTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const QuestionFormDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const QuestionFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const QuestionFormLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const QuestionFormParagraph = style({
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.light,
  color: vars.color['text-white-300'],
});

export const QuestionFormTagList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  gap: vars.spacing['1x'],
  backgroundColor: 'transparent',
});

export const QuestionFormTagContainer = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],
  border: `2px solid ${vars.color['dark-300']}`,
  borderRadius: vars.borderRadius.medium,
  minHeight: '4.5rem',
});

export const QuestionFormBlocks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1x'],
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const QuestionFormBlocksOptions = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['1x'],
});

export const NewQuestionButtonPosition = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: vars.spacing['1.25x'],
});
