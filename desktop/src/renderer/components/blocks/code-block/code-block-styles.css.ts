import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const CodeBlockContainer = style({
  position: 'relative',
});

export const CodeBlockInput = style({
  backgroundColor: vars.color['dark-100'],
  border: '2px solid ' + vars.color['dark-300'],
  borderRadius: vars.borderRadius.medium,
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.extraLight,
  padding:
    vars.spacing['1x'] +
    vars.spacing['1x'] +
    vars.spacing['1x'] +
    vars.spacing['0x'],
  height: '20vh',
});

export const CodeBlockHeader = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing['1x'],
});

export const CodeBlockTitle = style({
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const CodeBlockOptions = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
  position: 'absolute',
  top: '1rem',
  right: '1rem',
});

export const CodeBlockLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});
