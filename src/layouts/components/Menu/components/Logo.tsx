import logo from "@/assets/images/logo.png";

const Logo = () => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			<h2 className="logo-text">Hooks Admin</h2>
		</div>
	);
};

export default Logo;
