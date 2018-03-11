import React from 'react';
import { connect } from 'react-redux';

import Tiles from "../../components/Tiles";
import * as tileActions from "../../actions/tileActions";

const mapStateToProps = state => ({
	tiles: state && state._root && state._root.entries && state._root.entries[1] && state._root.entries[1][1] ? state._root.entries[1][1] : []
});


const mapDispatchToProps = dispatch => ({
	loadTiles: () => dispatch(tileActions.loadTiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Tiles);