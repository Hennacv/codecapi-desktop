import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const UserSkillsContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
})

export const UserSkillsHeader = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
})

export const UserSkillsTags = style({
  marginTop: vars.spacing["0.75x"],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  listStyle: 'none',
  gap: vars.spacing['0.5x'],
  backgroundColor: 'transparent',
})