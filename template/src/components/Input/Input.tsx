import React, { useState } from "react";
import { Text, TextInputProps, View } from "react-native";
import { UI } from "src/@types/UI";
import { InputContainer } from "./Input.styles";

type Props = { feedback: string } & UI & TextInputProps;

export default function Input(props: Props) {
	const [focus, setFocus] = useState(false);

	return (
		<View>
			<InputContainer
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				// focus={focus}
				// invalid={!!props.feedback?.length}
				{...props}
			/>
			{!!props.feedback && <Text>{props.feedback}</Text>}
		</View>
	);
}
