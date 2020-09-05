import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import colors from './colors';
import moment from 'moment';

const useStyles = makeStyles({
	moodDay: {
		boxSizing: 'border-box',
		display: 'flex',
		position: 'relative',
		height: '100%',
		width: '100%',
		background: (props) =>
			props.day.event.length > 0
				? colors[
						'dateMood' +
							Math.round(
								props.day.event
									.map((e) => e.moodNum)
									.reduce((a, b) => a + b) /
									props.day.event.length
							)
				  ]
				: `${colors.lightPurp}2A`,
		'& p': {
			boxSizing: 'border-box',
			height: '3vh',
			width: '5vw',
			zIndex: 10,
			borderRadius: '0 0 5px 0',
			background: colors.bgAccent,
			position: 'absolute',
			top: 0,
			left: 0,
			fontSize: '2vh',
			color: colors.white,
			margin: '0 auto',
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
	seeMoreContainer: {
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		opacity: 0,
		background: colors.white50,
		transition: 'opacity 250ms',
		'&:hover': {
			opacity: 1,
		},
	},
	seeMore: {
		fontSize: '1.5vh',
		height: 'fit-content',
		width: 'fit-content',
		padding: '0.75vh 1vw',
		borderRadius: '5px',
		boxShadow:
			'0px 1px 2px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		color: colors.white,
		background: colors.lightPurp,
		textDecoration: 'none',
	},
});

export default function MoodDay(props) {
	const { day } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.moodDay}>
			<p>{day.day}</p>
			{day.event.length > 0 && (
				<div className={classes.seeMoreContainer}>
					<Link
						className={classes.seeMore}
						to={`/calendar/day/${moment(day.event[0].moment).format(
							'MM DD YYYY'
						)}`}
					>
						More
					</Link>
				</div>
			)}
		</div>
	);
}
