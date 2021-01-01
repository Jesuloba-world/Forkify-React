import * as actionTypes from "../actions/actionTypes";

const initial_state = {
	input: "",
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
				input: action.search,
			};
		case actionTypes.SEARCH_SUCCESS:
			return {
				...state,
				searching: false,
				result: action.result,
			};
		case actionTypes.SEARCH_FAIL:
			return {
				...state,
				searching: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
