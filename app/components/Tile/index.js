import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from "react-bootstrap";

class Tile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
	render() {
		const { props: {containerWidth, tile}} = this;
		const tileStyle = {
            width: containerWidth
        };
		switch (tile.type) {
			case "image":
				return <Col md={4} className="tile" style={tileStyle}><img className="img-responsive" src={tile.src}/></Col>;
			case "tweet":
				return <Col md={4} className="tile" style={tileStyle}><p>{tile.post}</p></Col>;
			case "video":
				return <Col md={4} className="tile" style={tileStyle}> 
					<video controls>
						<source src={tile.src} type="video/mp4"/>
						Your browser does not support the video tag.
					</video> 		
				</Col>;
		}
		return null;
	}
}

Tile.propTypes = {
	tile: PropTypes.shape({})
};

export default Tile;