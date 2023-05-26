import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const SideItem = style({
  height: vars.spacing['3x'],
  margin: vars.spacing['0x'] + vars.spacing['1x'],
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderColor: 'transparent',
  borderRadius: 10,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  ':hover': {
    backgroundColor: vars.color['dark-400'],
  },
});

export const SideItemSelected = style({
  borderColor: vars.color['dark-600'],
  backgroundColor: vars.color['dark-400'],
});

export const SideLink = style({
  width: vars.width.full,
  height: vars.height.full,
  textDecoration: 'none',
});

export const SideLinkContent = style({
  width: vars.width.fit,
  height: vars.height.full,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
  borderRadius: 10,
  paddingLeft: '0.7rem',
  color: vars.color['text-white-200'],
});
