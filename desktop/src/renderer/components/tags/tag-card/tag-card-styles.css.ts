import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const TagCardBase = style({
  width: vars.width.fit,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: vars.color['dark-300'],
  color: vars.color['text-white-100'],
  gap: vars.spacing['0.5x'],
  flexWrap: 'nowrap',
  whiteSpace: 'nowrap',
});

const TagCardSmall = style({
  padding: vars.spacing['0.25x'] + vars.spacing['0.5x'],
  borderRadius: vars.borderRadius.small,
  fontSize: vars.fontSize.extraSmall,
});

const TagCardDefault = style({
  padding: vars.spacing['0.5x'] + vars.spacing['0.75x'],
  borderRadius: vars.borderRadius.medium,
  fontSize: vars.fontSize.small,
});

const TagCardTransition = style({
  transition: vars.transition.defaultHover,
});

const TagCardAdd = style({
  ':hover': {
    backgroundColor: vars.color['dark-400'],
    transition: vars.transition.defaultHover,
  },
});

const TagCardRemove = style({
  ':hover': {
    backgroundColor: vars.color['dark-300'],
    transition: vars.transition.defaultHover,
    opacity: '0.5',
  },
});

export const TagCardVariants = styleVariants({
  small: [TagCardBase, TagCardSmall],
  smallAdd: [TagCardBase, TagCardSmall, TagCardTransition, TagCardAdd],
  smallRemove: [TagCardBase, TagCardSmall, TagCardTransition, TagCardRemove],

  default: [TagCardBase, TagCardDefault],
  defaultAdd: [TagCardBase, TagCardDefault, TagCardTransition, TagCardAdd],
  defaultRemove: [
    TagCardBase,
    TagCardDefault,
    TagCardTransition,
    TagCardRemove,
  ],
});

export const TagColorBlob = style({
  backgroundColor: 'white',
  borderRadius: '50%',
  width: '0.65rem',
  height: '0.65rem',
});