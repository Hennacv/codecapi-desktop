import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const Reset = style({
  all: 'unset',
})

export const DialogPortal = style({
  position: 'relative',
  width: 50,
})

export const DialogOverlay = style({
  backgroundColor: vars.color['dark-opaque'],
  position: 'absolute',
  inset: '0'
})

export const DialogContent = style({
  backgroundColor: vars.color['dark-200'],
  position: 'absolute',
  borderRadius: vars.borderRadius.large,
  padding: vars.spacing['1.25x'],
  width: '80vw',
  right: vars.spacing['2x'],
  top: vars.spacing['4.75x'],
})

export const DialogTitle = style({
  textTransform: 'uppercase',
  fontSize: vars.fontSize.extraSmall,
  color: vars.color['text-white-200'],
})

export const DialogTag = style({
  margin: `${vars.spacing['0.75x']} 0`,
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['0.75x'],
})