import * as types from "@/redux/mutation-types";

export const setBreadCrumbList = (breadcurmbList: { [propName: string]: any }) => ({
	type: types.SET_BREADCRUMB_LIST,
	breadcurmbList
});
