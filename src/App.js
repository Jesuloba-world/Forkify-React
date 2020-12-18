import { useState } from "react";

import Background from "./layout/background/background";
import Search from "./components/Search/Search";

import "./App.css";

function App() {
	const [search, setSearch] = useState("");

	const onTypeSearchHandler = (event) => {
		setSearch(event.target.value);
	};

	return (
		<Background>
			<Search search={search} typed={onTypeSearchHandler} />
		</Background>
	);
}

export default App;
