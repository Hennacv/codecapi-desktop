import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { style, styleVariants } from '@vanilla-extract/css';

export const SideStyles = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  width: 200,
  height: '100%',
  backgroundColor: '#333333',
});

export const LogoStyle = style({
  width: 100,
  height: 'fit-content',
  alignItems: 'center',
  margin: '30px 20px',
  fill: '#BCBCBC',
});

export const SideIcon = style({
  width: '1.25em',
  height: '1.25em',
  marginRight: 6,
  cursor: 'pointer',
  userSelect: 'none',
  flexShrink: 0,
});

export const SideText = style({
  fontSize: 12,
});

export const SideLink = style({
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  margin: '5px 20px',
  padding: '10px 12px',
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

const BaseSideList = style({
  listStyleType: 'none',
  padding: 0,
  marginTop: 0,
});

export const SideList = styleVariants({
  top: [BaseSideList],
  bottom: [
    BaseSideList,
    {
      position: 'fixed',
      bottom: 80,
      width: 200,
    },
  ],
});

export const UserSection = style({
  backgroundColor: '#3B3B3B',
  position: 'fixed',
  bottom: 0,
  width: 200,
});

export const UserCard = style({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#4B4B4B',
  margin: 20,
  height: 40,
  borderRadius: 10,
});

export const UserPhoto = style({
  width: 40,
  height: 40,
  borderRadius: 10,
});

export const UserInfoStyle = style({
  padding: '5px 10px',
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
