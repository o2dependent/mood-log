import React from 'react';
import MoodDayEvent from './MoodDayEvent';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import colors from '../Styles/colors';
import moment from 'moment';

const useStyles = makeStyles({
	moodDay: {
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateColumns: '1fr 7fr 1fr',
		height: (props) => (props.day.event.length === 0 ? '4vh' : '8vh'),
		width: '100%',
		background: colors.bgPurp,
		'& p': {
			fontSize: (props) => (props.day.event.length === 0 ? '2vh' : '4vh'),
			color: colors.white,
			margin: '0 auto',
			alignSelf: 'center',
		},
	},
	weekDay: {
		boxSizing: 'border-box',
		display: 'flex',
		height: '4vh',
		width: '100%',
		background: colors.bgAccent,
		'& p': {
			fontSize: '2vh',
			color: colors.white,
			margin: '0 auto',
			alignSelf: 'center',
		},
	},
	moodEventContainer: {
		display: 'grid',
		height: '100%',
		width: '100%',
		gridTemplateColumns: (props) => `repeat(${props.day.event.length},1fr)`,
	},
});

export default function MoodDay(props) {
	const { day } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.moodDay}>
			<p>{day.day}</p>
			<div className={classes.moodEventContainer}>
				{day.event.length > 0 &&
					day.event.map((e) => (
						<MoodDayEvent key={e.moment} moodNum={e.moodNum} />
					))}
			</div>
			{day.event.length > 0 && (
				<Link
					to={`/calendar/day/${moment(day.event[0].moment).format(
						'MM DD YYYY'
					)}`}
				>
					MORE
				</Link>
			)}
		</div>
	);
}
