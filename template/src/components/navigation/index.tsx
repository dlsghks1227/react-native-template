import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import TabNavigator from "./tab/TabNavigator";
import { ROUTE_AUTH, ROUTE_COMMON } from "@utils/constants/string.constants";
import AuthNavigator from "./auth/authNaviagtion";

export interface AppStackParamList extends ParamListBase {
	Tab: undefined;
	Auth: undefined;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();
export default function AppStackNavigator() {
	return (
		<AppStack.Navigator
			initialRouteName={ROUTE_COMMON}
			screenOptions={{ headerShown: false }}>
			<AppStack.Screen name={ROUTE_COMMON} component={TabNavigator} />
			<AppStack.Screen name={ROUTE_AUTH} component={AuthNavigator} />
		</AppStack.Navigator>
	);
}
