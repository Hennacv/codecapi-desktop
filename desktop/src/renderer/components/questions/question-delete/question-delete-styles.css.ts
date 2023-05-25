import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const DeleteQuestionMessage = style({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  marginTop: vars.spacing['1.25x'],
})

export const DeleteButtonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['0.25x'],
  justifyContent: 'center',
  marginTop: vars.spacing['1x'],
})