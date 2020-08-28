import React, { Component } from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/styles';

const style = {
	moodCalendarContainer: {},
	moodCalendar: {},
};

class MoodCalendar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dateObject: moment(),
		};
		this.weekdayShort = moment.weekdaysShort();
	}

	firstDayOfMonth = () => {
		let dateObject = this.state.dateObject;
		let firstDay = moment(dateObject).startOf('month').format('D');
		let lastDay = moment(dateObject).endOf('month').format('D');

		let daysArr = new Array(Number(lastDay))
			.fill()
			.map((v, i) => ({ day: i + 1, event: null }));

		console.log(daysArr);

		return firstDay;
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.moodCalendarContainer}>
				<div className={classes.moodCalendar}></div>
				<button onClick={this.firstDayOfMonth}>TEST</button>
			</div>
		);
	}
}

export default withStyles(style)(MoodCalendar);
