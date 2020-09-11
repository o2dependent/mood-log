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
	filterButton: {
		transition: 'box-shadow 500ms, transform 500ms',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: '50%',
		position: 'absolute',
		width: '6vh',
		height: '6vh',
		bottom: '2vh',
		right: '4vw',
		zIndex: 50,
		background: colors.card.bgCard,
		boxShadow:
			'1px 1px 2px rgba(0, 0, 0, 0.25), -1px 2px 7px rgba(0, 0, 0, 0.5)',
		animation: '$filterShake 1500ms ease-in-out 5000ms',
		'& *': {
			color: colors.white,
		},
		'&:hover': {
			transform: 'translate(0, -5%)',
			boxShadow:
				'2px 2px 4px rgba(0, 0, 0, 0.25), -2px 4px 10px rgba(0, 0, 0, 0.5)',
		},
	},
	'@keyframes filterShake': {
		'0%': {
			transform: 'rotate(0deg)',
		},
		'30%': {
			transform: 'rotate(-15deg)',
		},
		'50%': {
			transform: 'rotate(15deg)',
		},
		'70%': {
			transform: 'rotate(-15deg)',
		},
		'100%': {
			transform: 'rotate(0deg)',
		},
	},
});
export default useStyles;
