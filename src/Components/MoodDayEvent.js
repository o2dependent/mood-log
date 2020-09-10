import React from 'react';
import { makeStyles } from '@material-ui/styles';
import colors from '../Styles/colors';

const useStyles = makeStyles({
	moodDayEvent: {
		height: '100%',
		width: '100%',
		background: (props) => colors[`dateMood${props.moodNum}`],
	},
});

export default function MoodDayEvent(props) {
	const classes = useStyles(props);

	return <div className={`${classes.moodDayEvent}`}></div>;
}
