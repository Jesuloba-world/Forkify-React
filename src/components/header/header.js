import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import classes from "./header.module.css";

const Header = () => {
	return (
		<div className={classes.Header}>
			<Logo />
			<Search />
		</div>
	);
};

export default Header;
