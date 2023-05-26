import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const ProfileFormContainer = style({
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
});

export const ProfileFormHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
});

export const ProfileFormTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const ProfileFormDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const ProfileFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const ProfileFormLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const SkillsContainer = style({
  padding: vars.spacing['1x'],
  backgroundColor: vars.color['dark-200'],
  border: `2px solid ${vars.color['dark-300']}`,
  borderRadius: vars.borderRadius.medium,
  minHeight: '4.5rem',
});

export const SkillsList = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  gap: vars.spacing['1x'],
  backgroundColor: 'transparent',
});

export const SkillHidden = style({
  visibility: 'hidden',
});
