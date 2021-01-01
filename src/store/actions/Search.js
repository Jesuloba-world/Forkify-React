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
