import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppStackNavigator from "@components/navigation";
import { navigationRef } from "@utils/Navigate";

export default function App() {
	return (
		<NavigationContainer ref={navigationRef}>
			<AppStackNavigator />
		</NavigationContainer>
	);
}
