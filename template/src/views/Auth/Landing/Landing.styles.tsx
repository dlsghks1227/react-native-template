import Button from "@components/Button/Button";
import { View } from "react-native";
import styled from "styled-components/native";

// TODO: 로그인 랜딩 페이지 로고 컨테이너 색 변경
const LogoContainer = styled(View)`
	height: 30%;
	/* background-color: #000; */
`;

const FormContainer = styled(View)`
	height: 70%;

  justify-content: center;
	align-items: center;
`;

const LandingFormButton = styled(Button)`
	width: 70%;
	margin: 10px 0;
`;

export { LogoContainer, FormContainer, LandingFormButton };
