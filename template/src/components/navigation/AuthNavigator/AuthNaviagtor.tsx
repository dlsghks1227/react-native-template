import React from "react";
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
	NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { ParamListBase } from "@react-navigation/native";

import Login from "@views/Auth/Login/Login";
import Landing from "@views/Auth/Landing/Landing";
import { AppStackParamList } from "..";

export interface AuthParamList extends ParamListBase {
	Landing: undefined;
	Login: undefined;
}

export type AuthNavigationProp = NativeStackScreenProps<
	AppStackParamList,
	"Auth"
>;

const AuthStack = createNativeStackNavigator<AuthParamList>();
export default function AuthNavigator() {
	const option: NativeStackNavigationOptions = {
		headerShown: false,
	};
	// 	headerShown: true,
	// 	headerLeft: () => (
	// 		<Button title="back" onPress={() => navigation.goBack()} />
	// 	),
	// )};

	return (
		<AuthStack.Navigator initialRouteName="Landing" screenOptions={option}>
			<AuthStack.Screen key="Landing" name="Landing" component={Landing} />
			<AuthStack.Screen key="Login" name="Login" component={Login} />
		</AuthStack.Navigator>
	);
}
