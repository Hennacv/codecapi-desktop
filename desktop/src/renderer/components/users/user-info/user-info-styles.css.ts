import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const UserInfoSection = style({
  backgroundColor: vars.color['dark-300'],
  padding: vars.spacing['1.25x'], 
  justifyContent: 'space-around',
  userSelect: 'none',
});

export const UserInfoCard = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: vars.color['dark-400'],
  height: '2,5rem',
  borderRadius: vars.borderRadius.small,
});

export const UserInfoImage = style({
  width: '2,5rem',
  height: '2.5rem',
  borderRadius: vars.borderRadius.small,
});

const UserInfoBase = style({
  padding: vars.spacing['0.25x'] + vars.spacing['0.75x'],
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const UserInfoStyle = styleVariants({
  basic: [UserInfoBase],
  collapsed: [UserInfoBase, { display: 'none' }],
});

const BaseUserInfoTextBase = style({
  height: 15,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
});

export const UserText = styleVariants({
  name: [
    BaseUserInfoTextBase,
    {
      fontSize: '0.75em',
      color: vars.color['text-white-100'],
    },
  ],
  function: [
    BaseUserInfoTextBase,
    {
      fontSize: '0.65em',
      color: vars.color['text-white-300'],
    },
  ],
});
