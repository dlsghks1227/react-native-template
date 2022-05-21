import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface ContainerProps {
	readonly color?: "primary" | "secondary";
}

export const ButtonContainer = styled(TouchableOpacity)<ContainerProps>`
	background-color: ${(props) =>
		props.theme.palette[props.color ?? "primary"]?.main};
	border-radius: ${(props) => props.theme.shape.borderRadius};
	padding: 10px 10px;
`;

export const TextWrapper = styled(Text)`
	font-size: 20px;
	text-align: center;
`;
