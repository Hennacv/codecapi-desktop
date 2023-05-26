import { style } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

export const UserProfileContainer = style({
  padding: vars.spacing['1.5x'],
  marginBottom: vars.spacing['1.25x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
  gap: vars.spacing['0.75x'],
});

export const UserProfileInfoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['0.75x'],
  alignItems: 'center',
  '@media': {
    'screen and (max-width: 882px)': {
      margin: '0 auto',
    },
  },
});

export const UserProfileTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.25x'],
  width: vars.width.fit,
});

export const UserProfileImage = style({
  width: '6rem',
  height: '6rem',
  borderRadius: vars.borderRadius.small,
  backgroundColor: vars.color['dark-500'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: vars.fontSize.extraLarge,
});

export const UserProfileName = style({
  fontSize: vars.fontSize.large,
  fontWeight: vars.fontWeight.medium,
  color: vars.color['text-white-100'],
});

export const UserProfileFunction = style({
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.light,
  color: vars.color['text-white-100'],
});

export const UserProfileEmail = style({
  fontSize: vars.fontSize.small,
  fontWeight: vars.fontWeight.light,
  color: vars.color['text-white-300'],
});

export const UserProfileHeader = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
});

export const UserCounterContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['2x'],
  '@media': {
    'screen and (max-width: 882px)': {
      margin: '0 auto',
    },
  },
  marginLeft: 'auto',
});

export const UserCounterTitle = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const UserCounter = style({
  fontSize: vars.fontSize.xxLarge,
  fontWeight: vars.fontWeight.semiBold,
  color: vars.color['text-white-100'],
  padding: vars.spacing['0.5x'],
  textAlign: 'center',
});

export const UserProfileEditButton = style({
  marginTop: vars.spacing['1.25x'],
});
