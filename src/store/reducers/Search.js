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
				searched: false,
			};
		case actionTypes.SEARCH_SUCCESS:
			return {
				...state,
				searching: false,
				searched: true,
				error: null,
				result: action.result,
			};
		case actionTypes.SEARCH_FAIL:
			return {
				...state,
				searching: false,
				searched: true,
				error: action.error,
				result: null,
			};
		default:
			return state;
	}
};

export default reducer;
