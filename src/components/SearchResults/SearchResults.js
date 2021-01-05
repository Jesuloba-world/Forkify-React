import { useSelector } from "react-redux";
import Glass from "../UI/Glass/Glass";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
	const searchResult = useSelector((state) => state.search.result);
	const searching = useSelector((state) => state.search.searching);

	let transformedResult = null;

	if (!searchResult) {
		if (searching) {
			transformedResult = <Spinner />;
		} else {
			transformedResult = (
				<h2 className={classes.no_search}>Search for Something</h2>
			);
		}
	} else {
		transformedResult = (
			<div className={classes.SearchResults}>
				<ul>
					{searchResult.map((el) => (
						<SearchResult result={el} />
					))}
				</ul>
			</div>
		);
	}

	return <Glass>{transformedResult}</Glass>;
};

export default SearchResults;
