import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from "react-bootstrap";
import { isEmpty, sortBy } from "lodash";

import Tile from "../Tile";

class Tiles extends React.Component { // eslint-disable-line react/prefer-stateless-function
	componentDidMount() {
		const { props: { loadTiles, tiles } } = this;
		if (isEmpty(tiles)) {
			loadTiles();
		}
	}

	prepareTiles = tiles => sortBy(tiles, [tile  => tile.coords.x, tile  => tile.coords.y]).map((tile, ind) => (<Tile key={ind} tile={tile}/>));

	render() {
		const { prepareTiles, props: { tiles } } = this;
		return (
			<Grid>
				<Row>
					{prepareTiles(tiles)}
				</Row>
			</Grid>
		);
	}
}

Tiles.propTypes = {
	loadTiles: PropTypes.func,
	tiles: PropTypes.array
};

Tiles.defaultProps = {
	tiles: []
};

export default Tiles;