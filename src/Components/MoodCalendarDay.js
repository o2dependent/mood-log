import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import useStyles from '../Styles/CalendarDayStyles';

export default function MoodDay(props) {
	const { day, curMonth, curYear } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.moodDay}>
			<p>{day.day}</p>
			<div className={classes.seeMoreContainer}>
				<Link
					className={classes.seeMore}
					to={`/calendar/day/${moment(
						`${curMonth} ${day.day} ${curYear}`
					).format('MM DD YYYY')}`}
				>
					More
				</Link>
			</div>
		</div>
	);
}
