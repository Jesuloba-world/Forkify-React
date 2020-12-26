import { Switch, Route } from "react-router-dom";

import Background from "./layout/background/background";
import Home from "./containers/Home/Home";
import Main from "./containers/Main/Main";

import "./App.css";

function App() {
	return (
		<Background>
			<Switch>
				<Route path="/search" component={Main} />
				<Route path="/" component={Home} />
			</Switch>
		</Background>
	);
}

export default App;
