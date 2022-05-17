import PrivateRoute from "@components/routing/PrivateRoute/PrivateRoute";
import React from "react";
import { View } from "react-native";

export default function Home() {
	return (
		<PrivateRoute>
			<View></View>
		</PrivateRoute>
	);
}
