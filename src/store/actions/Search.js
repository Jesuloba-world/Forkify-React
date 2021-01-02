import * as actionTypes from "./actionTypes";

export const search = (value) => {
	return {
		type: actionTypes.SEARCH,
		search: value,
	};
};

export const searchStart = () => {
	return {
		type: actionTypes.SEARCH_START,
	};
};

export const searchSuccess = (searchResult) => {
	return {
		type: actionTypes.SEARCH_SUCCESS,
		result: searchResult,
	};
};

export const searchFail = (error) => {
	return {
		type: actionTypes.SEARCH_FAIL,
		error: error,
	};
};