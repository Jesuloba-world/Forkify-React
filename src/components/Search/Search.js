import SearchButton from "../UI/SearchButton/SearchButton";

import classes from "./Search.module.css";

const search = (props) => {
	return (
		<form className={classes.Search}>
			<input
				type="text"
				className={classes.Search__field}
				placeholder="Search over 1,000,000 recipes..."
				onChange={props.typed}
				value={props.search}
			></input>
			<SearchButton />
		</form>
	);
};

export default search;
