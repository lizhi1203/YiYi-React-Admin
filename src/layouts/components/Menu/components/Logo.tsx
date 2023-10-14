import { connect } from "react-redux";
import logo from "@/assets/images/logo.png";

const Logo = (props: any) => {
	const { isCollapse } = props;

	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? <h4 className="logo-text">YiYi admin</h4> : null}
		</div>
	);
};

const mapStateToProps = (state: any) => state.menu;
export default connect(mapStateToProps)(Logo);
