import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import * as actions from "../../store/actions";

const Home = (props) => {
	const [search, setSearch] = useState("");

	const dispatch = useDispatch();

	const onTypeHandler = (event) => {
		setSearch(event.target.value);
	};

	const onSearchHandler = (event) => {
		setSearch("");
		return dispatch(actions.searchSubmit(event, search));
	};

	return (
		<Fragment>
			<div
				style={{
					height: "15rem",
				}}
			>
				<Logo />
			</div>
			<Search
				typed={search}
				search={onSearchHandler}
				type={onTypeHandler}
			/>
		</Fragment>
	);
};

export default Home;
