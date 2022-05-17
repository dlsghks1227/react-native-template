import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

import Home from "@views/Home/Home";

export interface TabParamList extends ParamListBase {
	Home: undefined;
}

const HomeTab = createBottomTabNavigator<TabParamList>();
export default function TabNavigator() {
	return (
		<HomeTab.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: true }}>
			<HomeTab.Screen name="Home" component={Home} />
		</HomeTab.Navigator>
	);
}
