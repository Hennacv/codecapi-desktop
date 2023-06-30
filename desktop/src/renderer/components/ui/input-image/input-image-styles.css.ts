import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

globalStyle(`input[type="file"]::file-selector-button `, {
  textDecoration: 'none',
  width: vars.width.fit,
  backgroundColor: vars.color['dark-300'],
  border: `2px solid ${vars.color['dark-400']}`,
  borderRadius: vars.borderRadius.medium,
  transition: vars.transition.defaultHover,
  padding: vars.spacing['0.5x'] + vars.spacing['1x'],
  color: vars.color['text-white-100'],
  fontSize: vars.fontSize.small,
});

globalStyle(`input[type="file"]::file-selector-button:hover `, {
  backgroundColor: vars.color['dark-400'],
  transition: vars.transition.defaultHover,
  cursor: 'pointer',
})

export const InputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.75x'],
})

export const InputImageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.5x'],
})
