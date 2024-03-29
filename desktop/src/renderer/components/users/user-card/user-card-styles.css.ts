import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const UserCardsContainer = style({
  display: 'flex',
  flexFlow: 'row wrap',
  gap: vars.spacing['1x'],
  marginTop: vars.spacing['1.25x'],
});

export const UserCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.card,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  minHeight: vars.height.card,
  ':hover': {
    backgroundColor: vars.color['dark-300'],
    cursor: 'pointer',
  },
});

export const UserCardImage = style({
  width: '4rem',
  height: '4rem',
  marginTop: vars.spacing['0.5x'],
  marginBottom: vars.spacing['1x'],
  borderRadius: vars.borderRadius.small,
  backgroundColor: vars.color['dark-500'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.fontSize.large,
});

export const UserCardName = style({
  color: vars.color['text-white-100'],
  fontWeight: vars.fontWeight.medium,
  fontSize: vars.fontSize.small,
  width: vars.width.fit,
  display: 'flex',
  flexWrap: 'wrap',
});

export const UserCardFunction = style({
  color: vars.color['text-white-300'],
  fontWeight: vars.fontWeight.regular,
  fontSize: vars.fontSize.extraSmall,
  width: vars.width.fit,
});
