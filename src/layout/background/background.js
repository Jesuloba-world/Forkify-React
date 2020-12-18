import classes from "./background.module.css";
import Logo from "../../components/Logo/Logo";
import Footer from "../Footer/Footer";

const background = (props) => {
	return (
		<div className={classes.Background}>
			<div className={classes.Logo_holder}>
				<Logo />
			</div>
			{props.children}
			<Footer />
		</div>
	);
};

export default background;
