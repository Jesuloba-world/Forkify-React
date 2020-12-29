import { Fragment } from "react";
import Header from "../../components/header/header";
import classes from "./Main.module.css";

const Main = (props) => {
	return (
		<div className={classes.Main}>
			<Header />
			<div>This is the search Result and Recipe</div>
		</div>
	);
};

export default Main;
