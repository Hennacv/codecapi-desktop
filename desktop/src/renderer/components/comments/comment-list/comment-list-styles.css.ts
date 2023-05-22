import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const CommentListContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing['1x'],
  listStyle: "none",
  marginLeft: vars.spacing['0.75x'],
  padding: 0,
});

export const CommentListNewContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: vars.spacing['0.5x'],
  fontSize: vars.fontSize.small,
  color: vars.color["text-white-100"],
  marginLeft: vars.spacing['0.75x'],
});