import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const FilterSelectedContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing['1x'],
  width: vars.width.full,
  minHeight: '2.1rem'
});