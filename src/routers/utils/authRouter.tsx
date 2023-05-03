import { useLocation, Navigate } from "react-router-dom";
import { searchRoute } from "@/utils/util";
import { rootRouter } from "@/routers/index";
import { store } from "@/redux";
import { HOME_URL } from "@/config/config";

const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, rootRouter);

	if (!route.meta?.requiresAuth) return props.children;

	const token = store.getState().global.token;
	if (!token) return <Navigate to="/login" replace />;

	const dynamicRouter = store.getState().auth.authRouter;
	const staticRouter = [HOME_URL, "/403"];
	const routerList = dynamicRouter.concat(staticRouter);
	if (routerList.indexOf(pathname) === -1) return <Navigate to="/403" />;

	return props.children;
};

export default AuthRouter;
