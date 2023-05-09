import { useState } from "react";
import { connect } from "react-redux";
import md5 from "js-md5";
import { setToken } from "@/redux/modules/global/action";
import { useTranslation } from "react-i18next";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Login } from "@/api/interface";
import { HOME_URL } from "@/config/config";

const LoginForm = (props: any) => {
	const { t } = useTranslation();
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const { setToken } = props;
	const [loading, setLoading] = useState<boolean>(false);

	const onFinish = (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			setToken("111");
			message.success("登录成功");
			navigate(HOME_URL);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log("login fail:", errorInfo);
	};

	return (
		<Form
			form={form}
			name="basic"
			labelCol={{ span: 6 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "请输入用户名" }]}>
				<Input placeholder="用户名：admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
				<Input.Password autoComplete="new-password" placeholder="密码：123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button
					onClick={() => {
						form.resetFields();
					}}
					icon={<CloseCircleOutlined />}
				>
					{t("login.reset")}
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					{t("login.confirm")}
				</Button>
			</Form.Item>
		</Form>
	);
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(LoginForm);
