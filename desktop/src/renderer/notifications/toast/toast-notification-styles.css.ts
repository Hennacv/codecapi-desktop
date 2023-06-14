import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

const toastBase = style({
  backgroundColor: vars.color["dark-300"],
  color: vars.color["text-white-100"],
  border: `2px solid ${vars.color["dark-400"]}`,
  borderRadius: vars.borderRadius.medium,
  fontFamily: vars.font.default,
  width: vars.width.fit,
});

const toastSuccess = style({});
const toastError = style({});
const toastInfo = style({});
const toastWarning = style({});

export const toastStylesVariants = styleVariants({
  succes: [toastBase, toastSuccess],
  error: [toastBase, toastError],
  info: [toastBase, toastInfo],
  warning: [toastBase, toastWarning],
});

globalStyle('.Toastify__progress-bar--success', {
  background: vars.color["primary-100"],
});

globalStyle('.Toastify__progress-bar--error', {
  background: vars.color["delete-200"],
});

globalStyle('.Toastify__toast-container', {
  width: vars.width.fit,
});

globalStyle('.Toastify__close-button', {
  marginLeft: vars.spacing["0.5x"],
});