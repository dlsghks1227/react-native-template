import { Platform, Text, TouchableOpacity } from "react-native";
import { UI } from "src/@types/UI";
import styled, { css } from "styled-components/native";

export const ButtonContainer = styled(TouchableOpacity)<UI>`
	background-color: ${(props) =>
		props.theme.palette[props.color ?? "primary"].main};
	border-radius: ${(props) => props.theme.shape.borderRadius};
	padding: 10px 10px;
	${Platform.select({
		ios: css`
			box-shadow: 1px 1px 1px #aaaaaaaa;
		`,
		android: css`
			elevation: 4;
			shadow-color: #000;
			shadow-offset: 1px 1px;
			shadow-opacity: 0.5;
			shadow-radius: 1px;
		`,
	})}
`;

export const TextWrapper = styled(Text)`
	text-align: center;
`;
