import * as types from "@/redux/mutation-types";

export const setLanguage = (language: string) => ({
	type: types.SET_LANGUAGE,
	language
});

export const setToken = (token: string) => ({
	type: types.SET_TOKEN,
	token
});
