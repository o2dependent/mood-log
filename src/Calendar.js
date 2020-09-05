import React from 'react';
import MoodDay from './MoodDay';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import MoodWeekDay from './MoodWeekDay';
import MoodCalendarDay from './MoodCalendarDay';

const useStyles = makeStyles({
	moodCalendar: {
		paddingTop: (props) => `${props.paddingTop}px`,
		display: 'grid',
		gridTemplateRows: '1fr',
		height: 'fit-content',
		width: '100%',
	},
	fullCalendar: {
		paddingTop: (props) => `${props.paddingTop}px`,
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateRows: (props) =>
			`1fr repeat(${
				Math.floor(
					(Number(props.daysInMonth) + Number(props.firstWeekDay)) / 7
				) + 1
			}, 1.5fr)`,
		gridTemplateColumns: 'repeat(7, 1fr)',
		height: '100vh',
		width: '100%',
	},
});

export default function Calendar(props) {
	const { days, fullCalendar, curMonth, curYear } = props;
	const newMoment = moment(`${curYear}-${curMonth}-01`);
	const firstWeekDay = newMoment.format('d');
	const daysInMonth = newMoment.endOf('month').format('D');
	console.log(
		Math.floor((Number(daysInMonth) + Number(firstWeekDay)) / 7) + 1
	);
	const styleProps = {
		paddingTop: props.paddingTop,
		firstWeekDay: firstWeekDay,
		daysInMonth: daysInMonth,
	};
	const classes = useStyles(styleProps);

	return fullCalendar ? (
		<div className={classes.fullCalendar}>
			{moment.weekdaysShort().map((d) => (
				<MoodWeekDay key={d} day={d} />
			))}
			{Array(Number(firstWeekDay))
				.fill()
				.map((d) => (
					<div />
				))}
			{days.map((d) => (
				<MoodCalendarDay key={d.day} day={d} />
			))}
		</div>
	) : (
		<div className={classes.moodCalendar}>
			{days.map((d) => (
				<MoodDay key={d.day} day={d} />
			))}
		</div>
	);
}
