import Header from "../../components/header/header";
import classes from "./Main.module.css";
import SearchResult from "../../components/SearchResults/SearchResults";
import Recipe from "../../components/Recipe/Recipe";

const Main = (props) => {
	return (
		<div className={classes.Main}>
			<Header />
			<div className={classes.SubMain}>
				<SearchResult />
				<Recipe />
			</div>
		</div>
	);
};

export default Main;
