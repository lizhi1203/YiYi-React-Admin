import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { setMenuList } from "@/redux/modules/menu/action";
import { getOpenKeys } from "@/utils/util";
import { Menu, Spin } from "antd";
import * as Icons from "@ant-design/icons";
import { getMenuList } from "@/api/modules/login";
import type { MenuProps } from "antd";

const LayoutMenu = (props: any) => {
	const { pathname } = useLocation();
	const { isCollapse, setMenuList: setMenuListAction } = props;
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	useEffect(() => {
		setSelectedKeys([pathname]);
		isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
	}, [isCollapse, pathname]);

	type MenuItem = Required<MenuProps>["items"][number];
	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: "group"
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type
		} as MenuItem;
	};

	const customIcons: { [key: string]: any } = Icons;
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name]);
	};

	const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: Menu.MenuOptions) => {
			if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)));
			newArr.push(getItem(item.title, item.path, addIcon(item.icon!)), deepLoopFloat(item.children));
		});
		return newArr;
	};

	const [menuList, setMenuList] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const getMenuData = async () => {
		setLoading(true);
		try {
			const { data } = await getMenuList();
			if (!data) return;
			setMenuList(deepLoopFloat(data));
			setMenuListAction(data);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getMenuData();
	}, []);

	return (
		<Spin spinning={loading} tip="loading...">
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				openKeys={openKeys}
				selectedKeys={selectedKeys}
				items={menuList}
			></Menu>
		</Spin>
	);
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { setMenuList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutMenu);
