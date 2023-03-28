import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const ReactLiveEditorContainer = style({
  backgroundColor: vars.color['dark-100'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.extraLight,
  padding: vars.spacing['0.5x'],
  position: 'relative',
});

export const ReactLiveEditorHeader = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing['1x'],
});

export const ReactLiveEditorTitle = style({
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const ReactLiveEditorOptions = style({
  position: 'absolute',
  right: '0.5rem',
  top: '0.5rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const ReactLiveEditoLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});
