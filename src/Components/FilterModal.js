import React, { Component } from 'react';
import style from '../Styles/FilterModalStyles';
import { withStyles } from '@material-ui/styles';
import MoodTextField from './MoodTextField';
import { Slider } from '@material-ui/core';

class FilterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			month: this.props.curMonth,
			year: this.props.curYear,
			startTime: this.props.startTime,
			endTime: this.props.endTime,
		};
	}

	handleTimeRange = (e, value) => {
		this.setState({ startTime: value[0], endTime: value[1] });
	};

	render() {
		const { classes, close } = this.props;
		const { month, year, startTime, endTime } = this.state;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={close} />
				<div className={classes.filterForm}>
					<Slider
						value={[startTime, endTime]}
						min={0}
						max={24}
						valueLabelDisplay='auto'
						onChange={this.handleTimeRange}
						valueLabelFormat={(value) =>
							`${(value % 12) + 1} ${value > 12 ? 'pm' : 'am'}`
						}
						getAriaValueText={(value) =>
							`${(value % 12) + 1} ${value > 12 ? 'pm' : 'am'}`
						}
					/>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(FilterModal);
