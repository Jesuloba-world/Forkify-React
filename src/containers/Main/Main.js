import Header from "../../components/header/header";
import classes from "./Main.module.css";
import Glass from "../../components/UI/Glass/Glass";
import SearchResult from "../../components/SearchResults/SearchResults";

const Main = (props) => {
	return (
		<div className={classes.Main}>
			<Header />
			<div className={classes.SubMain}>
				<SearchResult />
				<Glass>This is the recipe section</Glass>
			</div>
		</div>
	);
};

export default Main;
