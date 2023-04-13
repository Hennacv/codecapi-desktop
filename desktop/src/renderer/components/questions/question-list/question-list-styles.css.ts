import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const FilterStyles = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: vars.spacing["1.25x"]
})