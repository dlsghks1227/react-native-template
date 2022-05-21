// import original module declarations
import "styled-components";

export interface IPalette {
	main: string;
	light: string;
	dark: string;
	contrastText: string;
}

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		shape: {
			borderRadius: string;
		}
		palette: {
			primary: IPalette;
			secondary: IPalette;
		};
	}
}
