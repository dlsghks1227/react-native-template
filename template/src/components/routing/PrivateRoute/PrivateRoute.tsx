import { useEffect, useState } from "react";

import * as Navigation from "@utils/Navigate";

type Props = {
	children: JSX.Element;
};

export default function PrivateRoute({ children }: Props) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// TODO: 로그인 정보 확인
		setIsLoggedIn(true);
		setLoading(false);
	}, []);

	if (loading) return null;

	if (loading === false && isLoggedIn === false) {
		Navigation.navigate("pubilc", { screen: "home" });
	}

	return children;
}
