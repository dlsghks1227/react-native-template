import React from "react";
import { View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

export interface AppStackParamList extends ParamListBase {
	Home: undefined;
}

const AppStack = createNativeStackNavigator<AppStackParamList>();
export default function AppStackNavigator() {
	return (
		<AppStack.Navigator
			initialRouteName="Home"
			screenOptions={{ headerShown: false }}>
			<AppStack.Screen
				name="Public"
				component={() => <View />}></AppStack.Screen>
		</AppStack.Navigator>
	);
}
