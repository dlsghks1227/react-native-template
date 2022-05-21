import React from "react";
import { GestureResponderEvent } from "react-native";
import { ButtonContainer, TextWrapper } from "./Button.styles";

interface Props {
	title: string;
	onPress?: (event: GestureResponderEvent) => void;
	color?: "primary" | "secondary";
}

export default function Button({ title, onPress, color = "primary" }: Props) {
	return (
		<ButtonContainer
			activeOpacity={0.6}
			color={color}
			onPress={onPress}>
			<TextWrapper>{title}</TextWrapper>
		</ButtonContainer>
	);
}
