import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const QuestionEditContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['2x'],
});

export const QuestionEditAllButtons = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: '2.75rem',
});
