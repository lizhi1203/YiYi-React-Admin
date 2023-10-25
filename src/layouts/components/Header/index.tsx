import { Layout } from "antd";
import CollapseIcon from "./components/CollapseIcon";
import "./index.less";

const LayoutHeader = () => {
	const { Header } = Layout;

	return (
		<Header>
			<div className="header-lf">
				<CollapseIcon />
			</div>
			<div className="header-ri"></div>
		</Header>
	);
};
export default LayoutHeader;
