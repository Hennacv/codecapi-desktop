import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const QuestionCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
});

const QuestionCardHover = style({
  transition: vars.transition.defaultHover,
  pointerEvents: 'auto',
  ':hover': {
    backgroundColor: vars.color['dark-300'],
    cursor: 'pointer',
  },
});

export const QuestionCardHeader = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: vars.fontSize.small,
  marginBottom: vars.spacing['1x'],
  color: vars.color['text-white-300'],
});

export const QuestionCardHeaderInfo = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: vars.spacing['0.5x'],
});

export const QuestionCardIconContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.25x'],
});

export const QuestionCardIcon = style({
  height: '1rem',
  width: '1rem',
});

export const QuestionCardContent = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.75x'],
  fontSize: vars.fontSize.base,
});

export const QuestionCardTitle = style({
  fontWeight: vars.fontWeight.medium,
});

export const QuestionCardParagraph = style({
  fontSize: vars.fontSize.small,
  color: vars.color['text-white-200'],
});

export const QuestionCardVariants = styleVariants({
  default: [QuestionCardContainer],
  defaultHover: [QuestionCardContainer, QuestionCardHover],
});

export const QuestionSolvedContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
})

export const QuestionSolvedTag = style({
  width: vars.width.fit,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: vars.color['dark-300'],
  color: vars.color['primary-100'],
  gap: vars.spacing['0.5x'],
  padding: vars.spacing['0.25x'] + vars.spacing['0.5x'],
  borderRadius: vars.borderRadius.small,
  fontSize: vars.fontSize.extraSmall,
})