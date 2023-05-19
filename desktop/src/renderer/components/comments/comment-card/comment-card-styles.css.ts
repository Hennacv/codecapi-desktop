import { globalStyle, style } from "@vanilla-extract/css";
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
  backgroundColor: "#8C5962",
  borderRadius: vars.borderRadius.small,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color["text-white-100"],
  fontSize: vars.fontSize.extraSmall,
  margin: 0,
  paddingBottom: "1em",
  paddingLeft: "20px",
});

export const CommentCardLine = style({
  backgroundColor: vars.color["primary-400"],
  width: "1px",
  content: '',
  position: "absolute",
  top: "0px",
  bottom: "0px",
  left: "50%",
  transform: "translateX(-50%)",
});


export const CommentCardValue = style({
  color: vars.color["text-white-200"],
});