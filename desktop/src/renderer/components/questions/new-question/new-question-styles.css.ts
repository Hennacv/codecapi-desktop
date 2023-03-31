import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const NewQuestionContainer = style({
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
});

export const NewQuestionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
});

export const NewQuestionSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const NewQuestionTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const NewQuestionDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const NewQuestionFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const NewQuestionLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const NewQuestionParagraph = style({
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.light,
  color: vars.color['text-white-300'],
});

export const NewQuestionTagList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  gap: vars.spacing['1x'],
  backgroundColor: 'transparent',
});

export const NewQuestionTagContainer = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  minHeight: '4.5rem',
});

export const NewQuestionBlocks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1x'],
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const NewQuestionBlocksOptions = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['1x'],
});
