import { style } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'row',
  width: vars.width.full,
  height: vars.height.page,
  backgroundColor: vars.color['dark-100'],
  overflow: 'hidden',
});

export const contentContainer = style({
  width: vars.width.full,
  height: vars.height.page,
  overflow: 'hidden',
  padding: vars.spacing['2x'],
  overflowY: 'auto',
  position: 'relative',
});
