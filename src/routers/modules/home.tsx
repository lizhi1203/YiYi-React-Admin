import { RouteObject } from "@/routers/interface/index";
import { LayoutIndex } from "@/routers/constant";
import Home from "@/views/home/index";

const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/home/index",
				element: <Home />,
				meta: {
					key: "home",
					title: "首页",
					requiresAuth: true
				}
			}
		]
	}
];

export default homeRouter;
