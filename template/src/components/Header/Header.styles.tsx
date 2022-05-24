import { View } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

interface Props {
	readonly safeArea: EdgeInsets;
}

const HeaderContainer = styled(View)<Props>`
	height: 80px;

	padding-top: ${(props) => props.safeArea.top.toString() + "px"};

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: #ffffff;
`;

export { HeaderContainer };
