import SearchButton from "../UI/SearchButton/SearchButton";
import classes from "./Search.module.css";

import {} from "react-redux";

const search = (props) => {
	const searchClass = [classes.Search];

	if (props.header) {
		searchClass.push(classes.Header_Search);
	}

	return (
		<form className={searchClass.join(" ")} onSubmit={props.search}>
			<input
				type="text"
				className={classes.Search__field}
				placeholder="Search over 1,000,000 recipes..."
				onChange={props.type}
				value={props.typed}
			></input>
			<SearchButton />
		</form>
	);
};

export default search;
