import React from 'react';
import { makeStyles } from '@material-ui/styles';
import colors from '../Styles/colors';

const useStyles = makeStyles({
	weekDay: {
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		background: colors.bgAccent,
		'& p': {
			fontSize: '2.5vh',
			color: colors.white,
			margin: '0',
			alignSelf: 'center',
		},
	},
});

export default function MoodWeekDay(props) {
	const { day } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.weekDay}>
			<p>{day}</p>
		</div>
	);
}
