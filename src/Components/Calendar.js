import React from 'react';
import moment from 'moment';
import MoodWeekDay from './MoodWeekDay';
import MoodCalendarDay from './MoodCalendarDay';
import useStyles from '../Styles/CalendarStyles';

export default function Calendar(props) {
	const { days, curMonth, curYear } = props;
	const newMoment = moment(`${curMonth} 01 ${curYear}`, 'MMMM DD YYYY');
	const firstWeekDay = newMoment.format('d');
	const daysInMonth = newMoment.endOf('month').format('D');

	const styleProps = {
		paddingTop: props.paddingTop,
		firstWeekDay: firstWeekDay,
		daysInMonth: daysInMonth,
	};
	const classes = useStyles(styleProps);
	const weekDays = moment.weekdaysShort();

	return (
		<div className={classes.fullCalendar}>
			{/* Calendar create */}
			{weekDays.map((d) => (
				<MoodWeekDay key={d} day={d} />
			))}
			{Array(Number(firstWeekDay))
				.fill()
				.map((d, i) => (
					<div key={i} />
				))}
			{days.map((d) => (
				<MoodCalendarDay
					key={d.day}
					curMonth={curMonth}
					curYear={curYear}
					day={d}
				/>
			))}
		</div>
	);
}
