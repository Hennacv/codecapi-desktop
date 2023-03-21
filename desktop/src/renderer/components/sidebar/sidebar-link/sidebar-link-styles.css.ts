import { style } from "@vanilla-extract/css";
import { vars } from "renderer/vars.css";

export const SideLink = style({
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	margin: '5px 20px',
	padding: '10px 6px',
	overflow: 'hidden',
	whiteSpace: 'nowrap',
	borderStyle: 'solid',
	borderWidth: 'thin',
	borderLeftWidth: 5,
	borderRadius: 10,
	color: vars.color['text-white-200'],
	borderColor: 'transparent',
	':hover': {
		backgroundColor: vars.color['dark-400'],
	},
});

export const SideLinkSelected = style({
	borderColor: vars.color['dark-600'],
	backgroundColor: vars.color['dark-400'],
});