import { navigate } from "@utils/Navigate";
import React from "react";
import { View } from "react-native";
import {
	LogoContainer,
	FormContainer,
	LandingFormButton,
} from "./Landing.styles";

export default function Landing() {
	return (
		<View>
			<LogoContainer></LogoContainer>
			<FormContainer></FormContainer>
		</View>
	);
}
