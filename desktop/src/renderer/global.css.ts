import { globalStyle } from '@vanilla-extract/css';
import { vars } from './vars.css';

globalStyle('html', {
  boxSizing: 'border-box',
});

globalStyle('body , body *', {
    margin: vars.spacing['0x'],
    padding: vars.spacing['0x'],
    fontFamily: 'Inter, sans-serif',
    color: vars.color['text-white-100'],
    fontSize: '16px',
});

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
});
