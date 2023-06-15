import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const NewTrickButtonPosition = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: vars.spacing['1.25x'],
});

export const TrickListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing["1.25x"],
});