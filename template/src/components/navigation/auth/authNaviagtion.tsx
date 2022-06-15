import React from "react";
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";
import {
	ROUTE_AUTH,
	ROUTE_AUTH_LANDING,
	ROUTE_AUTH_LOGIN,
} from "@utils/constants/string.constants";
import { AppStackParamList } from "..";
import LandingScreen from "@views/auth/landing/Landing";
import LoginScreen from "@views/auth/login/Login";

export interface AuthParamList extends ParamListBase {
	Landing: undefined;
	Login: undefined;
}

export type AuthNavigationProp = NativeStackScreenProps<
	AppStackParamList,
	typeof ROUTE_AUTH
>;

const AuthStack = createNativeStackNavigator<AuthParamList>();
export default function AuthNavigator() {
	const option: NativeStackNavigationOptions = {
		headerShown: false,
	};

	return (
		<AuthStack.Navigator
			initialRouteName={ROUTE_AUTH_LANDING}
			screenOptions={option}>
			<AuthStack.Screen
				key={ROUTE_AUTH_LANDING}
				name={ROUTE_AUTH_LANDING}
				component={LandingScreen}
			/>
			<AuthStack.Screen
				key={ROUTE_AUTH_LOGIN}
				name={ROUTE_AUTH_LOGIN}
				component={LoginScreen}
			/>
		</AuthStack.Navigator>
	);
}
