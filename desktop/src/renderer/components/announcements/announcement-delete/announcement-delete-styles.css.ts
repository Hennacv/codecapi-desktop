import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const DeleteAnnouncementMessage = style({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  marginTop: vars.spacing['0.75x'],
});

export const DeleteButtonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['1x'],
  justifyContent: 'center',
  marginTop: vars.spacing['0.5x'],
});
