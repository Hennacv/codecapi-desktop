import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const BaseSideStyles = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: vars.color['dark-200'],
  position: 'relative',
  transition: 'width 400ms',
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
  zIndex: 2000,
});

export const SideStyles = styleVariants({
  basic: [BaseSideStyles, { width: 300 }],
  collapsed: [BaseSideStyles, { width: 80, transition: 'width 450ms' }],
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

export const ToggleContainer = styleVariants({
  basic: [BaseToggleContainer],
  collapsed: [BaseToggleContainer, { transform: 'rotate(180deg)' }],
});

export const SideText = style({
  fontSize: 12,
});

export const SideList = style({
  padding: `${vars.spacing['0.5x']} ${vars.spacing['0x']}`,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.5x']
});

export const SideListItem = style({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

globalStyle(`${SideStyles.collapsed} span`, {
  display: 'none',
  overflow: 'hidden',
});
