import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import classes from "./Main.module.css";
import Glass from "../../components/UI/Glass/Glass";

const Main = (props) => {
	const searchResult = useSelector((state) => state.search.result);
	console.log(searchResult);

	return (
		<div className={classes.Main}>
			<Header />
			<div className={classes.SubMain}>
				<Glass>This is the Search Result section</Glass>
				<Glass>This is the recipe section</Glass>
			</div>
		</div>
	);
};

export default Main;
