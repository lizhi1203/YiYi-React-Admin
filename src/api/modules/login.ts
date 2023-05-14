import baseService from "@/service/baseService";
import { Login } from "../interface";
import { PORT1 } from "@/api/config/servicePort";

export const loginApi = (loginForm: Login.ReqLoginForm) => {
	return baseService.post<Login.ResLogin>(PORT1 + "/login", loginForm);
};
