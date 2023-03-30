import { style, styleVariants } from '@vanilla-extract/css';

const IconBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconExtraSmall = style({
  width: '0.75rem',
  height: '0.75rem',
});

const IconSmall = style({
  width: '1rem',
  height: '1rem',
});

const IconDefault = style({
  width: '1.5rem',
  height: '1.5rem',
});

export const IconVariants = styleVariants({
  extraSmall: [IconBase, IconExtraSmall],
  small: [IconBase, IconSmall],
  default: [IconBase, IconDefault],
});
