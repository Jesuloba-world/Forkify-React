import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux
import { Provider } from "react-redux";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import searchReducer from "./store/reducers/Search";
import recipeReducer from "./store/reducers/Recipe";
// saga
import createSagaMiddleware from "redux-saga";
import { watchSearch, watchRecipe } from "./store/sagas/index";

const composeEnhancers =
	(process.env.NODE_ENV !== "production"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null) || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	search: searchReducer,
	recipe: recipeReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchSearch);
sagaMiddleware.run(watchRecipe);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
