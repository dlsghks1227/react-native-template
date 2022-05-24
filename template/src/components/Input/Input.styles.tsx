import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface Props {
	readonly color?: "primary" | "secondary";
}

export const InputContainer = styled(TextInput)<Props>`
	border-radius: ${(props) => props.theme.shape.borderRadius};
	padding: 10px 10px;
`;
