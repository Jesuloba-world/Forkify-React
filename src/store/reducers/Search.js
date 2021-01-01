import * as actionTypes from "../actions/actionTypes";

const initial_state = {
	input: "",
	searching: false,
	searched: false,
	error: null,
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.SEARCH_SUBMIT:
			return {
				...state,
				input: action.search,
			};
		case actionTypes.SEARCH_START:
			return {
				...state,
				searching: true,
			};
		case actionTypes.SEARCH_SUCCESS:
			return {
				...state,
				searching: false,
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
