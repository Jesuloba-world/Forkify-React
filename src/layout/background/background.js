import classes from "./background.module.css";
import Logo from "../../components/Logo/Logo";

const background = (props) => {
	return (
		<div className={classes.Background}>
			<div className={classes.Logo_holder}>
				<Logo />
			</div>
			{props.children}
		</div>
	);
};

export default background;
