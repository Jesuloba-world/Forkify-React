import { Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/UI/Spinner/Spinner";

import Background from "./layout/background/background";

import "./App.css";

const Home = lazy(() => import("./containers/Home/Home"));
const Main = lazy(() => import("./containers/Main/Main"));

function App() {
	return (
		<Background>
			<Switch>
				<Suspense fallback={Spinner}>
					<Route path="/search" component={Main} />
					<Route path="/" exact component={Home} />
				</Suspense>
			</Switch>
		</Background>
	);
}

export default App;
