import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const ReactMonacoEditorContainer = style({
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.extraLight,
  // padding: vars.spacing['0.5x'],
  width: vars.width.full,
  position: 'relative',
});