import * as actionTypes from "./actionTypes";

export const search = (value) => {
	return {
		type: actionTypes.SEARCH,
		search: value,
	};
};

export const searchStart = (value) => {
	return {
		type: actionTypes.SEARCH_START,
		search: value,
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

export const searchReset = () => {
	return {
		type: actionTypes.SEARCH_RESET,
	};
};
