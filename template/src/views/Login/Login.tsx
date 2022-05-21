import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import Button from "@components/Button/Button";
import { navigate } from "@utils/Navigate";
// const LoginViewStyles = styled(View)(() => ({
// 	backgroundColor: "black",
// }));
const InputContainer = styled(View)`
	display: flex;

	width: 100%;
	height: 100%;

	justify-content: center;
	align-items: center;
`;

const ButtonWrapper = styled(View)`
	width: 70%;
	padding: 5px;
`;

export default function Login() {
	return (
		<SafeAreaView>
			<InputContainer>
				<ButtonWrapper>
					<Button
						title={"Test1"}
						onPress={() => navigate("Tab", { screen: "Home" })}
						color="primary"
					/>
				</ButtonWrapper>
				<ButtonWrapper>
					<Button
						title={"Test2"}
						onPress={() => console.log("Test2")}
						color="secondary"
					/>
				</ButtonWrapper>
			</InputContainer>
		</SafeAreaView>
	);
}
