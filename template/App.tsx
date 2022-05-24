import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import AppStackNavigator from "@components/navigation";
import { navigationRef } from "@utils/Navigate";
import { theme } from "@styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<NavigationContainer ref={navigationRef}>
					<AppStackNavigator />
				</NavigationContainer>
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
