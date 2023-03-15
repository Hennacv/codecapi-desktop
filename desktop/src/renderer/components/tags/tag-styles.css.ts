import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const TagBaseStyle = style({
    width: vars.width.fit,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: vars.color['dark-300'],
    color: vars.color['text-white-100'],
    gap: vars.spacing['0.5x'],
});

export const TagVariantsStyle = styleVariants({
    default: [TagBaseStyle, {
        paddingTop: vars.spacing['0.5x'],
        paddingBottom: vars.spacing['0.5x'],
        paddingLeft: vars.spacing['0.75x'],
        paddingRight: vars.spacing['0.75x'],
        borderRadius: vars.borderRadius.medium,
        fontSize: vars.fontSize.base,
    }],
    small: [TagBaseStyle, {
        paddingTop: vars.spacing['0.25x'],
        paddingBottom: vars.spacing['0.25x'],
        paddingLeft: vars.spacing['0.5x'],
        paddingRight: vars.spacing['0.5x'],
        borderRadius: vars.borderRadius.small,
        fontSize: vars.fontSize.small,
    }]
});

export const tagColor = style({ 
    width: '0.5rem',
    height: '0.5rem',
    backgroundColor: 'white',
    borderRadius: '50%'
});