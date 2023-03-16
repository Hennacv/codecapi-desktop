import { globalStyle } from '@vanilla-extract/css';

globalStyle('html', {
    boxSizing: 'border-box'
});

globalStyle('body , body *', {
    margin: '0px',
    padding: '0px',
    fontFamily: 'Inter, sans-serif',
    backgroundColor: '#1E1E1E',
    color: '#FDFDFD',
    fontSize: '16px',
});

globalStyle('*, *:before, *:after', {
    boxSizing: 'inherit'
});
