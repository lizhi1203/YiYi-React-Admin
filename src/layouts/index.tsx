import { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { setAuthButtons } from "@/redux/modules/auth/action";
import { updateCollapse } from "@/redux/modules/menu/action";
import { getAuthButtons } from "@/api/modules/login";
import { Layout } from "antd";
import "./index.less";

const LayoutIndex = (props: any) => {
	const { Sider, Content } = Layout;
	const { isCollapse, updateCollapse, setAuthButtons } = props;

	const getAuthButtonsList = async () => {
		const { data } = await getAuthButtons();
		setAuthButtons(data);
	};

	const listeningWindow = () => {
		window.onresize = () => {
			return (() => {
				const screenWidth = document.body.clientWidth;
				if (!isCollapse && screenWidth < 1200) updateCollapse(true);
				if (!isCollapse && screenWidth > 1200) updateCollapse(false);
			})();
		};
	};

	useEffect(() => {
		listeningWindow();
		getAuthButtonsList();
	}, []);

	return (
		<section className="container">
			<Sider trigger={null} collapsed={props.isCollapse} width={200} theme="dark"></Sider>
			<Layout>
				<Content>
					Layout<Outlet></Outlet>
				</Content>
			</Layout>
		</section>
	);
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { setAuthButtons, updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
