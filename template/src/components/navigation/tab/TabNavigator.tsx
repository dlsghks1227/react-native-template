import React from "react";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

import Home from "@views/home/Home";
import { ROUTE_COMMON_HOME } from "@utils/constants/string.constants";

export interface TabParamList extends ParamListBase {
	Home: undefined;
}

const Tap = createBottomTabNavigator<TabParamList>();
export default function TabNavigator() {
	const option: BottomTabNavigationOptions = {
		headerShown: false,
	};
	
	return (
		<Tap.Navigator
			initialRouteName={ROUTE_COMMON_HOME}
			screenOptions={{ headerShown: false }}>
			<Tap.Screen name={ROUTE_COMMON_HOME} component={Home} />
		</Tap.Navigator>
	);
}
