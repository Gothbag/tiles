import axios from "axios";

export const tileActions = {
	TILES_CLEAR: "tiles/clear",
	TILES_LOAD: "tiles/load"
};

export const loadTiles = () => {
	return dispatch => axios.get("https://s3-eu-west-1.amazonaws.com/snipperwall-challenge/frontend-test.json")
		.then(function (response) {
			dispatch({
				type: tileActions.TILES_LOAD,
				payload: response.data.socials
			});
		})
		.catch(function (error) {
			console.log(error);
		});
};