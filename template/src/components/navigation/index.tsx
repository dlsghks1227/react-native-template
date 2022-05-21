import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import TabNavigator from "./TabNavigator/TabNavigator";
import AuthNavigator from "./AuthNavigator/AuthNaviagtor";

export interface AppStackParamList extends ParamListBase {
	Tab: undefined;
	Auth: undefined;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();
export default function AppStackNavigator() {
	return (
		<AppStack.Navigator
			initialRouteName="Auth"
			screenOptions={{ headerShown: false }}>
			<AppStack.Screen name="Tab" component={TabNavigator} />
			<AppStack.Screen name="Auth" component={AuthNavigator} />
		</AppStack.Navigator>
	);
}
