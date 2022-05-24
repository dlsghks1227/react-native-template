import React from "react";
import { Button, GestureResponderEvent, Text } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderContainer } from "./Header.styles";

interface Props {
	onBack?: (event: GestureResponderEvent) => void;
}

export default function Header(props: Props) {
	const insets: EdgeInsets = useSafeAreaInsets();

	return (
		<HeaderContainer safeArea={insets}>
			{props.onBack && <Button title="Back" onPress={props.onBack} />}
			<Text>Text</Text>
			<Button title="Close" onPress={props.onBack} />
		</HeaderContainer>
	);
}
