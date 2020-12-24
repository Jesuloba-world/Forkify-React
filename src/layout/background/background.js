import classes from "./background.module.css";
import Logo from "../../components/Logo/Logo";
import Footer from "../Footer/Footer";
import Top from "./Top/Top";

const background = (props) => {
	return (
		<div className={classes.Background}>
			<Top />
			{props.children}
		</div>
	);
};

export default background;
