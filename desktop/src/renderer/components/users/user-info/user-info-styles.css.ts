import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const UserInfoSection = style({
  backgroundColor: vars.color['dark-300'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '5.5rem',
  width: vars.width.full,
  userSelect: 'none',
  padding: vars.spacing['0x'] + vars.spacing['1x'],
});

export const UserInfoCard = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: vars.color['dark-400'],
  borderRadius: vars.borderRadius.small,
  width: vars.width.full,
  textDecoration: 'none',
  ':hover': {
    backgroundColor: vars.color['dark-500'],
  },
});

export const UserInfoImage = style({
  width: '3rem',
  height: '3rem',
  borderRadius: vars.borderRadius.small,
  backgroundColor: vars.color['dark-500'],
  color: vars.color['text-white-100'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '7.5rem',
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
