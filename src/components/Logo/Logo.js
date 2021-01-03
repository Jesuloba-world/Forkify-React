import classes from "./Logo.module.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const mainLogo = (props) => {
	const logoClasses = [classes.Logo];

	return (
		<Link to="/">
			<img
				src={Logo}
				alt="forkify Logo"
				className={logoClasses.join(" ")}
			/>
		</Link>
	);
};

export default mainLogo;
