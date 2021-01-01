import { all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { searchSaga } from "./Search";

export function* watchSearch() {
	yield all([takeLatest(actionTypes.SEARCH, searchSaga)]);
}
