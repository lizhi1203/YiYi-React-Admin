import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "@/routers/interface/index";
import Login from "@/views/login/index";

const metaRouters = import.meta.globEager("./modules/*.tsx");

export const routerArray: RouteObject[] = [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach(key => {
		routerArray.push(...metaRouters[item][key]);
	});
});

export const rootRouter: Array<RouteObject> = [
	{
		path: "/",
		element: <Navigate to="/login" />
	},
	{
		path: "/login",
		element: <Login />
	},
	...routerArray,
	{
		path: "*",
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
