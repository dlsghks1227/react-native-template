import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackNavigator from "@components/routing";

export default function App() {
	return (
		<NavigationContainer>
			<AppStackNavigator />
		</NavigationContainer>
	);
}
