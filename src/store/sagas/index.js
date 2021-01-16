import { all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { searchSaga } from "./Search";
import { recipeSaga } from "./Recipe";

export function* watchSearch() {
	yield all([takeLatest(actionTypes.SEARCH, searchSaga)]);
}

export function* watchRecipe() {
	yield all([takeLatest(actionTypes.RECIPE, recipeSaga)]);
}
