import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import Home from "@views/Home/Home";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "./TabNavigator/TabNavigator";

export interface AppStackParamList extends ParamListBase {
	Tab: BottomTabScreenProps<TabParamList, "Home">;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();
export default function AppStackNavigator() {
	return (
		<AppStack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: true }}>
			<AppStack.Screen name="Home" component={Home} />
		</AppStack.Navigator>
	);
}
