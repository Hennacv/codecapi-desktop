import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const BaseLogoStyle = style({
  display: 'flex',
  alignItems: 'center',
  margin: '30px 20px',
  fill: vars.color['text-white-200'],
});

export const LogoStyle = styleVariants({
  basic: [BaseLogoStyle],
  collapsed: [BaseLogoStyle, { justifyContent: 'center' }],
});
