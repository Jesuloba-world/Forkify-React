import { Switch, Route } from "react-router-dom";

import Background from "./layout/background/background";
import Home from "./containers/Home/Home";

import "./App.css";

function App() {
	return (
		<Background>
			<Switch>
				<Route path="/" component={Home} />
			</Switch>
		</Background>
	);
}

export default App;
