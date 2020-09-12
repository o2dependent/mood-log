import { makeStyles } from '@material-ui/styles';
import colors from './colors';

// TODO clean up unused styles

const useStyles = makeStyles({
	moodCalendar: {
		display: 'grid',
		gridTemplateRows: '1fr',
		height: 'fit-content',
		width: '100%',
	},
	fullCalendar: {
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateRows: (props) =>
			`1fr repeat(${
				Math.floor(
					(Number(props.daysInMonth) + Number(props.firstWeekDay)) / 7
				) + 1
			}, 1.5fr)`,
		gridTemplateColumns: 'repeat(7, 1fr)',
		height: '90vh',
		width: '100%',
	},
});
export default useStyles;
