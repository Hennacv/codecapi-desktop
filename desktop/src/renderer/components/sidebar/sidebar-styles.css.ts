import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const BaseSideStyles = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: vars.color['dark-200'],
  position: 'relative',
  transition: 'width 300ms',
});

export const SideStyles = styleVariants({
  basic: [BaseSideStyles, { width: 200 }],
  collapsed: [BaseSideStyles, { width: 80 }],
});

globalStyle(`.${SideStyles.collapsed} span`, {
  display: 'none',
  overflow: 'hidden',
});

export const AsideStyles = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
});

export const SideIcon = style({
  width: '1.25em',
  height: '1.25em',
  marginRight: 6,
  cursor: 'pointer',
  userSelect: 'none',
  flexShrink: 0,
});

export const SideToggle = style({
  width: '1.25em',
  height: '1.25em',
  cursor: 'pointer',
  fill: vars.color['text-white-200'],
});

const BaseToggleContainer = style({
  position: 'absolute',
  width: 'fit-content',
  right: -10,
  top: 30,
  backgroundColor: vars.color['dark-300'],
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderRadius: '50%',
  color: vars.color['text-white-200'],
  display: 'flex',
  transition: 'transform 400ms',
});

export const ToggleContainer = styleVariants({
  basic: [BaseToggleContainer],
  collapsed: [BaseToggleContainer, { transform: 'rotate(180deg)' }],
});

export const SideText = style({
  fontSize: 12,
});

export const SideLink = style({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '5px 20px',
  padding: '10px 6px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderLeftWidth: 5,
  borderRadius: 10,
  color: vars.color['text-white-200'],
  borderColor: 'transparent',
  ':hover': {
    backgroundColor: vars.color['dark-400'],
  },
});

export const SideLinkSelected = style({
  borderColor: vars.color['dark-600'],
  backgroundColor: vars.color['dark-400'],
});

export const SideList = style({
  listStyleType: 'none',
  padding: 0,
  marginTop: 0,
});