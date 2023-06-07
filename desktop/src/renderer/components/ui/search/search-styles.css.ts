import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const SFContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: vars.spacing['1x'],
  marginBottom: vars.spacing['1.25x'],
});

export const SearchStyles = style({
  width: '70%',
});
