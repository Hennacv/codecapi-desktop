import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const DateTimeContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing["4.75x"],
})