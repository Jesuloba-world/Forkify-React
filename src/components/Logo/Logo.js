import classes from "./Logo.module.css";
import Logo from "../../assets/images/logo.png";

const mainLogo = (props) => {
	return <img src={Logo} alt="forkify Logo" className={classes.Logo} />;
};

export default mainLogo;
