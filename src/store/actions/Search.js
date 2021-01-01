import * as actionTypes from "./actionTypes";

export const searchSubmit = (event, value) => {
	event.preventDefault();
	return {
		type: actionTypes.SEARCH_SUBMIT,
		search: value,
	};
};
