import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const SFContainer = style({
  width: vars.width.full,
  marginBottom: vars.spacing['2x'],
});

export const SearchStyles = style({
  width: '70%',
});

export const SearchContainer = style({
  position: 'relative',
  width: vars.width.full,
});

export const SearchFilterContainer = style({
  position: 'absolute',
  top: 0,
  right: 0,
  height: vars.height.full,
  width: '80%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  paddingRight: vars.spacing['1x'],
  gap: vars.spacing['0.75x'],
  overflow: 'hidden',
  pointerEvents: 'none',
  transition:  '0.5s ease-out',
  '@media': {
    'screen and (max-width: 882px)': {
      display: 'none',
    },
  },
});

globalStyle(`${SearchFilterContainer} > *`, {
  pointerEvents: 'auto',
});
