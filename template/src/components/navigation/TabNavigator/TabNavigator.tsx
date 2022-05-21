import React from "react";
import {
	BottomTabNavigationOptions,
	createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

import Home from "@views/Home/Home";

export interface TabParamList extends ParamListBase {
	Home: undefined;
}

const Tap = createBottomTabNavigator<TabParamList>();
export default function TabNavigator() {
	const option: BottomTabNavigationOptions = {
		headerShown: false,
	};
	
	return (
		<Tap.Navigator initialRouteName="Home" screenOptions={option}>
			<Tap.Screen name="Home" component={Home} />
		</Tap.Navigator>
	);
}
