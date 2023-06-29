import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: vars.spacing['0x'],
  padding: vars.spacing['0x'],
  fontFamily: 'Inter, sans-serif',
  color: vars.color['text-white-100'],
  fontSize: '100%',
});

globalStyle('button, input, textarea, select', {
  margin: vars.spacing['0x'],
  padding: vars.spacing['0x'],
  fontFamily: 'Inter, sans-serif',
  fontSize: '100%',
  color: vars.color['text-white-100'],
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
  margin: vars.spacing['0x'],
  padding: vars.spacing['0x'],
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
});

globalStyle('img', {
  maxWidth: '100%',
});
