import { tileActions } from "../actions/tileActions";

export default (state = [], action) => {
	if (!action) {
		return state;
	}
	switch (action.type) {
		case tileActions.TILES_LOAD:
      		return [...action.payload];
		break;
		case tileActions.TILES_CLEAR:
      		return [];
		break;
	}
	return state;
};