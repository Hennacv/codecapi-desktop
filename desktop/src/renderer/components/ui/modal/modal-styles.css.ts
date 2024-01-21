import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const Modal = style({
  backgroundColor: vars.color['dark-opaque'],
  position: 'absolute',
  inset: 0,
  opacity: 0,
  transition: `all 0.3s ease-in-out`,
  pointerEvents: 'none',
  zIndex: 5,
  backdropFilter: 'brightness(75%)'
});

const Show = style({
  opacity: 1,
  pointerEvents: 'visible',
});

export const ModalStyles = styleVariants({
  basic: [Modal],
  show: [Modal, Show],
});

export const ModalContent = style({
  backgroundColor: vars.color['dark-200'],
  position: 'absolute',
  borderRadius: vars.borderRadius.large,
  padding: vars.spacing['1.5x'],
  right: vars.spacing['2x'],
  left: vars.spacing['2x'],
  top: '6.45rem',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '80vh',
  overflow: 'scroll',
  gap: vars.spacing['2x'],
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  }
});
