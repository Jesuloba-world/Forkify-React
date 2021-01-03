import * as actionTypes from "../actions/actionTypes";

const initial_state = {
	searching: false,
	searched: false,
	error: null,
	result: null,
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_START:
			return {
				...state,
				searching: true,
				searched: true,
			};
		case actionTypes.SEARCH_SUCCESS:
			return {
				...state,
				searching: false,
				error: null,
				result: action.result,
			};
		case actionTypes.SEARCH_FAIL:
			return {
				...state,
				searching: false,
				error: action.error,
				result: null,
			};
		case actionTypes.SEARCH_RESET:
			return {
				...state,
				searching: false,
				searched: false,
				error: null,
				result: null,
			};
		default:
			return state;
	}
};

export default reducer;
