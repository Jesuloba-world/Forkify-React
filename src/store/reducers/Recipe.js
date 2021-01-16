import * as actionTypes from "../actions/actionTypes";

const initial_state = {
	id: "",
	loading: false,
	loaded: false,
	error: null,
	result: null,
};

const reducer = (state = initial_state, action) => {
	switch (action.type) {
		case actionTypes.RECIPE_START:
			return {
				...state,
				loading: true,
				id: action.id,
				result: null,
			};
		case actionTypes.RECIPE_SUCCESS:
			return {
				...state,
				loading: false,
				loaded: true,
				error: null,
				result: action.result,
			};
		case actionTypes.RECIPE_FAIL:
			return {
				...state,
				loading: false,
				loaded: true,
				result: null,
				error: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
