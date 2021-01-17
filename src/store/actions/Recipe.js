import * as actionTypes from "./actionTypes";

export const recipe = (id) => {
	return {
		type: actionTypes.RECIPE,
		id: id,
	};
};

export const recipeStart = (id) => {
	return {
		type: actionTypes.RECIPE_START,
		id: id,
	};
};

export const recipeSuccess = (result) => {
	return {
		type: actionTypes.RECIPE_SUCCESS,
		result: result,
	};
};

export const recipeFail = (error) => {
	return {
		type: actionTypes.RECIPE_FAIL,
		error: error,
	};
};
