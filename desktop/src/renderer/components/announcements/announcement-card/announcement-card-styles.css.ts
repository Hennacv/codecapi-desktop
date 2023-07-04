import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'renderer/vars.css';

const AnnouncementCardContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
  backgroundPosition: 'center',
  position: 'relative',
});

const AnnouncementCardPhotoContainer = style({
  padding: vars.spacing['1.5x'],
  width: vars.width.full,
  backgroundColor: vars.color['dark-200'],
  borderRadius: vars.borderRadius.large,
  backgroundPosition: 'center',
  position: 'relative',
  ':before': {
    content: "",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: vars.borderRadius.large,
  }
});

const AnnouncementCardHover = style({
  transition: vars.transition.defaultHover,
  pointerEvents: 'auto',
  ':hover': {
    backgroundColor: vars.color['dark-300'],
    cursor: 'pointer',
  },
});

export const AnnouncementCardContent = style({
  width: vars.width.full,
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing['0.75x'],
  fontSize: vars.fontSize.base,
  position: 'relative',
});

export const AnnouncementCardTitle = style({
  fontWeight: vars.fontWeight.medium,
});

export const AnnouncementCardDescription = style({
  fontWeight: vars.fontWeight.light,
  color: vars.color['text-white-200'],
  fontSize: vars.fontSize.small,
});

export const AnnouncementCardButtonsContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: vars.spacing['0.25x'],
});

export const AnnouncementCardVariants = styleVariants({
  default: [AnnouncementCardContainer],
  defaultHover: [AnnouncementCardContainer, AnnouncementCardHover],
});

export const AnnouncementCardPhotoVariants = styleVariants({
  default: [AnnouncementCardPhotoContainer],
  defaultHover: [AnnouncementCardPhotoContainer, AnnouncementCardHover]
})
