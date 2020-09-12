import React, { Component } from 'react';
import style from '../Styles/FilterModalStyles';
import { withStyles } from '@material-ui/styles';
import MoodTextField from './MoodTextField';
import { Slider, Button, Typography } from '@material-ui/core';
import moment from 'moment';

class FilterModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			curMonth: this.props.curMonth,
			curYear: this.props.curYear,
			startTime: this.props.startTime,
			endTime: this.props.endTime,
		};
	}

	handleTimeRange = (e, value) => {
		this.setState({ startTime: value[0], endTime: value[1] });
	};

	handleSubmit = () => {
		const filterObj = Object.assign(this.state);
		this.props.setFilter(filterObj);
		this.props.close();
	};

	render() {
		const { classes, close } = this.props;
		const { month, year, startTime, endTime } = this.state;
		return (
			<div className={classes.modalContainer}>
				<div className={classes.modalBG} onClick={close} />
				<div className={classes.filterForm}>
					<h1>How are you feeling right now?</h1>
					<div>
						<Typography
							className={classes.sliderLabel}
							id='time-slider'
							gutterBottom
						>
							Time Range
						</Typography>
						<Slider
							className={classes.timeSlider}
							value={[startTime, endTime]}
							min={-1}
							max={24}
							valueLabelDisplay='auto'
							onChange={this.handleTimeRange}
							valueLabelFormat={(value) =>
								moment(value, 'H').format('ha')
							}
							getAriaValueText={(value) =>
								moment(value, 'H').format('ha')
							}
						/>
					</div>
					<Button
						className={classes.submitBtn}
						onClick={this.handleSubmit}
					>
						Save
					</Button>
				</div>
			</div>
		);
	}
}

export default withStyles(style)(FilterModal);
