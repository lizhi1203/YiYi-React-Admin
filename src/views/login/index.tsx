import React from "react";
import { useTranslation } from "react-i18next";
const Login = () => {
	const { t, i18n } = useTranslation();
	return (
		<div>
			<button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "zh" : "en")}>切换</button>
			{t("login.confirm")}
		</div>
	);
};
export default Login;
