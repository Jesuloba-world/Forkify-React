import axios from "axios";
import { put, delay } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* searchSaga(action) {
	yield put(actions.searchStart(action.search));
}
