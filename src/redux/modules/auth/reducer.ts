import { AnyAction } from "redux";
import { produce } from "immer";
import * as types from "@/redux/interface/index";
import { AuthState } from "@/redux/interface/index";

const authState: AuthState = {
	authButtons: {},
	authRouter: []
};

const auth = (state: AuthState = authState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_AUTH_BUTTONS:
				draftState.authButtons = state.authButtons;
				break;
			case types.SET_AUTH_ROUTER:
				draftState.authRouter = state.authRouter;
				break;
			default:
				return draftState;
		}
	});

export default auth;
