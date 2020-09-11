import React, { Component } from 'react';
import style from '../Styles/FilterModalStyles';
import { withStyles } from '@material-ui/styles';

class FilterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { classes, close } = this.props;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={close} />
			</div>
		);
	}
}

export default withStyles(style)(FilterModal);
