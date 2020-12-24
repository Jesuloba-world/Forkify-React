import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
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
