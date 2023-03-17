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
    padding: vars.spacing['0.5x'] + vars.spacing['0.75x'],
    borderRadius: vars.borderRadius.medium,
    fontSize: vars.fontSize.small,
});

export const TagVariantsStyle = styleVariants({
    default: [TagBaseStyle],
    small: [TagBaseStyle, {
        padding: vars.spacing['0.25x'] + vars.spacing['0.5x'],
        borderRadius: vars.borderRadius.small,
        fontSize: vars.fontSize.extraSmall,
    }],
    defaultAdd: [TagBaseStyle, {
        transition: vars.transition.defaultHover,
        ':hover': {
            backgroundColor: vars.color['dark-400'],
            transition: vars.transition.defaultHover,
        }
    }],
    defaultRemove: [TagBaseStyle, {
        padding: vars.spacing['0.5x'] + vars.spacing['0.75x'],
        borderRadius: vars.borderRadius.medium,
        fontSize: vars.fontSize.small,
        transition: vars.transition.defaultHover,
        ':hover': {
            backgroundColor: vars.color['dark-300'],
            transition: vars.transition.defaultHover,
            opacity: '0.5',
        }
    }],
});

export const TagColorBlob = style({
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '0.65rem',
    height: '0.65rem',
});

export const TagIconBase = style({
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

export const TagIcon = styleVariants({
    add: [TagIconBase],
    delete: [TagIconBase, {
        transform: 'rotateY(180deg) rotate(45deg) translateZ(0)',
    }],
});

export const tagButton = style({ 
	border: 'none',
	font: 'inherit',
	cursor: 'pointer',
    backgroundColor: 'transparent',
});