import baseService from "@/service/baseService";
import { Login } from "../interface";
import { PORT1 } from "@/api/config/servicePort";

export const loginApi = (loginForm: Login.ReqLoginForm) => {
	return baseService.post<Login.ResLogin>(PORT1 + "/login", loginForm);
};

export const getAuthButtons = () => {
	return baseService.get<Login.ResAuthButtons>(PORT1 + "/auth/buttons");
};

export const getMenuList = () => {
	return baseService.get<Menu.MenuOptions[]>(PORT1 + "/menu/list");
};
