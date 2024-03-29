export type AssemblySizeType = "default" | "small" | "large" | "middle";

export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
	breadcrumb: boolean;
	tabs: boolean;
	footer: boolean;
}

export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: AssemblySizeType;
	language: string;
	themeConfig: ThemeConfigProp;
}

export interface AuthState {
	authButtons: {
		[key: string]: any;
	};
	authRouter: string[];
}

export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
}

export interface BreadcrumbState {
	breadcrumbList: {
		[propName: string]: any;
	};
}
