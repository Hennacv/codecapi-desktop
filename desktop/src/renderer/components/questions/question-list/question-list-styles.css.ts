import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const QuestionListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing["1.25x"],
});

export const QuestionListFilters = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['1x'],
  width: vars.width.full,
  minHeight: '2rem',
  marginBottom: vars.spacing['1x']
})