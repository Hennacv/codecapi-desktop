import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const QuestionListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing["1.25x"],
});