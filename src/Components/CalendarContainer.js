import React from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/styles';
import style from '../Styles/CalendarContainerStyles';
// Local Components
import Calendar from './Calendar';

function CalendarContainer(props) {
	// Extracted values
	const { classes, curMonth, curYear, moodsArr, startTime, endTime } = props;
	// Return array of days in current month and any logged moods --- day = { day: DAY_NUM,event: [...MOOD_EVENTS] }
	const getDaysInMonth = () => {
		const dateObject = moment(`${curMonth} ${curYear}`);
		const lastDay = moment(dateObject).endOf('month').format('D');

		const daysArr = new Array(Number(lastDay))
			.fill()
			.map((v, i) => ({ day: i + 1, event: [] }));

		moodsArr.forEach((m) => {
			const newMoment = moment(m.moment);
			const dayIdx = Number(newMoment.format('D')) - 1;

			const month = newMoment.format('MMMM');
			const year = newMoment.format('YYYY');
			const dateValid = month === curMonth && year === curYear;

			const time = Number(newMoment.format('H'));
			const timeValid = time >= startTime && time <= endTime;

			if (dateValid && timeValid) {
				daysArr[dayIdx].event.push(m);
			}
		});

		return daysArr;
	};
	// Array of days
	const days = getDaysInMonth();
	return (
		<div className={classes.moodCalendarContainer}>
			<Calendar curMonth={curMonth} curYear={curYear} days={days} />
		</div>
	);
}

export default withStyles(style)(CalendarContainer);
