import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchButton from "../UI/SearchButton/SearchButton";
import classes from "./Search.module.css";
import { searchSubmit } from "../../store/actions/index";

const Search = (props) => {
	const [search, setSearch] = useState("");

	const dispatch = useDispatch();

	const onSearchHandler = (event) => {
		setSearch("");
		return dispatch(searchSubmit(event, search));
	};

	const onChangeHandler = (event) => {
		setSearch(event.target.value);
	};

	const searchClass = [classes.Search];

	if (props.header) {
		searchClass.push(classes.Header_Search);
	}

	return (
		<form className={searchClass.join(" ")} onSubmit={onSearchHandler}>
			<input
				type="text"
				className={classes.Search__field}
				placeholder="Search over 1,000,000 recipes..."
				onChange={onChangeHandler}
				value={search}
			></input>
			<SearchButton />
		</form>
	);
};

export default Search;
