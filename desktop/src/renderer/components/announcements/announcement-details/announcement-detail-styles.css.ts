import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const AnnouncementDetailsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

const AnnouncementDetailsAllButtons = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const AnnouncementDetailsSideButtons = style({
  gap: vars.spacing['0.75x'],
});

export const AnnouncementDetailsButtonContainer = styleVariants({
  main: [AnnouncementDetailsAllButtons],
  side: [AnnouncementDetailsAllButtons, AnnouncementDetailsSideButtons],
});