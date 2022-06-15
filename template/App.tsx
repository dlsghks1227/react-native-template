import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackNavigator from "@components/navigation";
import { navigationRef } from "@utils/navigate";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

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
