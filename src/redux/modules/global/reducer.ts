import { AnyAction } from "redux";
import { produce } from "immer";
import { GlobalState } from "@/redux/interface";
import * as types from "@/redux/mutation-types";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	assemblySize: "middle",
	language: "",
	themeConfig: {
		primary: "#1890ff",
		isDark: false,
		weakOrGray: "",
		breadcrumb: true,
		tabs: true,
		footer: true
	}
};

const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_LANGUAGE:
				draftState.language = state.language;
				break;
			default:
				return draftState;
		}
	});

export default global;
