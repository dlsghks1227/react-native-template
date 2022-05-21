import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import AppStackNavigator from "@components/navigation";
import { navigationRef } from "@utils/Navigate";
import { theme } from "@styles/theme";

export default function App() {

	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer ref={navigationRef}>
				<AppStackNavigator />
			</NavigationContainer>
		</ThemeProvider>
	);
}
