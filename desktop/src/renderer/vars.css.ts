import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
    color: {
        'dark-100': '#1E1E1E',
        'dark-200': '#333333',
        'dark-300': '#494949',
        'dark-400': '#606060',
        'dark-500': '#797979',
        'dark-600': '#929292',
        'dark-opaque': '#1E1E1E80',
        'delete-100': '#651D1A',
        'delete-200': '#E3444C',
        'delete-300': '#FECDC8',
        'primary-100': '#13CB90',
        'primary-200': '#49D19C',
        'primary-300': '#68D8A8',
        'primary-400': '#81DEB4',
        'primary-500': '#98E4C0',
        'primary-600': '#AEE9CD',
        'text-white-100': '#FDFDFD',
        'text-white-200': '#CBCBCB',
        'text-white-300': '#989898'
    },
    borderRadius: {
        'small': '0.5rem',
        'medium': '0.75rem',
        'large': '1rem'
    },
    breakpoints: {
        'mobile': '640px',
        'tablet': '768px',
        'smallScreen': '1024px',
        'LargeScreen': '1280px'
    },
    font: {
        default: 'Inter, sans-serif'
    },
    fontSize: {
        'extraSmall': '0.75em',
        'small': '0.875em',
        'medium': '0.95em',
        'base': '1em',
        'large': '1.25em',
        'extraLarge': '1.5em',
        'xxLarge': '2em',
    },
    fontWeight: {
        'extraLight': '200',
        'light': '300',
        'regular': '400',
        'medium': '500',
        'semiBold': '600',
        'bold': '700',
        'extraBold': '800'
    },
    spacing: {
        '0x': '0rem',
        '0.25x': '0.25rem',
        '0.5x': '0.5rem',
        '0.75x': '0.75rem',
        '1x': '1rem',
        '1.25x': '1.25rem',
        '1.5x': '1.5rem',
        '2x': '2rem',
        '3x': '3rem',
        '4.75x': '4.75rem'
    },
    width: {
        'full': '100%',
        'fit': 'fit-content'
    },
    height: {
        'page': '100vh',
        'full': '100%'
    },
    transition: {
        'defaultHover': 'all 50ms ease-in-out'
    },
});
