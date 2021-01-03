import axios from "axios";
import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* searchSaga(action) {
	yield put(actions.searchStart(action.search));
	try {
		const response = yield axios.get(
			`https://forkify-api.herokuapp.com/api/search?q=${action.search}`
		);
		yield put(actions.searchSuccess(response.data.recipes));
	} catch (error) {
		yield put(actions.searchFail(error.message));
	}
}
