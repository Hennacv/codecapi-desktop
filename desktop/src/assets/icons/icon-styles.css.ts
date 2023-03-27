import { style, styleVariants } from '@vanilla-extract/css';

const IconSmall = style({
  width: '1rem',
  height: '1rem',
});

const IconDefault = style({
  width: '1.5rem',
  height: '1.5rem',
});

export const IconVariants = styleVariants({
  small: [IconSmall],
  default: [IconDefault],
});
