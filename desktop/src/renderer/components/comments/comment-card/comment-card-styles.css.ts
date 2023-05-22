import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const CommentCardContainer = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: vars.spacing["0.5x"],
  fontSize: vars.fontSize.small,
  color: vars.color["text-white-300"],
});

export const CommentCardUserContainer = style({
  position: "relative",
  width: vars.spacing["1.75x"],
  height: vars.spacing["1.75x"],
  backgroundColor: vars.color["dark-300"],
  borderRadius: vars.borderRadius.small,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color["text-white-100"],
  fontSize: vars.fontSize.extraSmall,
  margin: 0,
});

const CommentLineBase = style({
  backgroundColor:vars.color["dark-300"],
  width: "2px",
  content: '',
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
});

const CommentLineTop = style({
  top: "-1rem",
  bottom: "1.75rem",
});

const CommentLineBottom = style({
  top: "1.75rem",
  bottom: "-1rem",
});

export const CommentCardLineVariants = styleVariants({
  CommentLineTop: [CommentLineBase, CommentLineTop],
  CommentLineBottom: [CommentLineBase, CommentLineBottom]
});


export const CommentCardValue = style({
  color: vars.color["text-white-200"],
});