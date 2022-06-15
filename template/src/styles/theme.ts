import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
	shape: {
		borderRadius: "8px",
	},
	fontSizes: {
		title: 60,
		subtitle: 30,
		paragraph: 10,
	},
	colors: {
		black: "#000000",
		white: "#ffffff",
	},
	palette: {
		primary: {
			main: "#64b5f6",
			light: "#9be7ff",
			dark: "#2286c3",
			contrastText: "#000000",
		},
		secondary: {
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			contrastText: "#000000",
		},
		info: {
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			contrastText: "#000000",
		},
		success: {
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			contrastText: "#000000",
		},
		warning: {
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			contrastText: "#000000",
		},
		error: {
			main: "#b0bec5",
			light: "#e2f1f8",
			dark: "#808e95",
			contrastText: "#000000",
		},
		disabledOpacity: 0.48,
	},
};

export { theme };
