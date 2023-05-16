import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const UpvoteButtonContainer = style({
  height: 'auto',
  width: vars.width.fit,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing["0.5x"],
});

const UpvoteButtonCountBase = style({
  color: vars.color["text-white-300"],
});

const UpvoteButtonCountActive = style({
  color: vars.color["primary-100"],
});

export const VoteBarCount = styleVariants({
  default: [UpvoteButtonCountBase],
  active: [UpvoteButtonCountActive]
});