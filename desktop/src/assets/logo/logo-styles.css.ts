import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const BaseLogoStyle = style({
  display: 'flex',
  alignItems: 'center',
  margin: '30px 23px',
  fill: vars.color['text-white-200'],
  width: 150,
  transition: 'margin 450ms'
});

export const LogoStyle = styleVariants({
  basic: [BaseLogoStyle],
  collapsed: [BaseLogoStyle, { transition: 'margin 450ms'}],
});
