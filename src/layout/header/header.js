import Logo from "../../components/Logo/Logo";
import classes from "./header.module.css";

const Header = () => {
	return (
		<div className={classes.Header}>
			<Logo />
		</div>
	);
};

export default Header;
