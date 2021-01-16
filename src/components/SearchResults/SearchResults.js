import { useSelector } from "react-redux";
import Glass from "../UI/Glass/Glass";
import SearchResult from "./SearchResult/SearchResult";
import Spinner from "../UI/Spinner/Spinner";
import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
	const searchResult = useSelector((state) => state.search.result);
	const searching = useSelector((state) => state.search.searching);
	const searchError = useSelector((state) => state.search.error);

	let transformedResult = null;

	if (!searchResult) {
		if (searching) {
			transformedResult = <Spinner />;
		} else {
			if (searchError) {
				transformedResult = (
					<div className={classes.error}>
						<h2 className="error">There was an error</h2>
						<p>{searchError}</p>
					</div>
				);
			} else {
				transformedResult = (
					<h2 className={classes.no_search}>Search for Something</h2>
				);
			}
		}
	} else {
		transformedResult = (
			<div className={classes.SearchResults}>
				<ul>
					{searchResult.map((el) => (
						<SearchResult key={el.id} result={el} />
					))}
				</ul>
			</div>
		);
	}

	return <Glass>{transformedResult}</Glass>;
};

export default SearchResults;
