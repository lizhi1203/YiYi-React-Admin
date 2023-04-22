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
