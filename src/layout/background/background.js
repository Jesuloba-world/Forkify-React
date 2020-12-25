import classes from "./background.module.css";
import Logo from "../../components/Logo/Logo";
import Footer from "../Footer/Footer";
import Navigation from "./Top/Top";

const background = (props) => {
	return (
		<div className={classes.Background}>
			<Navigation />
			<div className={classes.container}>{props.children}</div>
			<Footer />
		</div>
	);
};

export default background;
