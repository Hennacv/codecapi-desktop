import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const AnnouncementCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
});

export const AnnouncementCardHeader = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: vars.fontSize.small,
  marginBottom: vars.spacing['1x'],
  color: vars.color['text-white-300'],
});

export const AnnouncementCardHeaderInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
});

export const AnnouncementCardContent = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.75x'],
  fontSize: vars.fontSize.base,
});

export const AnnouncementCardTitle = style({
  fontWeight: vars.fontWeight.medium,
});

export const AnnouncementCardButtonsContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['0.25x'],
});