import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const LoaderContainer = style({
  position: 'absolute',
  top: vars.spacing['0.5x'],
  right: vars.spacing['0.5x'],
});

export const LoaderImage = style({
  height: '1.5rem',
  width: '1.5rem',
});
