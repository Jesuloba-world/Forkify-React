import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Glass from "../UI/Glass/Glass";
import classes from "./header.module.css";

const Header = () => {
	return (
		<Glass>
			<div className={classes.Header}>
				<div className={classes.LogoHolder}>
					<Logo />
				</div>
				<Search
					style={{
						margin: "0",
						transform: "scaleX(1)",
					}}
				/>
			</div>
		</Glass>
	);
};

export default Header;
