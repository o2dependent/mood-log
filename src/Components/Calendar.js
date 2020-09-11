import React from 'react';
import moment from 'moment';
import MoodDay from './MoodDay';
import MoodWeekDay from './MoodWeekDay';
import MoodCalendarDay from './MoodCalendarDay';
import useStyles from '../Styles/CalendarStyles';
import FilterListIcon from '@material-ui/icons/FilterList';

export default function Calendar(props) {
	const { days, listMoods, curMonth, curYear, openFilterModal } = props;
	const newMoment = moment(`${curYear}-${curMonth}-01`);
	const firstWeekDay = newMoment.format('d');
	const daysInMonth = newMoment.endOf('month').format('D');

	const styleProps = {
		paddingTop: props.paddingTop,
		firstWeekDay: firstWeekDay,
		daysInMonth: daysInMonth,
	};
	const classes = useStyles(styleProps);

	return listMoods ? (
		<div className={classes.moodCalendar}>
			{days.map((d) => (
				<MoodDay key={d.day} day={d} />
			))}
		</div>
	) : (
		<div className={classes.fullCalendar}>
			{/* Filter button */}
			<div className={classes.filterButton} onClick={openFilterModal}>
				<FilterListIcon />
			</div>
			{/* Calendar create */}
			{moment.weekdaysShort().map((d) => (
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
