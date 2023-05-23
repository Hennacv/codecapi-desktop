import { globalStyle, style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const CommentCardContainerBase = style({
  display: 'grid',
  gridTemplateColumns: 'auto auto 1fr 2rem',
  gap: vars.spacing['0.5x'],
  fontSize: vars.fontSize.small,
  color: vars.color['text-white-300'],
  borderRadius: vars.borderRadius.small,
  minHeight: '1.8rem',
  padding: vars.spacing['0.25x'],
});

const CommentCardContainerHover = style({
  ':hover': {
    backgroundColor: vars.color['dark-200'],
  },
});

export const CommentCardContainer = styleVariants({
  default: [CommentCardContainerBase],
  defaultHover: [CommentCardContainerBase, CommentCardContainerHover],
});

export const CommentCardCommentInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: vars.spacing['0.5x'],
  resize: 'none',
  boxSizing: 'border-box',
  paddingTop: '0.35rem',
});

export const CommentCardCommentDate = style({
  display: 'flex',
  gap: vars.spacing['0.5x'],
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'none',
    },
  },
});

export const CommentCardUser = style({
  position: 'relative',
  width: vars.spacing['1.75x'],
  height: vars.spacing['1.75x'],
  backgroundColor: vars.color['dark-300'],
  borderRadius: vars.borderRadius.small,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color['text-white-100'],
  fontSize: vars.fontSize.extraSmall,
  margin: 0,
});

export const CommentCardValue = style({
  color: vars.color['text-white-200'],
  flexGrow: 1,
  whiteSpace: 'normal',
  paddingTop: '0.35rem',
});

export const CommentCardDelete = style({
  pointerEvents: 'none',
  opacity: 0,
  transition: vars.transition.defaultHover,
  display: 'flex',
  justifyContent: 'flex-end',
});

globalStyle(`${CommentCardContainerBase}:hover ${CommentCardDelete}`, {
  opacity: 1,
  pointerEvents: 'auto',
});
