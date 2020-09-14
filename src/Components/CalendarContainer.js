import React from 'react';
import { withStyles } from '@material-ui/styles';
import style from '../Styles/CalendarContainerStyles';
// Local Components
import Calendar from './Calendar';

function CalendarContainer(props) {
	// Extracted values
	const { classes, curMonth, curYear, days } = props;

	return (
		<div className={classes.moodCalendarContainer}>
			<Calendar curMonth={curMonth} curYear={curYear} days={days} />
		</div>
	);
}

export default withStyles(style)(CalendarContainer);
