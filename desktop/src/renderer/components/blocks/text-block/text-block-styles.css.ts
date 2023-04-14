import { vars } from 'renderer/vars.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const ContainerStyles = style({
  borderRadius: vars.borderRadius.medium,
});

globalStyle(`${ContainerStyles} .ql-toolbar`, {
  borderTopLeftRadius: vars.borderRadius.medium,
  borderTopRightRadius: vars.borderRadius.medium,
  border: `2px solid ${vars.color['dark-300']}`,
  backgroundColor: vars.color['dark-300'],
});

globalStyle(`${ContainerStyles} .ql-toolbar .ql-picker`, {
  color: vars.color['text-white-200'],
});

globalStyle(`${ContainerStyles} .ql-toolbar .ql-stroke`, {
  stroke: vars.color['text-white-200'],
  fill: 'none',
});

globalStyle(`${ContainerStyles} .ql-toolbar .ql-fill`, {
  fill: vars.color['text-white-200'],
  stroke: 'none',
});

// I'm not sure if we should seperate the buttons like this
globalStyle(`${ContainerStyles} .ql-toolbar .ql-formats button`, {
  margin: 2,
  backgroundColor: vars.color['dark-400'],
  borderRadius: vars.borderRadius.small,
});

globalStyle(`${ContainerStyles} .ql-container`, {
  fontSize: vars.fontSize.base,
  borderBottomLeftRadius: vars.borderRadius.medium,
  borderBottomRightRadius: vars.borderRadius.medium,
  border: `2px solid ${vars.color['dark-300']}`,
  backgroundColor: vars.color['dark-200'],
});

globalStyle(`${ContainerStyles} .ql-container .ql-editor.ql-blank::before`, {
  color: vars.color['text-white-300'],
  paddingLeft: vars.spacing['0.5x'],
});

export const TextBlockHeader = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: vars.spacing['1x'],
});

export const TextBlockTitle = style({
  fontSize: vars.fontSize.extraSmall,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-300'],
});

export const TextBlockLabel = style({
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.regular,
  color: vars.color['text-white-100'],
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: vars.spacing['0.5x'],
});

export const TextBlockHTML = style({
  color: vars.color['text-white-200'],
});

globalStyle(`.${ContainerStyles} .ql-editor`, {
  fontFamily: vars.font.default,
  lineHeight: 1.2,
  padding: vars.spacing['1.5x'],
});

globalStyle(`${TextBlockHTML} > p > a, ${ContainerStyles} .ql-editor p > a`, {
  color: vars.color['primary-100'],
});

globalStyle(`${TextBlockHTML} > h1, ${ContainerStyles} .ql-editor > h1`, {
  fontSize: vars.fontSize.extraLarge,
});

globalStyle(`${TextBlockHTML} > h2, ${ContainerStyles} .ql-editor > h2`, {
  fontSize: vars.fontSize.large,
});

globalStyle(`${TextBlockHTML} > h3, ${ContainerStyles} .ql-editor > h3`, {
  fontSize: '1.15em',
});

globalStyle(`${TextBlockHTML} > p, ${ContainerStyles} .ql-editor > p`, {
  fontSize: vars.fontSize.base,
});
