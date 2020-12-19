import { useState } from "react";

import Home from "./containers/Home/Home";
import Main from "./containers/Main/Main";

import "./App.css";

function App() {
	// Main state
	const [search, setSearch] = useState("");

	// UI state
	const [searched, setSearched] = useState(false);

	const onTypeSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	const onSearchHandler = (event) => {
		event.preventDefault();
		setSearched(true);
	};

	let toRender = (
		<Home
			search={search}
			type={onTypeSearchHandler}
			clicked={onSearchHandler}
		/>
	);

	if (searched) {
		toRender = <Main />;
	}

	return toRender;
}

export default App;
