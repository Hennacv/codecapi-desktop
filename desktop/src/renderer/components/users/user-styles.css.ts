import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

// User Styling
export const UserSection = style({
  backgroundColor: vars.color['dark-300'],
  padding: 20,
  justifyContent: 'space-around',
  userSelect: 'none',
});

export const UserCard = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: vars.color['dark-400'],
  height: 40,
  borderRadius: 10,
});

export const UserPhoto = style({
  width: 40,
  height: 40,
  borderRadius: 10,
});

const BaseUserInfoStyle = style({
  padding: '5px 10px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
});

export const UserInfoStyle = styleVariants({
  basic: [BaseUserInfoStyle],
  collapsed: [BaseUserInfoStyle, { display: 'none' }],
});

const BaseUserText = style({
  height: 15,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
});

export const UserText = styleVariants({
  name: [
    BaseUserText,
    {
      fontSize: 9,
      color: vars.color['text-white-200'],
    },
  ],
  function: [
    BaseUserText,
    {
      fontSize: 8,
      color: vars.color['text-white-300'],
    },
  ],
});
