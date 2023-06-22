import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const AnnouncementFormContainer = style({
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
});

export const AnnouncementFormHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
});

export const AnnouncementFormTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const AnnouncementFormDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const AnnouncementFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const AnnouncementFormItem = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: vars.spacing['1.25x'],
});

export const AnnouncementFormLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const AnnouncementFormBlocks = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1x'],
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const AnnouncementFormBlocksOptions = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['1x'],
});