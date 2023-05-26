import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const NewAnswerContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const NewAnswerForm = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const NewAnswerTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const NewAnswerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const NewAnswerFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const NewAnswerBlocks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1x'],
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const NewAnswerBlocksOptions = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['1x'],
});

export const NewAnswerAddContainer = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: vars.spacing['1x'],
});
