import React from "react";
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import Login from "@views/Login/Login";

export interface AuthParamList extends ParamListBase {
	Login: undefined;
}

const AuthStack = createNativeStackNavigator<AuthParamList>();
export default function AuthNavigator() {
	const option: NativeStackNavigationOptions = {
		headerShown: false,
	};

	return (
		<AuthStack.Navigator screenOptions={option}>
			<AuthStack.Screen name="Login" component={Login} />
		</AuthStack.Navigator>
	);
}
