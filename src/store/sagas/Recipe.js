import axios from "axios";
import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* recipeSaga(action) {
	yield put(actions.recipeStart(action.id));
	try {
		const response = yield axios.get(
			`https://forkify-api.herokuapp.com/api/get?rId=${action.id}`
		);
		console.log(response);
	} catch (error) {}
}
