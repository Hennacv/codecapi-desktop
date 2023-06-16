import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const GroupedFilterContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['1x'],
  marginBottom: vars.spacing["1.25x"]
});

export const FilterActionContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: vars.spacing['1x'],
});

export const FilterContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['1x'],
  width: vars.width.full,
  height: '2rem'
});