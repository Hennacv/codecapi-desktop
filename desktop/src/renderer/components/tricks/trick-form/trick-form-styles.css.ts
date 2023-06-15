import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const TrickFormContainer = style({
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const TrickFormHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
});

export const TrickFormTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const TrickFormDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const TrickFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const TrickFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const TrickFormLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const TrickFormBlocks = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});