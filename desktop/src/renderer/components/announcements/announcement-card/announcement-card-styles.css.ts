import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

const AnnouncementCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
});

const AnnouncementCardHover = style({
  transition: vars.transition.defaultHover,
  pointerEvents: 'auto',
  ':hover': {
    backgroundColor: vars.color['dark-300'],
    cursor: 'pointer',
  },
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

export const AnnouncementCardVariants = styleVariants({
  default: [AnnouncementCardContainer],
  defaultHover: [AnnouncementCardContainer, AnnouncementCardHover],
});