import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const CommentListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.5x'],
  listStyle: 'none',
  marginLeft: vars.spacing['0.5x'],
  position: 'relative',
  padding: 0,
});

export const CommentListNewBase = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
  fontSize: vars.fontSize.small,
  color: vars.color['text-white-100'],
  marginLeft: vars.spacing['0.5x'],
  padding: `${vars.spacing['0x']} ${vars.spacing['0.25x']} ${vars.spacing['0.25x']} ${vars.spacing['0.25x']}`,
});

const CommentListNew = style({
  position: 'relative',
  marginTop: vars.spacing['1x'],
});

const CommentListNewComments = style({
  marginTop: 0,
});

export const CommentListNewVariants = styleVariants({
  default: [CommentListNewBase, CommentListNew],
  withComments: [CommentListNewBase, CommentListNewComments],
});

export const CommentListItem = style({
  zIndex: 1,
});

export const CommentListLine = style({
  content: '',
  position: 'absolute',
  top: '-1rem',
  left: '1.05rem',
  width: '2px',
  backgroundColor: vars.color['dark-300'],
  zIndex: 0,
});
