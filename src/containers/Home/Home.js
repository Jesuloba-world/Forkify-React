import { Fragment, useState } from "react";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";

const Home = (props) => {
	const [search, setSearch] = useState("");

	const onTypeHandler = (event) => {
		setSearch(event.target.value);
	};

	const onSearchHandler = (event) => {
		event.preventDefault();
		console.log(search);
		setSearch("");
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
