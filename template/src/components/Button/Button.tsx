import React from "react";
import { TouchableOpacityProps } from "react-native";
import { UI } from "src/@types/UI";
import { ButtonContainer, TextWrapper } from "./Button.styles";

type Props = { title: string } & UI & TouchableOpacityProps;

export default function Button({ title, color = "primary", ...props }: Props) {
	return (
		<ButtonContainer activeOpacity={1} color={color} {...props}>
			<TextWrapper>{title}</TextWrapper>
		</ButtonContainer>
	);
}
