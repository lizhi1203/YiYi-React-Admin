import * as types from "@/redux/mutation-types";

export const updateCollapse = (isCollapse: boolean) => ({
	type: types.UPDATE_COLLAPSE,
	isCollapse
});

export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: types.SET_MENU_LIST,
	menuList
});
