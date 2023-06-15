import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const TrickCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
});

export const TrickCardHeader = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: vars.fontSize.small,
  marginBottom: vars.spacing['1x'],
  color: vars.color['text-white-300'],
});

export const TrickCardHeaderInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
});

export const TrickCardContent = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.75x'],
  fontSize: vars.fontSize.base,
});

export const TrickCardTitle = style({
  fontWeight: vars.fontWeight.medium,
});