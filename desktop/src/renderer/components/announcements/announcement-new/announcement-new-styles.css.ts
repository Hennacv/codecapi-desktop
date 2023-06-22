import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const NewAnnouncementContainer = style({
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['3x'],
});

export const NewAnnouncementHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1.25x'],
});

export const NewAnnouncementTitle = style({
  fontSize: vars.fontSize.extraLarge,
  fontWeight: vars.fontWeight.medium,
});

export const NewAnnouncementDescription = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});