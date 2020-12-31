import * as actiontypes from "../actions/actionTypes";

const initial_state = {
	input: "",
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actiontypes.SEARCH_SUBMIT:
			return state;
		default:
			return state;
	}
};

export default reducer;
