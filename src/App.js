import { useState } from "react";

import Background from "./layout/background/background";
import Search from "./components/Search/Search";

import "./App.css";

function App() {
	const [search, setSearch] = useState("");

	const onTypeSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	const onSearchHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Background>
			<Search
				typed={search}
				type={onTypeSearchHandler}
				search={onSearchHandler}
			/>
		</Background>
	);
}

export default App;
