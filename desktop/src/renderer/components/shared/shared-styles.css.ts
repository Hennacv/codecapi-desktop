import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

// Logo styling
const BaseLogoStyle = style({
  display: 'flex',
  alignItems: 'center',
  margin: '30px 20px',
  fill: '#BCBCBC',
});

export const LogoStyle = styleVariants({
  basic: [BaseLogoStyle],
  collapsed: [BaseLogoStyle, { justifyContent: 'center' }],
});

// Sidebar styling
const BaseSideStyles = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#333333',
  position: 'relative',
});

export const SideStyles = styleVariants({
  basic: [BaseSideStyles, { width: 200 }],
  collapsed: [BaseSideStyles, { width: 80 }],
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
  fill: '#BCBCBC',
});

const BaseToggleContainer = style({
  position: 'absolute',
  width: 'fit-content',
  right: -10,
  top: 30,
  backgroundColor: '#3B3B3B',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderRadius: '50%',
  color: '#BCBCBC',
  display: 'flex',
});

export const ToggleContainer = styleVariants({
  basic: [BaseToggleContainer],
  collapsed: [BaseToggleContainer, { transform: 'rotate(180deg)' }],
});

export const SideText = style({
  fontSize: 12,
});

globalStyle(`.${SideStyles.collapsed} span`, {
  display: 'none',
});

export const SideLink = style({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '5px 20px',
  padding: '10px 6px',
  borderStyle: 'solid',
  borderWidth: 'thin',
  borderLeftWidth: 5,
  borderRadius: 10,
  color: '#BCBCBC',
});

export const SideLinkBaseStyle = style({
  borderColor: 'transparent',
  ':hover': {
    backgroundColor: '#4B4B4B',
  },
});

export const SideLinkSelected = style({
  borderColor: '#797979',
  backgroundColor: '#4B4B4B',
});

export const SideList = style({
  listStyleType: 'none',
  padding: 0,
  marginTop: 0,
});

// User Styling
export const UserSection = style({
  backgroundColor: '#3B3B3B',
  padding: 20,
  justifyContent: 'space-around',
  userSelect: 'none',
});

export const UserCard = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#4B4B4B',
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
      color: '#BCBCBC',
    },
  ],
  function: [
    BaseUserText,
    {
      fontSize: 8,
      color: '#8F8F8F',
    },
  ],
});

// globalStyle(`.${SideStyles.collapsed} svg`, {
//   backgroundColor: 'red',
// });
