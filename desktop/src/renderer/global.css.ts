import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
    boxSizing: 'border-box'
});

globalStyle('body , body *', {
    margin: '0px',
    padding: '0px',
    fontFamily: 'Inter, sans-serif'
});

globalStyle('*, *:before, *:after', {
    boxSizing: 'inherit'
});
